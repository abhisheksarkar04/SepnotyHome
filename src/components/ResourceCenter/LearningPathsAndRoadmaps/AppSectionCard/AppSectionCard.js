import {
  AppCardCon,
  HeadingSpan,
  WebSectionTwoHeading,
  AppAbout,
  ImgCon,
  InsertImg,
  WebTechButton,
  PatternCon,
  SmallPattern,
  ListHeading,
} from './styled';

const AppSectionCard = (props) => {
    const {details, toggleContent}=props;
    const {title,about,img , content}=details;
  return (
    <AppCardCon>
        <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>{title}</ListHeading>
        </PatternCon>
        <AppAbout>{about}</AppAbout>
        <ImgCon>
        <InsertImg src={img}></InsertImg>
        <WebTechButton onClick={() => toggleContent(content)} >Learn More</WebTechButton>
        </ImgCon>
    </AppCardCon>
  )
}

export default AppSectionCard
