import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// type Props = {
//   text1: string;
//   text2: string;
// };

const NavIcon = (props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [50, 0] }}
        transition={{ duration: 1.25, ease: "easeOut" }}
      >
        <li className="mr-5 text-3xl">
          <a>
            <Link to={`/Home/`}>{props.text1}</Link>
          </a>
        </li>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [30, 0] }}
          transition={{ duration: 1.25, ease: "easeOut" }}
        >
          <li className="mr-5 text-3xl">
            <Link to={`/About2/`}>
              <a
                href=""
                onClick={() =>
                  window.scrollTo({ top: 1500, behavior: "smooth" })
                }
              >
                {props.text2}
              </a>
            </Link>
          </li>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [40, 0] }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <li className="mr-5 text-3xl">
            <Link to={`/Skills2/`}>
              <a
                href=""
                onClick={() =>
                  window.scrollTo({ top: 1500, behavior: "smooth" })
                }
              >
                {props.text3}
              </a>
            </Link>
          </li>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [50, 0] }}
          transition={{ duration: 1.75, ease: "easeOut" }}
        >
          <li className="mr-5 text-3xl">
            <Link to={`/Works2/`}>
              <a
                href=""
                onClick={() =>
                  window.scrollTo({ top: 1500, behavior: "smooth" })
                }
              >
                {props.text4}
              </a>
            </Link>
          </li>
        </motion.div>
      </motion.div>
    </>
  );
};

export default NavIcon;
