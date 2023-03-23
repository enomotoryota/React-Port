import Navbar2 from "./Navbar2";
import MyAvatar3 from "./MyAvatar3";
import Copy from "./copy";
import PageUp from "./PageUp";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiAdobexd,
  SiReact,
  SiTypescript,
  SiFigma,
} from "react-icons/si";
import { motion } from "framer-motion";

const Skills2 = () => {
  return (
    <>
      <Navbar2 />
      <MyAvatar3 />
      <div
        className="flex flex-col  items-center  bg-white
      xxl:py-80 xl:py-60 lg:py-40 md:py-20  xs:py-10 us"
      >
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
          <h2 className="md:text-5xl xs:text-3xl md:mb-20 xs:mb-10">Skills</h2>
        </motion.div>

        <div
          className="grid gap-x-10 gap-y-4 md:grid-cols-3 xs:grid-cols-1 mb-20 mx-10
      "
        >
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
            <div className="flex flex-col mx-2 mb-20">
              <div className="flex flex-row">
                <SiHtml5 size={50} color={"#ccc"} />
                <SiCss3 size={50} color={"#ccc"} />
              </div>
              <h2 className="my-4">HTML5/CSS3</h2>
              <p className="">
                レスポンシブやSassを含め、基本的なコーディングは問題ありません。BEMやFLOCSSの使用経験はあります。使用エディターはVScodeです。
              </p>
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
            <div className="flex flex-col mx-2 mb-20">
              <SiJavascript size={50} color={"#ccc"} />
              <h2 className="my-4">JavaScript</h2>
              <p>
                あまり複雑なコードはスクラッチから書くことはできませんが。ライブラリの実行や基本的なコードは問題なく書けます。
              </p>
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
                  duration: 1.5,
                },
              },
            }}
            initial="offscreen" // 初期表示はoffscreen
            whileInView="onscreen" // 画面内に入ったらonscreen
            viewport={{ once: false, amount: 0 }}
          >
            <div className="flex flex-col mx-2 mb-20">
              <SiAdobexd size={50} color={"#ccc"} />
              <h2 className="my-4">AdobeXD</h2>
              <p>
                ドキュメント作成（画面仕様書、遷移図）の作成、プロトタイプで実際の動作確認での使用経験あり
              </p>
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
                  duration: 1.75,
                },
              },
            }}
            initial="offscreen" // 初期表示はoffscreen
            whileInView="onscreen" // 画面内に入ったらonscreen
            viewport={{ once: false, amount: 0 }}
          >
            <div className="flex flex-col mx-2 mb-20">
              <SiReact size={50} color={"#ccc"} />
              <h2 className="my-4">React</h2>
              <p>
                アプリケーション設計する上で「変更に強いか」を常に意識して書いてます。component設計、props、useEffect、useStateの実装できます。
              </p>
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
                  duration: 2,
                },
              },
            }}
            initial="offscreen" // 初期表示はoffscreen
            whileInView="onscreen" // 画面内に入ったらonscreen
            viewport={{ once: false, amount: 0 }}
          >
            <div className="flex flex-col mx-2 mb-20">
              <SiTypescript size={50} color={"#ccc"} />
              <h2 className="my-4">TypeScript</h2>
              <p>
                ジェネリクスを使った型定義を意識してます。効率化のため、実行時のエラーをコンパイル時に吐き出すような書き方を心掛けています。
              </p>
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
                  duration: 2.25,
                },
              },
            }}
            initial="offscreen" // 初期表示はoffscreen
            whileInView="onscreen" // 画面内に入ったらonscreen
            viewport={{ once: false, amount: 0 }}
          >
            <div className="flex flex-col mx-2 mb-20">
              <SiFigma size={50} color={"#ccc"} />
              <h2 className="my-4">Figma</h2>
              <p>
                ドキュメント作成（サイトマップ、フレームワーク）の作成、プロトタイプで実際の動作確認での使用経験あり
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

export default Skills2;
