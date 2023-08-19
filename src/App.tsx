import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from 'Components/Header/HomePage';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<HomePage />} path="/" />
                </Routes>
            </Router>
        </>
    );
}

export default App;
