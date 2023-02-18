/*import { useContext } from "react";

import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";

//import { addUser } from "../../service/api";

// import { AccountContext } from "../../context/AccountProvider";

import { qrCodeImage } from "../../constants/data";

import { GoogleLogin } from "@react-oauth/google";

import jwt_decode from 'jwt-decode';

const Component = styled(Box)`
    display: flex;
`;
const Container = styled(Box)`
    padding: 56px 0 56px;
`;

const QRcode = styled('img')({
    margin: '50px 0 0 50px',
    height: 264,
    width: 264
});

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    margin-left: 50px;
    color: #525252;
    font-family: inherit;
    font-weight: 300;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        margin-left: 50px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const dialogStyle = {
    marginTop: '17%',
    height: '95%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
}

const LoginDialog = () => {

    //const { setAccount,showloginButton, setShowloginButton, setShowlogoutButton } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const decoded = jwt_decode(res.credential);
        setAccount(decoded);
        setShowloginButton(false);
        setShowlogoutButton(true);
        await addUser(decoded);
    };

    const onLoginError = (res) => {
        console.log('Login Failed:', res);
    };

     /*const onSignoutSuccess = () => {
         alert("You have been logged out successfully");
         console.clear();
         setShowloginButton(true);
         setShowlogoutButton(false);
     };*

    return (
        <Dialog
            open={true}
            BackdropProps={{style: {backgroundColor: 'unset'}}}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
        >
           <Component>
                <Container>
                    <Title>Use WhatsApp on your Computer</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu or Settings and Select Linked Device</ListItem>
                        <ListItem>3. Tap on Link a Device</ListItem>
                        <ListItem>4. Point your phone to this screen to capture the code</ListItem>
                    </StyledList>
                </Container>
                <Box style={{position:'relative'}}>
                    <QRcode src={qrCodeImage} alt="qr code" />
                    <Box style={{position: 'absolute', top: '47%',left: '10%', transform: 'translateX(25%) translateY(-25%)'}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
           </Component>
        </Dialog>
    )
}

export default LoginDialog;*/

import { useContext } from "react";

import { addUser } from "../../service/api";

import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";

import ChatDialog from "../chat/ChatDialog";

import { qrCodeImage } from "../../constants/data";

import { AccountContext } from "../../context/AccountProvider";

import { GoogleLogin } from "@react-oauth/google";

import jwt_decode from 'jwt-decode';

const Component = styled(Box)`
    display: flex;
`;
const Container = styled(Box)`
    padding: 56px 0 56px;
`;

const QRcode = styled('img')({
    margin: '50px 0 0 50px',
    height: 264,
    width: 264
});

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    margin-left: 50px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const Project = styled(Typography)`
    color: #0000FF;
    margin-left: 20px;
    font-family: Droid Sans;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        margin-left: 50px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const dialogStyle = {
    marginTop: '17%',
    height: '95%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
}

const LoginDialog = () => {

    //const { setAccount,showloginButton, setShowloginButton, setShowlogoutButton } = useContext(AccountContext);

    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        //console.log(res);
        const decoded = jwt_decode(res.credential);
        setAccount(decoded);
        //setShowloginButton(false);
        //setShowlogoutButton(true);
        await addUser(decoded);
    };

    const onLoginError = (res) => {
        console.log('Login Failed:', res);
    };

    // const onSignoutSuccess = () => {
    //     alert("You have been logged out successfully");
    //     console.clear();
    //     setShowloginButton(true);
    //     setShowlogoutButton(false);
    // };

    return (
        <Dialog
            open={true}
            BackdropProps={{style: {backgroundColor: 'unset'}}}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
           <Component>
                <Container>
                    <Title>Use WhatsApp on your Computer</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu or Settings and Select Linked Device</ListItem>
                        <ListItem>3. Tap on Link a Device</ListItem>
                        <ListItem>4. Point your phone to this screen to capture the code</ListItem>
                    </StyledList>
                </Container>
                <Box style={{position:'relative'}}>
                    <QRcode src={qrCodeImage} alt="qr code" />
                    <Box style={{position: 'absolute', top: '47%',left: '15%', transform: 'translateX(25%) translateY(-25%)'}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
           </Component>
           <ListItem>===============================================================================</ListItem>
           <Project>This Project is Developed by---</Project>
           <Project>1. SUMAN SAMANTA, CSE, (Roll- 430120010004)</Project>
           <Project>2. SRADDHA MONDAL, ECE, (Roll- 430220020083)</Project>
           <ListItem>===============================================================================</ListItem>
           
        </Dialog>
    )
}

export default LoginDialog;