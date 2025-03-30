import { CssBaseline, Container, AppBar, Toolbar, Typography } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import StudentView from './pages/StudentView';
import AdminView from './pages/AdminView';

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            College Copyshop
          </Typography>
          <Link to="/" style={{ color: 'white', marginRight: 20 }}>Student</Link>
          <Link to="/admin" style={{ color: 'white' }}>Admin</Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Routes>
          <Route path="/" element={<StudentView />} />
          <Route path="/admin" element={<AdminView />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;