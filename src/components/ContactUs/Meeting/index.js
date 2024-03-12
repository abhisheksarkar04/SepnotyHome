import { BottomCon, BottomHeading, BottomDesc, Button, Image } from "./styled";

import meeting from "../Images/remote-meeting.svg";

const Meeting = () => {
  return (
    <BottomCon>
      <BottomHeading>
        The Brightest Minds in Digital At Your Service
      </BottomHeading>
      <BottomDesc>
        Partnering across start-ups to SMBs to corporate businesses,we deliver
        innovation that is measurable, mature, and meaningful.
      </BottomDesc>
      <Button>Schedule Meeting</Button>
      <Image src={meeting} alt="meeting" />
    </BottomCon>
  );
};

export default Meeting;
