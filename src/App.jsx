import Header from "./components/header/Header";
import HeroBanner from "./components/heroBanner/HeroBanner";
import Skill from "./components/skills/Skill";
import Project from "./components/projects/Project";
import Experience from "./components/experience/Experience";

const App = () => {
    return (
        <div>
            <Header />
            <HeroBanner />
            <Skill />
            <Experience />
            <Project />
        </div>
    );
};

export default App;
