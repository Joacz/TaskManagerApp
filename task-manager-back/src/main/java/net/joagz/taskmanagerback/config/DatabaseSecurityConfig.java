package net.joagz.taskmanagerback.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class DatabaseSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .jdbcAuthentication()
                .dataSource(dataSource)
                .usersByUsernameQuery(
                        "select username, password, status from Users where username=?")
                .authoritiesByUsernameQuery(
                        "select u.username, p.profile from UserProfiles up " +
                                "inner join Users u on u.id = up.user_id " +
                                "inner join Profiles p on p.id = up.profile_id " +
                                "where u.username = ?");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers(HttpMethod.DELETE, "/tasks/").authenticated()
                .antMatchers(HttpMethod.POST, "/tasks/").authenticated()
                .antMatchers(HttpMethod.GET, "/tasks/").authenticated();
        http
                .authorizeRequests()
                .antMatchers("/tasks/admin/view").hasAnyAuthority("ADMIN", "SUPERVISOR");
        http
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/users/**").hasAnyAuthority("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/users/**").hasAnyAuthority("ADMIN")
                .antMatchers(HttpMethod.POST, "/users/**").permitAll()
                .and().formLogin().permitAll();
        http.csrf().disable();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}