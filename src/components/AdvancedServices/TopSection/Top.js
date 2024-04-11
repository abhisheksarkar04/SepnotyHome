import {
  AdServices1,
  AdSeviceLeftText,
  AdServiceLeftHeading,
  AdServiceLeftHeadingBlue,
  AdServiceLeftDescript,
  AdServiceRightPart,
  AdServiceRightImg,
  AdServiceLeftHeading1,
  AdServiceRightPart1,
  AdServDots,
  AdServRightDots,
} from "./styledComponents";
import Serveimg from "../assets/Serveimg1.png";
import pattern from "../assets/pattern.png";
import rightpattern from "../assets/rightpattern.png";
import advanced from "../assets/advanced.png";

const Top = () => {
  return (
    <AdServices1>
      <AdServDots src={pattern} alt="not found"></AdServDots>
      <AdSeviceLeftText>
        <AdServiceRightPart1>
          <AdServiceRightImg src={advanced} alt="not found" />

          <AdServRightDots src={rightpattern} alt="not found" />
          <AdServiceLeftHeading1>
            Turning Visions into Reality: Unleashing{" "}
            <AdServiceLeftHeadingBlue>
              Innovative Solutions Across Industries
            </AdServiceLeftHeadingBlue>
          </AdServiceLeftHeading1>
        </AdServiceRightPart1>
        <AdServiceLeftHeading>
          Turning Visions into Reality: Unleashing{" "}
          <AdServiceLeftHeadingBlue>
            Innovative Solutions Across Industries
          </AdServiceLeftHeadingBlue>
        </AdServiceLeftHeading>
        <AdServiceLeftDescript>
          Join Sepnoty Technologies Pvt Ltd in our mission to revolutionize
          industries through innovative solutions. Explore our remote internship
          in digital marketing, where you'll be empowered to turn ideas into
          tangible results. Fuel your passion, hone your skills, and be part of
          our dynamic team. Let's make an impact together. Apply now and
          kickstart your journey towards a rewarding career in digital
          marketing!
        </AdServiceLeftDescript>
      </AdSeviceLeftText>
      <AdServiceRightPart>
        <AdServiceRightImg src={Serveimg} alt="not found"></AdServiceRightImg>
        <AdServRightDots src={rightpattern} alt="not found"></AdServRightDots>
      </AdServiceRightPart>
    </AdServices1>
  );
};

export default Top;
