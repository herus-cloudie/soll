import { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderWrapper from "./Header.style";
import ConnectWalletButton from "../../connectWalletButton/ConnectWalletButton";
import DropdownDemo from "../dropdownDemo/DropdownDemo";
import MobileMenu from "../mobileMenu/MobileMenu";

import Logo from "../../../assets/images/kkk-removebg-preview.png";
import Telegram from "../../../assets/images/icons/telegram.svg";
import Discord from "../../../assets/images/icons/discord.svg";
import Twitter from "../../../assets/images/icons/twitter.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import Whitepaper from "../../../assets/pdf/whitepaper.pdf";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  return (
    <>
      <HeaderWrapper className="header-section">
        <div className="container">
          <div className="gittu-header-content">
            <div className="gittu-header-left">
              <ul className="social-links">
                <li>
                  <a
                    href="https://web.telegram.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Telegram} alt="icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Discord} alt="icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Twitter} alt="icon" />
                  </a>
                </li>
              </ul>
              <ul className="gittu-header-left-menu">
                <li>
                  <a href={'#'} target="_blank" rel="noreferrer">
                    Whitepaper
                  </a>
                </li>
              </ul>
            </div>
            <div className="gittu-header-center">
              <NavLink className="gittu-header-logo" to="/" end>
                <img src={Logo} alt="Logo" width={100} height={100} style={{filter : 'invert(1)'}}/>
              </NavLink>
            </div>
            <div className="gittu-header-right">
              <div className="gittu-header-menu-toggle">
                <button className="menu-toggler" onClick={handleMobileMenu}>
                  <HiMenuAlt3 />
                </button>
              </div>
              <div className="gittu-header-right-menu">
                <ConnectWalletButton />

                <DropdownDemo />
              </div>
            </div>
          </div>
        </div>
      </HeaderWrapper>
      {isMobileMenu && <MobileMenu mobileMenuHandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
