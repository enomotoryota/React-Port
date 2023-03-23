import { BsArrowUpCircle } from "react-icons/bs";
import { useEffect, useState } from "react";

const PageUp = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // スクロールイベントをListen
  useEffect(() => {
    window.addEventListener("scroll", watchScroll);
    return () => {
      window.removeEventListener("scroll", watchScroll);
    };
  }, []);

  // Scrollを検知しボタン表示のフラグを切り替え
  const watchScroll = () => {
    const basePosition = 800;
    const scrollPosition = window.scrollY;
    setShowScrollToTop(basePosition <= scrollPosition);
  };
  return (
    <>
      <div className="flex flex-row justify-center">
        <div id="pagedown" className="">
          {showScrollToTop && (
            <span
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="scroll-to-top"
            >
              <BsArrowUpCircle size={50} color={"#ADD8E6"} />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default PageUp;
