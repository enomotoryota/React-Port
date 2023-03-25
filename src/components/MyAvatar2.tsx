import React from "react";
// import Iam from "../static/images/my_avatar.jpg";
import Iam2 from "../static/images/img2.png";
import { motion } from "framer-motion";

const springEffectVariants = {
  // can name the properties whatever you like
  init: { y: 100 },
  animate: { y: 0, transition: { duration: 3, type: "spring" } }
};
const springEffectVariants2 = {
  // can name the properties whatever you like
  init: { y: 100 },
  animate: { y: 0, transition: { duration: 4, type: "spring" } }
};

const MyAvatar2 = () => {
  return (
    <>
      <div className="flex md:flex-row xs:flex-col items-center justify-center responsive">
        <img width={150} src={Iam2} alt="iam" className="rounded-10 mb-14" />
        <div className="md:ml-10 xs:ml-0  us">
          <div>
          <motion.div
        className="demo"
        variants={springEffectVariants}
        initial="init"
        animate="animate"
        // we don't need transition attribute anymore, it's embedded in the variants
      >
              <h1 className="text-3xl mb-10">ONOUE RYOTA</h1>
            </motion.div>
          </div>
          <div>
          <motion.div
        className="demo"
        variants={springEffectVariants2}
        initial="init"
        animate="animate"
        // we don't need transition attribute anymore, it's embedded in the variants
      >
              <h1 className="text-3xl ml-32 mr-7">About Page</h1>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAvatar2;
