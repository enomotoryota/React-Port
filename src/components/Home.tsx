import Navbar from "./Navbar";
import MyAvatar from "./MyAvatar";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Skills from "./Skills";
import NavIcon from "./NavIcon";

import Copy from "./copy";
import PageUp from "./PageUp";

const Home = () => {
  return (
    <>
      <Navbar />
      <MyAvatar />
      <About />
      <div className="h-screen flex flex-col justify-center ">
      <div className="flex flex-row justify-center">
        <Skills />
        <Works />
      </div>
      </div>

      <Contact />
      <Copy />
      <PageUp />
    </>
  );
};

export default Home;
