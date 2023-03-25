import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// const springEffectVariants = {
//   // can name the properties whatever you like
//   init: { y: -100 },
//   animate: { y: 0, transition: { duration: 3, type: "spring" } }
// };
// const springEffectVariants2 = {
//   // can name the properties whatever you like
//   init: { y: -100 },
//   animate: { y: 0, transition: { duration: 4, type: "spring" } }
// };

// const springEffectVariants3 = {
//   // can name the properties whatever you like
//   init: { y: -100 },
//   animate: { y: 0, transition: { duration: 4, type: "spring" } }
// };

const Contact = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center  bg-white ">
        <div className="flex flex-col us">
          <div className="flex flex-col items-center mx-8 ">
            <div>
              {/* <motion.div
              variants={{
                offscreen: {
                  // 画面外の場合のスタイル
                  y: 100,
                  opacity: 0,
                },
                onscreen: {
                  // 画面内の場合のスタイル
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                  },
                },
              }}
              initial="offscreen" // 初期表示はoffscreen
              whileInView="onscreen" // 画面内に入ったらonscreen
              viewport={{ once: false, amount: 0 }}
            > */}
              <h2 className="md:text-5xl xs:text-3xl md:mb-20 xs:mb-10 ">
                Contact
              </h2>
              {/* </motion.div> */}
            </div>{" "}
          </div>

          <div className="flex flex-row justify-center">
            <div>
              <motion.div
                variants={{
                  offscreen: {
                    // 画面外の場合のスタイル
                    y: 100,
                    // x: 100,
                    opacity: 0,
                  },
                  onscreen: {
                    // 画面内の場合のスタイル
                    y: 0,
                    // x:0,
                    opacity: 1,
                    transition: {
                      duration: 1,
                    },
                  },
                }}
                initial="offscreen" // 初期表示はoffscreen
                whileInView="onscreen" // 画面内に入ったらonscreen
                viewport={{ once: false, amount: 0 }}
              >
                <div className="pl-4 pr-4">
                  <a
                    className="flex flex-row  items-center "
                    href="https://twitter.com/on__diary"
                  >
                    <FaTwitter size="3rem" color="" />
                  </a>
                </div>
              </motion.div>
            </div>{" "}
            <div>
              <motion.div
                variants={{
                  offscreen: {
                    // 画面外の場合のスタイル
                    y: 100,
                    opacity: 0,
                  },
                  onscreen: {
                    // 画面内の場合のスタイル
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 1.5,
                    },
                  },
                }}
                initial="offscreen" // 初期表示はoffscreen
                whileInView="onscreen" // 画面内に入ったらonscreen
                viewport={{ once: false, amount: 0 }}
              >
                <div className="pl-4 pr-4">
                  <a
                    className="flex flex-row  items-center"
                    href="https://github.com/enomotoryota"
                  >
                    <FaGithub size="3rem" className="" />
                  </a>
                </div>
              </motion.div>
            </div>{" "}
            <div>
              <motion.div
                variants={{
                  offscreen: {
                    // 画面外の場合のスタイル
                    y: 100,
                    opacity: 0,
                  },
                  onscreen: {
                    // 画面内の場合のスタイル
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 2,
                    },
                  },
                }}
                initial="offscreen" // 初期表示はoffscreen
                whileInView="onscreen" // 画面内に入ったらonscreen
                viewport={{ once: false, amount: 0 }}
              >
                <div className="pl-4 pr-4">
                  <a
                    className=" flex flex-row  items-center"
                    href="mailto:enooto19920409@gmail.com"
                  >
                    <FaEnvelope size="3rem" className="" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
