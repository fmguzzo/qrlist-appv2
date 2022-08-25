import "./App.scss";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home/Home.component";
import Layout from "./routes/Layout/Layout.component";
import List from "./routes/List/List.component";
import Login from "./routes/Login/Login.component";
import Profile from "./routes/Profile/Profile.component";
import Register from "./routes/Register/Register.component";
import NotFound from "./routes/NotFound/NotFound.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="list" element={<List />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
