import "./App.scss";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home/Home.component";
import Layout from "./routes/Layout/Layout.component";
import ListPreview from "./routes/ListPreview/ListPreview.component";
import ListNew from "./routes/ListNew/ListNew.component";
import ListUpdate from "./routes/ListUpdate/ListUpdate.component";
import Login from "./routes/Login/Login.component";
import Profile from "./routes/Profile/Profile.component";
import Register from "./routes/Register/Register.component";
import PageNotFound from "./routes/PageNotFound/PageNotFound.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="list" element={<ListPreview />} />
        <Route path="list/update/:listId" element={<ListUpdate />} />
        <Route path="list/new" element={<ListNew />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
