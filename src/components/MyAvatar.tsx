// import Iam from "../static/images/my_avatar.jpg";
import Iam2 from "../static/images/img1.png";
import { motion } from "framer-motion";

const springEffectVariants = {
  // can name the properties whatever you like
  init: { y: -100 },
  animate: { y: 0, transition: { duration: 3, type: "spring" } }
};
const springEffectVariants2 = {
  // can name the properties whatever you like
  init: { y: -100 },
  animate: { y: 0, transition: { duration: 4, type: "spring" } }
};



const MyAvatar = () => {
  return (
    <>
      <div className="flex md:flex-row xs:flex-col items-center justify-center responsive">
        <img width={150} src={Iam2} alt="iam" className="rounded-10 mb-14 " />
        <div className="md:ml-10 xs:ml-0  us">
        <motion.div
        className="demo"
        variants={springEffectVariants}
        initial="init"
        animate="animate"
        // we don't need transition attribute anymore, it's embedded in the variants
      >
            <h1 className="text-3xl mb-10 ">ONOUE RYOTA</h1>
          </motion.div>

          <motion.div
        className="demo"
        variants={springEffectVariants2}
        initial="init"
        animate="animate"
        // we don't need transition attribute anymore, it's embedded in the variants
      >
            <h1 className="text-3xl ml-32">Web Engineer</h1>
          </motion.div>
        </div>
      </div>






      {/* <div className="flex md:flex-row xs:flex-col items-center justify-center xxl:my-80 xl:my-60 lg:my-40 md:my-20  xs:my-10">
        <img width={300} src={Iam2} alt="iam" className="rounded-10 mb-9 " />
        <div className="md:ml-10 xs:ml-0">
          <h1 className="text-3xl mb-10">ONOUE RYOTA</h1>
          <h1 className="text-3xl ml-32">Web Engineer</h1>
        </div>
      </div> */}
    </>
  );
};

export default MyAvatar;
