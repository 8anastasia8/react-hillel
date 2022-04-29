import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AlbumsPage from "./pages/AlbumsPage";
import UsersPage from "./pages/UsersPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'/'} element={<DashboardPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
