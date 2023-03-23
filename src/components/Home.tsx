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
      <div className="flex flex-row justify-center  xxl:my-80 xl:my-60 lg:my-40 md:my-20  xs:my-10 ">
        <Skills />
        <Works />
      </div>
      <Contact />
      <Copy />
      <PageUp />
    </>
  );
};

export default Home;
