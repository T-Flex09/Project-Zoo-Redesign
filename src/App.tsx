import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import Home from './Pages/Home/Home';
import Sponsors from './Pages/Sponsors/Sponsors';
import Results from './Pages/Results/Results';
import Gallery from './Pages/Gallery/Gallery';
import Team from './Pages/Team/Team';
import Activity from './Pages/Activity/Activity';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
        <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/results" element={<Results />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </motion.div>
        </AnimatePresence>
    );
}

export default function App() {
    return (<>
        <BrowserRouter>
            <Navbar />

            <main>
                <AnimatedRoutes />
            </main>

            <Footer />
        </BrowserRouter>
    </>);
}