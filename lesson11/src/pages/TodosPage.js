import {Container} from "@mui/material";
import TodosListContainer from "../components/TodosListContainer";
import {Routes, Route} from "react-router-dom";
import TodoModalWindow from "../components/TodoModalWindow";
import Header from "../components/Header";
import Filters from "../components/Filters";

export default function TodosPage(){
    return(
        <Container maxWidth='md'>
            <Header/>
            <Filters/>
            <TodosListContainer/>
            <Routes>
                <Route path={'/create'} element={<TodoModalWindow/>} />
            </Routes>
        </Container>
    )
}