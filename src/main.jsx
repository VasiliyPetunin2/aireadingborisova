import {createRoot} from 'react-dom/client'
import {NavigationProvider} from "./context/NavigationContext.jsx";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <NavigationProvider>
        <App/>
    </NavigationProvider>
)
