import {
  Container,
  Img,
  Details,
  Name,
  TextDts,
  ApplyButton,
  EditTool,
  ButtonCon,
} from "./styled";
import deleteIcon from "./images/Vector (2).png";
import editIcon from "./images/Group.png";
import { EditCon } from "../../Projects/styled";

const Event = (props) => {
  const { eventDetails } = props;
  const { ImgOf, name, place, time, fee } = eventDetails;
  return (
    <Container>
      <Img src={ImgOf} />
      <Details>
        <Name>{name}</Name>
        <TextDts>Place : {place}</TextDts>
        <TextDts>Time : {time}</TextDts>
        <TextDts>Registration fee -{fee}</TextDts>
      </Details>
      <ButtonCon>
        <ApplyButton>Apply</ApplyButton>
        <EditCon>
          <EditTool src={editIcon} alt="edit" />
          <EditTool src={deleteIcon} alt="delete" />
        </EditCon>
      </ButtonCon>
    </Container>
  );
};

export default Event;
