import React from "react";
import Nav from "./components/nav";
import Hero from "./components/sections/hero";
import "./styles.css";
import { useIntersection } from "use-intersection";
import { setGlobalState } from "./components/state";
import CheckScrollBar from "./components/helpers/check-scroll-bar";
import ScrollDownArrow from "./components/scroll-down-arrow";
import About from "./components/sections/about";
import Projects from "./components/sections/projects";
// Needed
import "@splidejs/react-splide/css/skyblue";
import Contact from "./components/sections/contact";
import Footer from "./components/footer";
import Skill from "./components/sections/skill";


//test
export default function App() {
  const scrollRef = React.useRef(null);
  const section1Ref = React.useRef(null);
  const section2Ref = React.useRef(null);
  const section3Ref = React.useRef(null);
  const section4Ref = React.useRef(null);
  const section5Ref = React.useRef(null);

  const section1Visible = useIntersection(section1Ref, {
    threshold: 0.5
  });
  const section2Visible = useIntersection(section2Ref, {
    threshold: 0.5
  });
  const section3Visible = useIntersection(section3Ref, {
    threshold: 0.5
  });
  const section4Visible = useIntersection(section4Ref, {
    threshold: 0.5
  });
  const section5Visible = useIntersection(section5Ref, {
    threshold: 0.5
  });

  const sectionsVisibility = {
    "1": [section1Ref, section1Visible],
    "2": [section2Ref, section2Visible],
    "3": [section3Ref, section3Visible],
    "4": [section4Ref, section4Visible],
    "5": [section5Ref, section5Visible]
  };

  React.useEffect(() => {
    console.log(sectionsVisibility);
    Object.keys(sectionsVisibility).map((key) => {
      if (sectionsVisibility[key][1]) {
        console.log(Number(key) + 1);
        setGlobalState("nextSection", Number(key) + 1);
        return null;
      }
      return null;
    });
  }, [section1Visible, section2Visible, section3Visible, section4Visible, section5Visible]);

  return (
    <div className="App" ref={scrollRef}>
      <ScrollDownArrow
        sectionsVisibility={sectionsVisibility} />
      <Nav />
      <Hero sectionRef={section1Ref} />
      <About sectionRef={section2Ref} />
      <Skill sectionRef={section3Ref}/>
      <Projects sectionRef={section4Ref} />
      <Contact sectionRef={section5Ref} />
      <Footer />
      <CheckScrollBar scrollRef={scrollRef} />
    </div>
  );
}
