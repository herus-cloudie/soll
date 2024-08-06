import { NavLink } from "react-router-dom";
import MobileMenuWrapper from "./MobileMenu.style";
import Logo from "../../../assets/images/kkk-removebg-preview.png";
import Telegram from "../../../assets/images/icons/telegram.svg";
import Discord from "../../../assets/images/icons/discord.svg";
import Twitter from "../../../assets/images/icons/twitter.svg";
import { AiOutlineClose } from "react-icons/ai";
import ConnectWalletButton from "../../connectWalletButton/ConnectWalletButton";
import Whitepaper from "../../../assets/pdf/whitepaper.pdf";
import Data from "../../../assets/data/demoMenuList";

const MobileMenu = ({ mobileMenuHandle }) => {
  return (
    <MobileMenuWrapper>
      <div className="gittu-mobile-menu-content">
        <div className="mobile-menu-top">
          <NavLink className="mobile-logo" to={"/"} end>
            <img src={Logo} alt="Logo" width={100} height={100} style={{filter : 'invert(1)'}}/>
          </NavLink>

          <button className="mobile-menu-close" onClick={mobileMenuHandle}>
            <AiOutlineClose />
          </button>
        </div>

        <ul className="mobile-menu-list mb-40">
        {[{title: "User Interface 1", url: "/home-eight"},{title: "User Interface 2" , url: "/",}]?.map((item, i) => (
            <li key={i}>
              <NavLink to={item.url} end>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="mobile-social-links mb-40">
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
            <a href="https://discord.com/" target="_blank" rel="noreferrer">
              <img src={Discord} alt="icon" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src={Twitter} alt="icon" />
            </a>
          </li>
        </ul>

        <ul className="mobile-menu-list mb-40">
          <li>
            <a href={'#'} target="_blank" rel="noreferrer">
              Whitepaper
            </a>
          </li>
        </ul>

        <div className="d-flex justify-content-center">
          <ConnectWalletButton />
        </div>
      </div>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
