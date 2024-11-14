"use client";
import { useGetMeQuery } from "@/redux/api/me";
import scss from "./Header.module.scss";
import { FaSpotify } from "react-icons/fa";
import Link from "next/link";
import { CiSaveDown1 } from "react-icons/ci";
import { useState } from "react";
import SearchTracks from "@/components/shared/SearchTracks";
import { GoBell, GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { useGetPlayListQuery } from "@/redux/api/playlist";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const { data: session } = useGetMeQuery();
  const [close, setClose] = useState<string>("");
  const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);

  const handleLogin = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/login`,
      "_self"
    );
  };

  const handleLogout = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/logout`,
      "_self"
    );
  };

  const { data: music } = useGetPlayListQuery();
  console.log(music, "musics");
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link href="/">
              <FaSpotify />
            </Link>
          </div>

          <div className={scss.search}>
            <button
              onClick={() => router.push("/")}
              className={scss.searchHomeIcon}
            >
              <GoHome />
            </button>
            <div className={scss.search_inputBlock}>
              <SearchTracks />
              <button className={scss.search_inputBlock__btnLeft}>
                <FiSearch />
              </button>
              <button className={scss.search_inputBlock__btnRight}>
                <div className={scss.searchLine}></div>
                <IoFileTrayFullOutline  />
                </button>
            </div>
          </div>

          <div className={scss.auth}>
            <button
              onClick={() =>
                window.open("https://open.spotify.com/download", "_blank")
              }
            >
              Узнать больше о Premium.
            </button>
            <button
              onClick={() =>
                window.open("https://open.spotify.com/download", "_blank")
              }
            >
              <CiSaveDown1 />
              установить приложения
            </button>

            <button className={scss.authNotation}>
              <GoBell />
            </button>

            <div className={scss.userProfile}>
              {session ? (
                <>
                  <div
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className={scss.user}
                  >
                    <h5>{session.display_name.slice(0, 1).toUpperCase()}</h5>
                  </div>

                  {userMenuOpen && (
                    <div className={scss.userMenu}>
                      <h4>Аккаунт</h4>
                      <h4>Профиль</h4>
                      <h4>Переход на Premium</h4>
                      <h4>Настройки</h4>
                      <hr />
                      <button onClick={handleLogout}>Выйти</button>
                    </div>
                  )}
                </>
              ) : (
                <button className={scss.login} onClick={handleLogin}>
                  Войти
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
