import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home/Home.component';
import Navigation from './routes/Navigation/Navigation.component';
import List from './routes/List/List.component';
import Login from './routes/Login/Login.component';
import NotFound from './routes/NotFound/NotFound.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="list" element={<List />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
