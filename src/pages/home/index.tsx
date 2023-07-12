import React, { useState, useEffect } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { TextExtraLarge } from "../../ui/typography";
import { HomeHero } from "../../components/home-hero";
import { Services } from "../../components/services";

function Home() {
  return (
    <div className="container">
      <HomeHero></HomeHero>
      <Services></Services>
      <div className="containerLocationContainer">
        <TextExtraLarge>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          suscipit, eveniet illo neque officiis vero iste excepturi hic facere
          ab commodi delectus animi debitis, saepe beatae minus voluptatem rem
          nemo!
        </TextExtraLarge>
        <TextExtraLarge>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          suscipit, eveniet illo neque officiis vero iste excepturi hic facere
          ab commodi delectus animi debitis, saepe beatae minus voluptatem rem
          nemo!
        </TextExtraLarge>
        <TextExtraLarge>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          suscipit, eveniet illo neque officiis vero iste excepturi hic facere
          ab commodi delectus animi debitis, saepe beatae minus voluptatem rem
          nemo!
        </TextExtraLarge>
        <TextExtraLarge>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          suscipit, eveniet illo neque officiis vero iste excepturi hic facere
          ab commodi delectus animi debitis, saepe beatae minus voluptatem rem
          nemo!
        </TextExtraLarge>
        <TextExtraLarge>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          suscipit, eveniet illo neque officiis vero iste excepturi hic facere
          ab commodi delectus animi debitis, saepe beatae minus voluptatem rem
          nemo!
        </TextExtraLarge>
        <TextExtraLarge>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          suscipit, eveniet illo neque officiis vero iste excepturi hic facere
          ab commodi delectus animi debitis, saepe beatae minus voluptatem rem
          nemo!
        </TextExtraLarge>
      </div>
    </div>
  );
}

export { Home };
