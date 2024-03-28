import React from 'react'
import {
    Expert,
    ExpText,ExpImgRole,ExpImg,ExpRole,ExpRol,
    ExpName,
    
} from './styled';
import { HelpJournalTitle, TransparentBg } from '../WholeMerge/styledComponents';


const ExpertCardDetail = (props) => {
  const { details } = props;
  const {heading,topicText,ImgUrl,ExpertName,ExpertRole} = details;

  return (
   <Expert>
   <div>
   <TransparentBg />
   <HelpJournalTitle>{heading}</HelpJournalTitle>
   </div>
   <ExpText>{topicText}</ExpText>
   <ExpImgRole>
   <ExpImg src={ImgUrl}></ExpImg>
   <ExpRole>
   <ExpName>{ExpertName}</ExpName>
   <ExpRol>{ExpertRole}</ExpRol>
   </ExpRole>
   </ExpImgRole>
   <ExpImgRole>
   <ExpImg src={ImgUrl}></ExpImg>
   <ExpRole>
   <ExpName>{ExpertName}</ExpName>
   <ExpRol>{ExpertRole}</ExpRol>
   </ExpRole>
   </ExpImgRole>
   </Expert>
  );
};

export default ExpertCardDetail