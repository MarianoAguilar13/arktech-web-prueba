import React, { useEffect, useState } from "react";
import { CardTechnologies } from "../cards-technologies";
import "./index.css";

function Services() {
  return (
    <div className="services-container">
      <CardTechnologies
        img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        title="web apps con React"
        description="Nos especializamos en aplicaciones web desarrolladas con React en el frontend debido a su gran perfomance."
      ></CardTechnologies>
      <CardTechnologies
        img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        title="web apps con React"
        description="Nos especializamos en aplicaciones web desarrolladas con React en el frontend debido a su gran perfomance."
      ></CardTechnologies>
      <CardTechnologies
        img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        title="web apps con React"
        description="Nos especializamos en aplicaciones web desarrolladas con React en el frontend debido a su gran perfomance."
      ></CardTechnologies>
      <CardTechnologies
        img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        title="web apps con React"
        description="Nos especializamos en aplicaciones web desarrolladas con React en el frontend debido a su gran perfomance."
      ></CardTechnologies>
      <CardTechnologies
        img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        title="web apps con React"
        description="Nos especializamos en aplicaciones web desarrolladas con React en el frontend debido a su gran perfomance."
      ></CardTechnologies>
      <CardTechnologies
        img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        title="web apps con React"
        description="Nos especializamos en aplicaciones web desarrolladas con React en el frontend debido a su gran perfomance."
      ></CardTechnologies>
    </div>
  );
}

export { Services };
