import {HomePage, DiagnosisPage, ReadingPage, ForParentsAndTeachersPage} from "./pages/index.js";
import {Header, Footer} from "./components/index.js";
import {pages} from "./constants/pages.js";
import {useNavigation} from "./context/NavigationContext.jsx";
import styles from "./App.module.css";

function App() {
    const {currentPage} = useNavigation();
    return (
        <div className={styles.container}>
            <Header />

            {currentPage === pages.HOME.id && <HomePage/>}
            {currentPage === pages.DIAGNOSIS.id && <DiagnosisPage/>}
            {currentPage === pages.READING.id && <ReadingPage/>}
            {currentPage === pages.FORPARENTSANDTEACHERS.id && <ForParentsAndTeachersPage/>}

            <Footer />
        </div>
    )
}

export default App
