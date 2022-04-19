import Contacts from "./components/Contacts";
import ThemeContext, {themes} from "./context/themeContext";
import {useState} from "react";
import './index.css'

export default function App() {
    const [theme, setTheme] = useState(themes.light);

    const toggleThemeClick = () =>
        theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)

    return (
        <ThemeContext.Provider value={theme}>
            <div onClick={toggleThemeClick}>
                <button className='themeBtn'>Change theme</button>
            </div>
            <Contacts/>
        </ThemeContext.Provider>

    )
}