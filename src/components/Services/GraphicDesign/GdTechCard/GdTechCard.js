import {
  AppCardCon,
  HeadingSpan,
  WebSectionTwoHeading,
  AppAbout,
  
} from './styled';

const GdTechCard = (props) => {
    const {details}=props;
    const {title,aboutOne,aboutTwo,aboutThree,aboutFour}=details;
  return (
    <AppCardCon>
    <div>
    <HeadingSpan />
    <WebSectionTwoHeading>{title}</WebSectionTwoHeading>
    </div>
    <AppAbout>{aboutOne}</AppAbout>
    <AppAbout>{aboutTwo}</AppAbout>
    <AppAbout>{aboutThree}</AppAbout>
    <AppAbout>{aboutFour}</AppAbout>
    
    </AppCardCon>
  )
}

export default GdTechCard
