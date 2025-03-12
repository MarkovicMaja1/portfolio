/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from "react";
//import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { HiGlobeAlt } from "react-icons/hi2";
import { GoArchive } from "react-icons/go";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Link as ScrollLink } from "react-scroll";
import './Navbar.css';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

   // Funkcija koja prati skrolovanje
   const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true); // Ako je skrolovano više od 50px, postavi navbar sa tamnijim pozadinskim kolorom
    } else {
      setScrolled(false); // Ako nije skrolovano dovoljno, postavi navbar kao transparentan
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      id: "home"
    },
    {
      text: "Technologies",
      icon: <InfoIcon />,
      id: "technologies"
    },
    {
      text: "Portfolio",
      icon: <InfoIcon />,
      id: "portfolio"
    },
    {
      text: "About",
      icon: <InfoIcon />,
      id: "aboutme"
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      id: "contact"
    },
  ];

  const handleMenuClick = (id) => {
    setOpenMenu(false);
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className={scrolled ? "navbar-scrolled" : ""}>
      <div className="nav-logo-container">
      <span className="highlight">M</span>AJA  <span className="highlight">M</span>ARKOVIC
      </div>
      <div className="navbar-links-container">
        <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
        <ScrollLink to="portfolio" smooth={true} duration={500} offset={-100}>Portfolio</ScrollLink>
        <ScrollLink to="technologies" smooth={true} duration={500} offset={-100}>Technologies</ScrollLink>
        <ScrollLink to="aboutme" smooth={true} duration={500} offset={-100}>About</ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
        {/* <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a> */}
        {/* <ScrollLink className="primary-button" to="contact" smooth={true} duration={500}>Kontaktirajte nas!</ScrollLink> */}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => handleMenuClick(item.id)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;

