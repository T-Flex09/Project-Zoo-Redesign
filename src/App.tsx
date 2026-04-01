import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import Home from './Pages/Home/Home';
import Sponsors from './Pages/Sponsors/Sponsors';
import Results from './Pages/Results/Results';
import Gallery from './Pages/Gallery/Gallery';
import Team from './Pages/Team/Team';
import Activity from './Pages/Activity/Activity';

export default function App() {
  const [chosenPage, setChosenPage] = useState('home');

  const renderPage = () => {
    switch (chosenPage) {
      case 'home': return <Home />;
      case 'team': return <Team />;
      case 'activity': return <Activity />;
      case 'results': return <Results />;
      case 'sponsors': return <Sponsors />;
      case 'gallery': return <Gallery />;
      default: return <Home />;
    }
  };

  return (<>
      {/* Navbar rămâne fix sus */}
      <Navbar setPage={setChosenPage} />

        <main>
            {/* AnimatePresence permite animația de "exit" (dispariție) */}
            <AnimatePresence mode="wait">
            <motion.div
                key={chosenPage} // Esențial: React vede cheia nouă și declanșează animația
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }} // Ajustează viteza fade-ului aici
            >
                {renderPage()}
            </motion.div>
            </AnimatePresence>
        </main>

        {/* Footer rămâne fix jos */}
        <Footer />
    </>);
}