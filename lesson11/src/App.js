import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";
import TodosPage from "./pages/TodosPage";


export default function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path={'*'} element={<TodosPage/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}