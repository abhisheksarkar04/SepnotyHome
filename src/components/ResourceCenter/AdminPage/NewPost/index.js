import {Container,CreatePostBtn,Container1,Title,Summary,ChooseFile,Button,NoFile,Container2,H1Cont,Content,LastButton} from "./styledComponents";
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';






const StyledQuill = styled(ReactQuill)`
  /* Add your custom styles here */
<<<<<<< Updated upstream
  background-color: #D9D9D9;
  border-radius: 8px;
  border: 0px solid transparent;
=======
  background-color: #d9d9d9;
  border-radius: 2px;
  border: none;
  outline: none;
>>>>>>> Stashed changes
  .ql-editor {
    font-size: 16px;
    
    line-height: 1.5;
<<<<<<< Updated upstream
    border: 0px solid transparent;
    color: #333;
    border: none;
    border-radius: 8px;
    background-color: #D9D9D9;
=======
    border: 1px solid #2B459B;
    color: #fff;
    border-radius: 2px;
    background-color: black;
>>>>>>> Stashed changes
    height: 200px; /* Adjust height as needed */
    padding: 10px;
    overflow-y: auto;
    outline: none;
  }
  .ql-container {
    border: none;
  }
`;

const modules = {
    toolbar: [
        [{ header: [1,2,3,4,5,6,false]}],
        [{ font: [] }],
   
        ["bold", "italic", "underline","strike","blockquote"],
        [
            {list: "ordered"},
            {list: "bullet"},
            {indent: "-1"},
            {indent: "+1"},
            
        ],
        ["link","image","video"],


    ],
};

<<<<<<< Updated upstream
const CreatePost =()=>{
    const [value, setValue] = useState('');
    return (
        <Container>
            <CreatePostBtn>Create New Post</CreatePostBtn>
            <Container1>
                <Title type="text" placeholder="Title"/>
                <Summary type="text" placeholder="Summary"/>
                <ChooseFile>
                    <Button>Choose File</Button>
                    <NoFile>No file Chosen</NoFile>
                </ChooseFile>
            <Container2>
                <StyledQuill theme="snow" value={value} onChange={setValue} modules={modules} />
            </Container2>
            <LastButton>Create Post</LastButton>
            </Container1>
        </Container>
    )
}
export default CreatePost;
=======
const CreatePost = () => {
  const [value, setValue] = useState("");
  return (
    <Container>
      <CreatePostBtn>Create New Post</CreatePostBtn>
      <Container1>
        <Title type="text" placeholder="Title" />
        <Summary type="text" placeholder="Summary" />
        <ChooseFile>
          <Button>Choose File</Button>
          <NoFile>No file Chosen</NoFile>
        </ChooseFile>
        <Container2>
          <StyledQuill
            value={value}
            onChange={setValue}
            modules={modules}
          />
        </Container2>
        <LastButton>Create Post</LastButton>
      </Container1>
    </Container>
  );
};
export default CreatePost;
>>>>>>> Stashed changes
