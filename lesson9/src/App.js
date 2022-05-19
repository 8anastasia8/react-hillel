import {Provider} from "react-redux";
import List from "./components/TodoListContainer";
import Form from "./components/TodoForm";
import store from "./store/store";
import Container from "@mui/material/Container";

function App() {
    return (
        <Container maxWidth="md">
            <Provider store={store}>
                <h1>TODO LIST</h1>
                <Form/>
                <List/>
            </Provider>
        </Container>
    );
}

export default App;
