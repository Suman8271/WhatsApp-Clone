
/*
//components

import { useContext } from "react";

import { AccountContext } from "../context/AccountProvider";

import { AppBar, Toolbar, styled, Box } from "@mui/material";

import LoginDialog from "./account/LoginDialog";

import ChatDialog from "./chat/ChatDialog";

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
    height: 220px;
    background-color: #075e54;
    box-shadow: none;
`

const Component = styled(Box)`
    height: 100vh;
    background: #000000;
`

const Messenger = () => {

    const { account } = useContext(AccountContext);

    return (
        <Component>
            {
                account ? 
                <>
                    <Header>
                        <Toolbar></Toolbar>
                    </Header>
                    <ChatDialog />
                </>
                :
                <>
                    <LoginHeader>
                        <Toolbar></Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
            }
        </Component>
    )
}
export default Messenger;*/

import { useContext } from "react";

import { AppBar, Toolbar, styled, Box } from "@mui/material";

import LoginDialog from "./account/LoginDialog";

import ChatDialog from "./chat/ChatDialog";

import { AccountContext } from "../context/AccountProvider";

const Header = styled(AppBar)`
    height: 125px;
    background-color: #00A88A;
    box-shadow: none;
`

const LoginHeader = styled(AppBar)`
    height: 220px;
    background-color: #00bfa5;
    box-shadow: none;
`

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`

const Messenger = () => {


    const { account } = useContext(AccountContext);
    return (
        <Component>
            {
                account ? 
                <>
                    <Header>
                        <Toolbar>

                        </Toolbar>
                    </Header>
                    <ChatDialog />
                </>
                :
                <>
                    <LoginHeader>
                        <Toolbar>

                        </Toolbar>
                    </LoginHeader>
                    <LoginDialog /> 
                </> 
            }
        </Component>
    )
}
export default Messenger;