import MyAvatar4 from "./MyAvatar4";
import Navbar2 from "./Navbar2";
import Copy from "./copy";
import PageUp from "./PageUp";
import { motion } from "framer-motion";
import Web from "../static/images/Web.png";
import { Link } from "react-router-dom";

const Works2 = () => {
  return (
    <>
      <Navbar2 />
      <MyAvatar4 />

      <div
        className="flex flex-col  items-center bg-aziwai-0
      xxl:py-80 xl:py-60 lg:py-40 md:py-20  xs:py-10 "
      >
        {/* Web制作 */}
        <motion.div
          variants={{
            offscreen: {
              // 画面外の場合のスタイル
              y: 50,
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
          <h2 className="md:text-5xl xs:text-3xl md:mb-20 xs:mb-10 us">
            Works
          </h2>
        </motion.div>

        <div className="grid gap-x-10 gap-y-32 md:grid-cols-2 xs:grid-cols-1 mb-20 mx-10">
          <motion.div
            variants={{
              offscreen: {
                // 画面外の場合のスタイル
                y: 50,
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
            <div className="flex flex-col mb-20 relative  ">
              <Link to={`/Works2/`}>
                <img
                  width={300}
                  src={Web}
                  alt="iam"
                  className="absolute shadow-2xl"
                />
                <div className="absolute top-24  bg-white us2 ">
                  {" "}
                  <p className="text-xl top-24 left-16 mx-20">Webサイト作成</p>
                </div>{" "}
              </Link>
            </div>
          </motion.div>

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
                  duration: 1.25,
                },
              },
            }}
            initial="offscreen" // 初期表示はoffscreen
            whileInView="onscreen" // 画面内に入ったらonscreen
            viewport={{ once: false, amount: 0 }}
          >
            <div className="flex flex-col mx-2 my-10 ">
              <h2 className="my-4 text-lg">友人のコーポレートサイト制作</h2>
              <p className="text-lg">
                マークアップ言語とjQuery、少しJSを使用
                <br />
                Figmaをドキュメント作成に使用
              </p>
            </div>
          </motion.div>

          {/* アプリ開発 */}

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
                  duration: 1.25,
                },
              },
            }}
            initial="offscreen" // 初期表示はoffscreen
            whileInView="onscreen" // 画面内に入ったらonscreen
            viewport={{ once: false, amount: 0 }}
          >
            <div className="flex flex-col mx-2 my-10">
              <h2 className="my-4 text-lg">アプリ開発</h2>
              <p className="text-lg">
                ReactとTypeScript使用
                <br />
                Figmaをドキュメント作成に使用
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={{
              offscreen: {
                // 画面外の場合のスタイル
                y: 50,
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
            <Link to={`/Works2/`}>
              <div className="flex flex-col mb-20 relative  ">
                <img
                  width={300}
                  src={Web}
                  alt="iam"
                  className="absolute shadow-2xl"
                />
                <div className="absolute top-24  bg-white us2 ">
                  {" "}
                  <p className="text-xl top-24 left-16 mx-20">Webアプリ作成</p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* その他 */}

          <motion.div
            variants={{
              offscreen: {
                // 画面外の場合のスタイル
                y: 50,
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
            <div className="flex flex-col mb-20 relative  ">
              <Link to={`/Works2/`}>
                <img
                  width={300}
                  src={Web}
                  alt="iam"
                  className="absolute shadow-2xl"
                />
                <div className="absolute top-24  bg-white us2 ">
                  {" "}
                  <p className="text-xl top-24 left-16 mx-20">その他、成果物</p>
                </div>{" "}
              </Link>
            </div>
          </motion.div>

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
                  duration: 1.25,
                },
              },
            }}
            initial="offscreen" // 初期表示はoffscreen
            whileInView="onscreen" // 画面内に入ったらonscreen
            viewport={{ once: false, amount: 0 }}
          >
            <div className="flex flex-col mx-2 my-10 ">
              <h2 className="my-4 text-lg">その他、制作したものはこちら</h2>
              <p className="text-lg">
                ロゴ、WordPressでノーコード開発
                <br />
                遊びで制作したもの
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Copy />
      <PageUp />
    </>
  );
};

export default Works2;
