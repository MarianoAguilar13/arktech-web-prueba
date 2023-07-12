import React, { useState, useEffect } from "react";
import "./index.css";
import { LinkAHeader } from "../../ui/links";
import { TitleHero, TextLargeWhite } from "../../ui/typography";

function HomeHero() {
  return (
    <div className="hero">
      <TitleHero>Arktech Soluciones Informáticas</TitleHero>
      <TextLargeWhite>
        Somos un equipo que brinda soluciones con código
      </TextLargeWhite>
    </div>
  );
}

export { HomeHero };
