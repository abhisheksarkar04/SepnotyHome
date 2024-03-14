import { SpanHead } from "../DashBoard/styledComponents";
import sepnoty from "../Images/sepnoty.png";
import signup from "../Images/Signup.png";
import { Container,Title,InputContainer ,SepnotyCont,SepnotyImg,Welcome,Para,
Image,SignUpCont,Head,Form,Input,CheckBox,Check,Label,Button} from "./styledComponents";
import { Link } from 'react-router-dom';

const UserInput=()=>{
    return (
        <Container>
            <Title>Resources  &gt; <SpanHead>Admin login</SpanHead> </Title>
            <InputContainer>
                <SepnotyCont>
                    <SepnotyImg src={sepnoty} alt='sepnoty'/>
                    <Welcome>Welcome</Welcome>
                    <Para>Sign in to continue Access</Para>
                    <Image src={signup} alt="not found"/>
                </SepnotyCont>
                <SignUpCont>
                    <Head>Sign Up</Head>
                    <Form >
                        <Input type='text' placeholder="User name"/>
                        <Input type='mail' placeholder="Email Address / Mobile Number"/>
                        <Input type='password' placeholder="Password"/>
                        <CheckBox>
                        <Check type="checkbox" />
                        <Label >By signing up you agreeing with the terms & conditions and privacy policy of Sepnoty.com</Label>
                        </CheckBox>
                        <Link to="/resource-center/admin-login/dash-board"> 
                        <Button type="button">Sign in</Button>
                        </Link>
                    </Form>
                </SignUpCont>
            </InputContainer>
        </Container>
    )


}

export default UserInput;