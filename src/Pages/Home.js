import HomePage from '../Components/Homepage/HomePage';
import {motion} from 'framer-motion'
import Particle from '../Components/Homepage/Particle';

function Home() {
  return (
    <motion.div
      initial={{opacity:0}} 
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:0.5}}
    >
      <div>
        <Particle />
        <HomePage displayedActivityMs={0} />
      </div>
    </motion.div>
  );
};

export default Home;