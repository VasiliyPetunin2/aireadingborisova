import {HomePage, DiagnosisPage, ReadingPage, ForParentsAndTeachersPage, AboutPage} from "./pages/index.js";
import {Header, Footer} from "./components/index.js";
import {pages} from "./constants/pages.js";
import {useNavigation} from "./context/NavigationContext.jsx";
import styles from "./App.module.css";

function App() {
    const {page, setPage} = useNavigation();
    return (
        <div className={styles.container}>
            <Header />

            {page === pages.HOME.id && <HomePage/>}
            {page === pages.DIAGNOSIS.id && <DiagnosisPage/>}
            {page === pages.READING.id && <ReadingPage/>}
            {page === pages.FORPARENTSANDTEACHERS.id && <ForParentsAndTeachersPage/>}
            {page === pages.ABOUT.id && <AboutPage/>}

            <Footer />
        </div>
    )
}

export default App
