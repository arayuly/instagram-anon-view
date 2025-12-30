import { Routes } from "react-router";
import { Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
// import ProfileSearch from "../pages/Search";

function App() {
    return (
        <Routes>
            <Route path="/*" element={<Layout />}>
                <Route index element={<Home />} />
                {/* <Route path="search" element={<ProfileSearch />} /> */}
                {/* <Route path="profile" element={<Profile />} /> */}
            </Route>
        </Routes>
    );
}

export default App;
