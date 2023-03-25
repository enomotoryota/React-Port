import MyAvatar2 from "./MyAvatar2";
import Navbar2 from "./Navbar2";
import Copy from "./copy";
import PageUp from "./PageUp";
import { motion } from "framer-motion";



const About2 = () => {
  return (
    <>
      <Navbar2 />
      <MyAvatar2 />
      <div
        className="flex flex-col items-center  justify-center  bg-white
        xxl:py-80 xl:py-60 lg:py-40 md:py-20  xs:pt-10 xs:pb-40 us"
      >
                   {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [50, 0] }}
              transition={{ duration: 2, ease: "easeOut" }}
            > */}
        <h2 className="md:mb-20 xs:mb-10 md:text-5xl xs:text-3xl">Career</h2>
        {/* </motion.div> */}

        <div className="text-left mx-5 xs:text-xs sm:text-sm md:text-md font-sawarabi">
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
            <p className="mb-5 xs:leading-6">
              2009年：高校卒業後、専門学校に入学
              <br />
              スーパーで品出し業務
              <br />
              映画好きから声優を目指し2016年上京
            </p>
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
            <p className="mb-5 xs:leading-6">
              2016年：東京で活動しつつ大手お菓子工場で検品業務
              <br />
              ライン作業の効率化を提案、実施を行い生産率を上げることに成功。
              <br />
              紗々の副エリアリーダーを担当してました。
            </p>
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
            <p className="mb-5 xs:leading-6">
              2018年：大阪に戻り営業職
              <br />
              顧客向け資料をExcelで作成、提案書をAdobeXDで作成
              <br />
              資料や提案書をわかりやすく伝えることに力を注ぎました。
            </p>
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
            <p className="mb-5 xs:leading-6">
              2020年：昨年末で退職、独学でweb制作をしながら英語学習を始める。
              <br />
              フィリピンへ語学留学する予定がコロナで断念
              <br />
            </p>
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
            <p className="mb-5 xs:leading-6">
              2022年：結婚して東京でエンジニア
              <br />
              エンジニアとしてプロジェクトに携わる傍ら
              <br />
              トレーナーとして新入社員の育成やメンバーのフォロー、勉強会のコンテンツ作成、講師として登壇
              <br />
              休日はアプリ開発などでスキルを磨いています。
              <br />
              今後は要件定義、基本設計、詳細設計といったシステム開発の上流に関われる力を身につけたいと考えています。
            </p>
          </motion.div>
        </div>
      </div>
      <Copy />
      <PageUp />
    </>
  );
};

export default About2;
