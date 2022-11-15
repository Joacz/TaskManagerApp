import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import Title from './components/Title';
import Card from './components/Card';
import ContainerBetween from './components/ContainerBetween';
import manageImg from './imgs/manage.svg';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <main>
          <div className='title-container'>
            <div className='text-container'>
              <Title>Taski</Title>
              <span>Make your tasks clearer</span>
            </div>
          </div>
          <ContainerBetween>
            <Card
              icon={manageImg}
              title='Manage'
              button="Create a task"
              content='Manage your tasks, add new ones, delete old ones, check them and receive notifications when they have expired!'
            />
          </ContainerBetween>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
