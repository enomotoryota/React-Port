import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div
        className="flex flex-col items-center  bg-white
       xxl:py-80 xl:py-60 lg:py-40 md:py-20  xs:py-10  us"
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
            <h2 className="flex justify-center md:mb-20 xs:mb-10 md:text-5xl xs:text-3xl">
              Career
            </h2>
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
                  duration: 1,
                },
              },
            }}
            initial="offscreen" // 初期表示はoffscreen
            whileInView="onscreen" // 画面内に入ったらonscreen
            viewport={{ once: false, amount: 0 }}
          >
            <div className="text-left mx-5 xs:text-xs font-sawarabi">
              <p className=" mb-5 xs:leading-5">20歳：スーパーでアルバイト</p>
              <p className=" mb-5 xs:leading-6">
                24歳：埼玉のチョコレート工場で検品作業→紗々エリアのマネージャー
              </p>

              <p className=" mb-5 xs:leading-6">
                26歳：大阪で営業→USJのマリオエリア、梅田一丁目一番地エリア担当
              </p>
              <p className=" mb-5 xs:leading-6">
                28歳：フィリピンに語学留学の予定→COVID-19流行→断念→職業訓練
              </p>
              <p className=" mb-5 xs:leading-6">
                30歳：結婚して東京でエンジニア
              </p>
            </div>
          </motion.div>

      </div>
    </>
  );
};

export default About;
