import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  SubCardSection,
  SubHead,
  SubHeadSpan,
  SubPageImg,
  SubPara,
  BackButton,
  
} from './styled';


const SubCard = (props) => {

const history = useHistory();
const { details, onBackClick } = props; 
  const {title,about,pic,headingOne,aboutOne,headingTwo,aboutTwo,headingThree,aboutThree,headingFour,aboutFour,headingFive,aboutFive,headingSix,aboutSix,headingSeven,aboutSeven,} = details;
  const handleBackClick = () => {
    if (onBackClick) {
      // If onBackClick is provided, call it
      onBackClick();
    } else {
      // If not, use history to go back
      history.goBack();
    }
  };

  return (
    <SubCardSection>
    <div>
    <div>
    <SubHeadSpan />
    <SubHead>{title}</SubHead></div>
    <SubPara>{about}</SubPara></div>
    <SubPageImg src={pic} />
    <div>
    <div>
    <SubHeadSpan />
    <SubHead>{headingOne}</SubHead></div>
    <SubPara>{aboutOne}</SubPara></div>
    <div>
    <div>
    <SubHeadSpan />
    <SubHead>{headingTwo}</SubHead></div>
    <SubPara>{aboutTwo}</SubPara>
    </div>
    <div>
    <div>
    <SubHeadSpan />
    <SubHead>{headingThree}</SubHead></div>
    <SubPara>{aboutThree}</SubPara>
    </div>
    <div>
    <div>
    <SubHeadSpan />
    <SubHead>{headingFour}</SubHead></div>
    <SubPara>{aboutFour}</SubPara>
    </div>
    <div>
    <div>
    <SubHeadSpan />
    <SubHead>{headingFive}</SubHead></div>
    <SubPara>{aboutFive}</SubPara>
    </div>
    <div>
    <div>
    <SubHeadSpan />
    <SubHead>{headingSix}</SubHead></div>
    <SubPara>{aboutSix}</SubPara>
    </div>
    <div>
    <div>
    <SubHeadSpan />
    <SubHead>{headingSeven}</SubHead></div>
    <SubPara>{aboutSeven}</SubPara>
    </div>
    <BackButton onClick={handleBackClick}>Back</BackButton>
    </SubCardSection>
  );
};

export default SubCard
