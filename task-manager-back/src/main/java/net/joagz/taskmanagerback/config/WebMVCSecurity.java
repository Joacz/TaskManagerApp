package net.joagz.taskmanagerback.config;

import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

public class WebMVCSecurity extends WebMvcConfigurerAdapter {

  @Bean
  public WebMvcConfigurer corsController() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:3000")
            .allowedMethods("PUT", "DELETE", "GET", "POST");
      }
    };
  }

}
