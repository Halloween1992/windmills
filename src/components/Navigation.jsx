import { NavigationWrapper } from "../wrappers.js/NavigationWrapper";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Navigation = () => {
  return (
    <NavigationWrapper>
      <p className="logo">Windmills</p>
      <ul>
        <li>
          <a href={"#header"}>strona głowna</a>
        </li>
        <li>
          <a href="#about-us">o nas</a>
        </li>
        <li>
          <a href="#offers">oferta</a>
        </li>
        <li>
          <a href="#gallery">galeria</a>
        </li>
        <li>
          <a href="#footer">kontakt</a>
        </li>
      </ul>
      <div className="socials">
        <p>(+48) 798 450 972</p>
        <a href="/">
          <FaFacebookF />
        </a>
        <a href="/">
          <FaInstagram />
        </a>
      </div>
    </NavigationWrapper>
  );
};

export default Navigation;
