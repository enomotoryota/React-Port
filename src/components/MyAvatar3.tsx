import React from "react";
// import Iam from "../static/images/my_avatar.jpg";
import Iam2 from "../static/images/img3.png";
import { motion } from "framer-motion";

const MyAvatar2 = () => {
  return (
    <>
      <div className="flex md:flex-row xs:flex-col items-center justify-center xxl:my-80 xl:my-60 lg:my-40 md:my-20  xs:my-10">
        <img width={300} src={Iam2} alt="iam" className="rounded-10 mb-9" />
        <div className="md:ml-10 xs:ml-0  us">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [50, 0] }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <h1 className="text-3xl mb-10">ONOUE RYOTA</h1>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [50, 0] }}
              transition={{ duration: 3, ease: "easeOut" }}
            >
              <h1 className="text-3xl ml-32 mr-10">Skills Page</h1>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAvatar2;
