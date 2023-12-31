import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";

export default function Home() {
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname.replace("/", "") || "Home");
  }, [location.pathname]);

  const handleLinkClick = (link) => {
    if (link === "Home") {
      navigate("/");
    } else {
      setActiveLink(link);
      navigate(link);
    }
  };

  return (
    <div className="home-container">
      <header>
        <div className="header-body" id="header">
          <div className="logo">
            <img src="./vips-logo-lw.png" alt="" />
          </div>
          <div className="title">VIPS Research Portal</div>
        </div>
      </header>
      <nav>
        <div className="navbar-body">
          <Link to={"/login"}>Login</Link>
          <Link to={"/sign-up"}>Sign up</Link>
        </div>
      </nav>
      <main>
        <div className="main-container">
          <div className="navigation-tabs-container">
            <div
              className={`navigation-tab ${activeLink === "Home" ? "active" : ""}`}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </div>
            <div
              className={`navigation-tab ${activeLink === "NewResearchProposal" ? "active" : ""}`}
              onClick={() => handleLinkClick("NewResearchProposal")}
            >
              New Research Proposal
            </div>
            <div
              className={`navigation-tab ${activeLink === "Publications" ? "active" : ""}`}
              onClick={() => handleLinkClick("Publications")}
            >
              Publications
            </div>
            <div
              className={`navigation-tab ${activeLink === "Help" ? "active" : ""}`}
              onClick={() => handleLinkClick("Help")}
            >
              Help
            </div>
          </div>
          <div className="navigation-window-container">
            <div className="navigation-window">
              {activeLink === "Home" ? (
                <img src="./vips-campus.jpg" alt="" />
              ) : (
                <Outlet />
              )}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-body">
          &#169; Vivekananda Institute of Professional Studies. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}