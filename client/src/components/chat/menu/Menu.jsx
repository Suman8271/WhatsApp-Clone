

/*
import { useState } from 'react';

import { Box } from '@mui/material';

import { AccountContext } from '../../../context/AccountProvider';

//components
import Header from './Header';
import Search from './Search';
import Conversations from './Conversations';

const Menu = () => {
    const [text, setText] = useState('');
    
    return (
        <Box>
            <Header/>
            <Search setText={setText} />
            <Conversations text={text} />
        </Box>
    )
}

export default Menu;

/*const Menu = () => {
    return (
        <div>
            hello from menu
        </div>
    )
}

export default Menu;*/

import Search from "./Search";

import Header from "./Header";

import { Box } from "@mui/material";

import Conversations from "./Conversations";

import { useState } from "react";

const Menu = () => {

    const [text, setText] = useState('');
    return (
        <Box>
            <Header/>
            <Search setText = {setText}/>
            <Conversations text = {text} />
        </Box>
    )
}

export default Menu;