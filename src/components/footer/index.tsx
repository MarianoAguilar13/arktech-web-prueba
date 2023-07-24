import React, { useState } from "react";
import "./index.css";
import { LinkAFooter } from "../../ui/links";
import { TextWhite } from "../../ui/typography";
import { InstagramLogo, FacebookLogo, LinkedinLogo } from "../../ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footerNav">
        <div className="footerNavLinks">
          <LinkAFooter>Login</LinkAFooter>
          <LinkAFooter>Mi perfil</LinkAFooter>
          <LinkAFooter>Buscar</LinkAFooter>
          <LinkAFooter>Logout</LinkAFooter>
        </div>
        <div className="footerNavMarca">
          <TextWhite>@2023</TextWhite>
        </div>
      </div>
      <div className="footerSocial">
        <div className="footerSocialLinks">
          <TextWhite>Redes</TextWhite>
          <div className="footerSocialLinksLink">
            <FacebookLogo></FacebookLogo>
            <LinkAFooter> Arktech</LinkAFooter>
          </div>
          <div className="footerSocialLinksLink">
            <InstagramLogo></InstagramLogo>
            <LinkAFooter>Arktech</LinkAFooter>
          </div>
          <div className="footerSocialLinksLink">
            <LinkedinLogo></LinkedinLogo>
            <LinkAFooter> Arktech</LinkAFooter>
          </div>
        </div>

        <div className="footerSocialMarca">
          <TextWhite>@2023</TextWhite>
        </div>
      </div>
    </div>
  );
}

export { Footer };
