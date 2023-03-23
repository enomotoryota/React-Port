import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div
        className="flex flex-col items-center  bg-white
      xxl:py-80 xl:py-80 lg:py-60 md:py-60  xs:py-60  us"
      >
        <div className="flex flex-col items-center mx-8 ">
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
                    duration: 1,
                  },
                },
              }}
              initial="offscreen" // 初期表示はoffscreen
              whileInView="onscreen" // 画面内に入ったらonscreen
              viewport={{ once: false, amount: 0 }}
            >
              <h2 className="md:text-5xl xs:text-3xl md:mb-20 xs:mb-10 ">
                Contact
              </h2>
            </motion.div>
          </div>{" "}
        </div>

        <div className="flex flex-row justify-center">
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
    </>
  );
};

export default Contact;
