import React, { useState, useEffect } from "react";
import "./index.css";
import { LinkAHeader } from "../../ui/links";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(false);

  /* el onScroll es para cuando scrolle el usuario se le agrega una clase al header
    y el window.scrollY>0 hacer que se bajo cuando scrolleemos*/
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      header?.classList.toggle("abajo", window.scrollY > 0);
      header?.classList.toggle("sinOpacidad", header.scrollTop >= 100);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const header = document.querySelector(".header");
    if (opacity) {
      header?.classList.toggle("sinOpacidad", window.scrollY > 0);
      console.log("hola");
    } else {
      header?.classList.remove("sinOpacidad");
      console.log("no hola");
    }
  }, [opacity]);

  return (
    <div className="header">
      <div className="header_logo"> ARKT3CH </div>
      <div className={`header_items ${isOpen && "open"}`}>
        <LinkAHeader href="#"> INICIO</LinkAHeader>
        <LinkAHeader href="#"> SERVICIOS</LinkAHeader>
        <LinkAHeader href="#"> SOBRE NOSOTROS</LinkAHeader>
        <LinkAHeader href="#"> CONTACTANOS</LinkAHeader>
      </div>
      <div
        className={`header_toggle ${isOpen && "open"}`}
        onClick={() => {
          setIsOpen(!isOpen);
          setOpacity(!opacity);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export { Header };
