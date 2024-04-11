import React from "react";
import {
  OurWorkTextContainer,
  OurWorkOur,
  OurWorkOurText,
  OurWorkText,
  OurWorkPara,
} from "./styledComponents";

function Content() {
  return (
    <OurWorkTextContainer>
      <OurWorkOur>
        <OurWorkOurText>Showcasing</OurWorkOurText>Our Latest{" "}
        <OurWorkText>Achievements</OurWorkText>
      </OurWorkOur>
      <OurWorkPara>
      Come along and discover our latest successes, each one a testament to our dedication and
creativity. Step into our showcase and experience firsthand the innovation and excellence
that define us.

      </OurWorkPara>
    </OurWorkTextContainer>
  );
}

export default Content;
