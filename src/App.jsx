import {HomePage, DiagnosisPage, ReadingPage, ForParentsAndTeachersPage, AboutPage} from "./pages/index.js";
import {Header} from "./components/index.js";
import {pages} from "./constants/pages.js";
import {useNavigation} from "./context/NavigationContext.jsx";
import styles from "./App.module.css";

function App() {
    const {page, setPage} = useNavigation();

    return (
        <div className={styles.container}>
            <Header />

            {page === pages.HOME && <HomePage/>}
            {page === pages.DIAGNOSIS && <DiagnosisPage/>}
            {page === pages.READING && <ReadingPage/>}
            {page === pages.FORPARENTSANDTEACHERS && <ForParentsAndTeachersPage/>}
            {page === pages.ABOUT && <AboutPage/>}
        </div>
    )
}

export default App
