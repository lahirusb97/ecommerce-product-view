import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import search from "../assets/Icons/search.svg";
import cart from "../assets/Icons/cart.svg";
import user from "../assets/user.webp";
import arrow from "../assets/Icons/arrowwhite.svg";
import MobileNav from "./MobileNav";
import { Dropdown, ButtonToolbar } from "rsuite";

//
import { Input, InputGroup } from "rsuite";

export default function Nav() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("profile");
  const styles = {
    width: windowWidth > 400 ? 300 : 220,
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleDropdownSelect = (eventKey) => {
    setActiveItem(eventKey);
    // Do something with the selected item
  };
  return (
    <div className="bg-black px-4">
      {windowWidth > 1079 ? (
        <div className="flex justify-between items-center max-w-7xl m-auto py-2">
          <div className="flex items-center">
            <img src={Logo} className="w-20 bg-white p-2" alt="logo" />
            <a className="text-white font-semibold italic ml-2">NewShoes.com</a>
          </div>
          <ul className="flex">
            <li className="text-white px-2 font-semibold">
              <a href="#">Home</a>
            </li>
            <li className="text-white px-2 font-semibold">
              <a href="#">New</a>
            </li>{" "}
            <li className="text-white px-2 font-semibold relative">
              <a href="#">Shoes</a>
              <span className="w-12 h-1 bg-white absolute -bottom-1 left-1/2 -translate-x-1/2"></span>
            </li>{" "}
            <li className="text-white px-2 font-semibold">
              <a href="#">Brands</a>
            </li>{" "}
            <li className="text-white px-2 font-semibold">
              <a href="#">About</a>
            </li>
            <li className="text-white px-2 font-semibold">
              <a href="#" className="text-white">
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center">
            <InputGroup inside style={styles}>
              <Input placeholder="Search Product" />
              <InputGroup.Button style={{ background: "#546882" }}>
                <img src={search} />
              </InputGroup.Button>
            </InputGroup>

            <div className="flex items-center ml-4">
              <h3 className="text-white">Cart (0)</h3>
              <img src={cart} className="px-2 w-12" />
            </div>

            <div className="flex">
              <ButtonToolbar>
                <Dropdown
                  onSelect={handleDropdownSelect}
                  activeKey={activeItem}
                  renderToggle={renderIconButton}
                >
                  <Dropdown.Item eventKey="profile">Profile</Dropdown.Item>
                  <Dropdown.Item eventKey="dashboard">Dashboard</Dropdown.Item>
                  <Dropdown.Item eventKey="settings">Settings</Dropdown.Item>
                  <Dropdown.Item eventKey="signout">Sign Out</Dropdown.Item>
                </Dropdown>
              </ButtonToolbar>
              <img
                src={user}
                className=" object-cover bg-white h-16 w-16 rounded-full border-2 border-black "
              />
            </div>
          </div>
        </div>
      ) : (
        <MobileNav width={windowWidth} />
      )}
    </div>
  );
}
const renderIconButton = (props, ref) => {
  return <img {...props} ref={ref} src={arrow} className="w-8 ml-2 mr-4" />;
};
