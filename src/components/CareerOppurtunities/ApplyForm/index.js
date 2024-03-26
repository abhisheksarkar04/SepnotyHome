import {
  GlobalStyle,
  Container,
  Container1,
  Title,
  ChooseFile,
  Button,
  NoFile,
  Header,
  Span,
  LastButton,
  Event,
} from "./styled";
import FooterSection from "../../Footer/FooterSection";
import { ThemeProvider } from "styled-components";
const theme = {};

const ApplyForm = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>

          <Header>
            Career Oppurunities &gt; <Span>Apply</Span>
          </Header>
          <Container1>
            <Title type="text" placeholder="Applicant Name" />
            <Title type="text" placeholder="E-Mail" />
            <Title type="text" placeholder="Phone Number" />
            <ChooseFile>
              <Button>Choose File</Button>
              <NoFile>Submit your Resume here</NoFile>
            </ChooseFile>
            <LastButton>Send</LastButton>
          </Container1>
        </Container>
      </ThemeProvider><br></br>
      <br></br>
      <br></br>
      <FooterSection />
    </>
  );
};
export default ApplyForm;
