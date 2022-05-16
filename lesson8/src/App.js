import {BrowserRouter, Routes, Route} from "react-router-dom";
import AlbumsPage from "./pages/AlbumsPage";
import UsersPage from "./pages/UsersPage";
import DashboardPage from "./pages/DashboardPage";
import EditUserFormPage from "./pages/EditUserFormPage";
import CreateUserFormPage from "./pages/CreateUserFormPage";
import {Container} from "@mui/material";

export default function App() {
    return (
        <Container maxWidth='lg'>
            <BrowserRouter>
                <Routes>
                    <Route path='albums' element={<AlbumsPage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'users/:userId'} element={<EditUserFormPage/>}/>
                    <Route path={'users/create'} element={<CreateUserFormPage/>}/>
                    <Route path={'/'} element={<DashboardPage/>}/>
                    <Route path={'home'} element={<DashboardPage/>}/>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}
