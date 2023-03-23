import { useState } from "react";
import { useEffect } from "react";
import NavIcon from "./NavIcon";
import { Link } from "react-router-dom";


// type ListProps = React.ComponentProps<typeof NavIcon>;

// type Props = {
//   text: string;
//   text1: string;
//   text2: string;
// } & ListProps;

const Navbar = () => {
  // バーガーメニュー
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  // 消す
  const [showBar, setShowBar] = useState(false);

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
    setShowBar(basePosition <= scrollPosition);
  };

  return (
    <>
      {/* ナビ */}
      <nav className="flex justify-around py-10 mx-auto bg-white  us">
        <div className="flex sm:hidden">
          <button
            onClick={handleMenuOpen}
            type="button"
            className="z-2 space-y-2"
          >
            <div
              className={
                openMenu
                  ? "w-9 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
              }
            />

            <div
              className={
                openMenu
                  ? "w-9 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
              }
            />
          </button>
        </div>

        {/* ここよ */}

        <ul className="items-center hidden space-x-8 sm:flex">
          <NavIcon text1={"TOP"} />
          <NavIcon text2={"ABOUT"} />
          <NavIcon text3={"SKILLS"} />
          <NavIcon text4={"WORKS"} />
        </ul>
        {/* </motion.div>
        </div> */}
        {/* ここまで */}
      </nav>
      {!showBar && (
        <nav
          className={
            openMenu
              ? "text-left fixed bg-slate-50 bg-opacity-90 right-0 top-0 w-2/5 h-44 flex flex-col justify-start pt-8 px-5 ease-out duration-1000 "
              : "fixed top-[-100%] right-0 w-2/5 ease-in duration-1000  "
          }
        >
          <ul className="items-center">
            <li className="mr-5">
              <Link to={`/`}>
                <a href="">TOP</a>
              </Link>
            </li>
            <li className="mr-5 ">
              <Link to={`/About2/`}>
                <a
                  href=""
                  onClick={() =>
                    window.scrollTo({ top: 1500, behavior: "smooth" })
                  }
                >
                  ABOUT
                </a>
              </Link>
            </li>
            <li className="mr-5">
              <Link to={`/Skills2/`}>
                <a
                  href=""
                  onClick={() =>
                    window.scrollTo({ top: 1500, behavior: "smooth" })
                  }
                >
                  SKILLS
                </a>
              </Link>
            </li>
            <li className="mr-5">
              <Link to={`/Works2/`}>
                <a
                  href=""
                  onClick={() =>
                    window.scrollTo({ top: 1500, behavior: "smooth" })
                  }
                >
                  WORKS
                </a>
              </Link>
            </li>
            <li className="mr-5">
              <a
                onClick={() =>
                  window.scrollTo({ top: 2000, behavior: "smooth" })
                }
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
