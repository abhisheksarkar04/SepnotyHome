import {Container,CreatePostBtn,Container1,Title,Summary,ChooseFile,Button,NoFile,Container2,H1Cont,Content,LastButton} from "./styledComponents";
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';






const StyledQuill = styled(ReactQuill)`
  /* Add your custom styles here */
  background-color: #D9D9D9;
  border-radius: 8px;
  border: 0px solid transparent;
  .ql-editor {
    font-size: 16px;
    line-height: 1.5;
    border: 0px solid transparent;
    color: #333;
    border: none;
    border-radius: 8px;
    background-color: #D9D9D9;
    height: 200px; /* Adjust height as needed */
    padding: 10px;
    overflow-y: auto;
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