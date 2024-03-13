
import {Container,Image,Description,IconViews,Icon,Views,EditTool,ContentSection} from "./styled";
import deleteIcon from "../Images/Vector (2).png";
import editIcon from "../Images/Group.png";


const ArticlesFolder =(props)=>{
    const {details}=props ;
    const {imageUrl,icon,content,views}=details;
    return (
        <Container>
                <ContentSection>
                <Image src={imageUrl} alt="not found"/>
                <Description>{content}</Description>
                </ContentSection>
                <IconViews>
                    <Icon src={icon} alt="views"/>
                    <Views>{views}</Views>
                </IconViews>
                <EditTool src={editIcon} alt="edit"/>
                <EditTool src={deleteIcon} alt="delete"/>
            
        </Container>
    )

}

export default ArticlesFolder;