import { useState } from "react";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Logo from "../assets/logo.png";
import search from "../assets/Icons/search.svg";
import Menubtn from "../assets/Icons/Menubtn.svg";
import user from "../assets/user.webp";
import arrow from "../assets/Icons/arrow.svg";
import { Dropdown } from "rsuite";
import cartdark from "../assets/Icons/cartdark.svg";
import { Input, InputGroup } from "rsuite";

const styles = {
  width: 300,
};
export default function MobileNav({ width }) {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("profile");

  const handleImgClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownSelect = (eventKey) => {
    setActiveItem(eventKey);
    // Do something with the selected item
  };

  return (
    <div>
      <div className="flex justify-between py-4 mx-4">
        <img src={Menubtn} onClick={() => setOpen(true)} />

        <InputGroup inside style={styles}>
          <Input placeholder="Search Product" />
          <InputGroup.Button style={{ background: "#546882" }}>
            <img src={search} />
          </InputGroup.Button>
        </InputGroup>
      </div>
      <Drawer
        size={width < 600 ? "full" : "sm"}
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header className="flex items-start xsm:flex-row flex-col j">
          <Drawer.Title>
            <div className="flex items-center">
              <img
                src={Logo}
                className="w-12 xsm:w-20 bg-white p-2"
                alt="logo"
              />
              <a className="text-black font-semibold italic ml-2 ">
                NewShoes.com
              </a>
            </div>
          </Drawer.Title>

          <Drawer.Actions className="w-full xsm:w-28 flex">
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
              className=" object-cover bg-white h-12 w-12 xsm:h-16 xsm:w-16 rounded-full border-2 border-black "
            />
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body className="p-0">
          <div>
            <div className="flex items-center justify-end">
              <h3 className="text-black font-semibold text-lg">Cart (0)</h3>
              <img src={cartdark} className="px-2 w-12" />
            </div>
            <ul>
              <li className="text-black  py-2 text-lg font-semibold px-4  hover:bg-litegray">
                <a href="#">Home</a>
              </li>
              <li className="text-black py-2 text-lg font-semibold px-4 hover:bg-litegray">
                <a href="#">New</a>
              </li>{" "}
              <li className="bg-darkgray text-white py-2 text-lg font-semibold px-4 hover:bg-litegray">
                <a href="#">Shoes</a>
              </li>{" "}
              <li className="text-black py-2 text-lg font-semibold px-4 hover:bg-litegray">
                <a href="#">Brands</a>
              </li>{" "}
              <li className="text-black py-2 text-lg font-semibold px-4 hover:bg-litegray">
                <a href="#">About</a>
              </li>
              <li className="text-black py-2 text-lg font-semibold px-4 hover:bg-litegray">
                <a href="#" className="textblacke">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </Drawer.Body>
      </Drawer>
    </div>
  );
}
const renderIconButton = (props, ref) => {
  return <img {...props} ref={ref} src={arrow} className="w-8 ml-2 mr-4" />;
};
