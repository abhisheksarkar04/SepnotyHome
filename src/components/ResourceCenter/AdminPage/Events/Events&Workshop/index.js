import img1 from "./images/Rectangle 6973.png";
import img2 from "./images/Rectangle 6977.png";
import {
  MainConatiner,
  SmallPattern,
  PatternCon,
  ListHeading,
  EventCon,
  WorkshopCon,
} from "./styled";

import Event from "../EventItem";

const EventsAndWorkshop = () => {
  const eventsList = [
    {
      id: 1,
      ImgOf: img1,
      name: "Graphic Designer  event",
      place: "Banglore",
      time: "5:00 pm",
      fee: "Rs.500",
    },
    {
      id: 2,
      ImgOf: img2,
      name: "Digital Marketing event",
      place: "Banglore",
      time: "5:00 pm",
      fee: "Rs.500",
    },
  ];
  const workshopList = [
    {
      ImgOf: img1,
      name: "Graphic Designer  event",
      place: "Banglore",
      time: "5:00 pm",
      fee: "Rs.500",
    },
    {
      ImgOf: img2,
      name: " Designer  event",
      place: "Banglore",
      time: "5:00 pm",
      fee: "Rs.500",
    },
  ];

  return (
    <>
      <MainConatiner>
        <EventCon>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Events</ListHeading>
          </PatternCon>

          {eventsList.map((items) => (
            <Event key={items.id} eventDetails={items} />
          ))}
        </EventCon>
        <WorkshopCon>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Workshops</ListHeading>
          </PatternCon>

          {workshopList.map((items) => (
            <Event key={items.id} eventDetails={items} />
          ))}
        </WorkshopCon>
      </MainConatiner>
    </>
  );
};

export default EventsAndWorkshop;
