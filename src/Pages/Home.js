import Intro from '../Features/Intro';
import AboutMe from '../Features/aboutMe';
import TechStack from '../Features/techStack';
import Projects from '../Features/projects';
import Info from '../Features/bottomInfo';

function Home() {
  return (
    <div>
      <Intro displayedActivityMs={0} />
      <AboutMe />
      <TechStack />
      <Projects />
      <Info />
    </div>
  );
};

export default Home;