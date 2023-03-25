import { Link } from "react-router-dom";
import Iam2 from "../static/images/img4.png";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <>
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
                  duration: 1.5,
                },
              },
            }}
            initial="offscreen" // 初期表示はoffscreen
            whileInView="onscreen" // 画面内に入ったらonscreen
            viewport={{ once: false, amount: 0 }}
          > */}
            <h2 className="md:text-5xl xs:text-3xl md:mb-20 xs:mb-10  us ">
              Works
            </h2>
          {/* </motion.div> */}
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
            <div className="flex flex-row">
              <Link to={`/Works2/`}>
                <img
                  width={300}
                  src={Iam2}
                  alt="iam"
                  className="rounded-10 mb-9"
                />
              </Link>
            </div>
          </motion.div>
        </div>{" "}
      </div>
    </>
  );
};

export default Works;
