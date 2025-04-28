import { Outlet, Link } from "react-router-dom"

import logoSvg from "./assets/logo.jpg"

export const MainLayout = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <img width="100" src={logoSvg} alt="AniWiki logo" />
          <div className="header-title">
            <h1>AniWiki</h1>
            <p>Explore, discover, and dive into the world of anime!</p>
          </div>
        </Link>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
