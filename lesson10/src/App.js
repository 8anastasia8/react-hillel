import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";
import UsersPage from "./pages/UsersPage";
import UsersCreatePage from "./pages/UsersCreatePage";
import UserEditPage from "./pages/UserEditPage";
import DashboardPage from "./pages/DashboardPage";

export default function App(){
  return(
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path={'users'} element={<UsersPage/>}/>
            <Route path={'users/create'} element={<UsersCreatePage/>}/>
            <Route path={'users/:id'} element={<UserEditPage/>}/>
            <Route path={'/'} element={<DashboardPage/>}/>
          </Routes>
        </Provider>
      </BrowserRouter>
  )
}