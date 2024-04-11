import { BottomCon, BottomHeading, BottomDesc, Button, Image } from "./styled";

import meeting from "../Images/remote-meeting.svg";

const Meeting = () => {
  return (
    <BottomCon>
      <BottomHeading>Book a Meeting with Our Experts!</BottomHeading>
      <BottomDesc>
        Partnering across start-ups to SMBs to corporate businesses,we deliver
        innovation that is measurable, mature, and meaningful.
      </BottomDesc>
      <Button>Instant Contact</Button>
      <Image src={meeting} alt="meeting" />
    </BottomCon>
  );
};

export default Meeting;
