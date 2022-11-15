import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <Router>
          <Routes>
            <Route path={'/'} element={<HomePage />}></Route>
            <Route path={'/tasks/:user_id'} element={<TaskPage />}></Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
