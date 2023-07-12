import React, { useEffect, useState } from "react";
import "./index.css";
import { TitleCardTechnologies, TextNormal } from "../../ui/typography";

type propsCardTechnologies = {
  img: string;
  title: string;
  description: string;
};

function CardTechnologies(props: propsCardTechnologies) {
  return (
    <div className="card-container">
      <div className="card-container-img">
        <img src={props.img} alt="img-services" className="card-img" />
      </div>
      <div className="card-container-title">
        <TitleCardTechnologies>{props.title}</TitleCardTechnologies>
      </div>
      <div className="card-container-description">
        <TextNormal>{props.description}</TextNormal>
      </div>
    </div>
  );
}

export { CardTechnologies };
