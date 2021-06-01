import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';
import './index.scss';
export default function ButtonAppBar(props) {
    return (
        <div className="header-root">
            <AppBar position="static" style={{ background: '#FFF' }}>
                <Toolbar className="header-toolbar">
                    <Link to="/" style={{
                        color: 'transparent'
                    }}>
                        <img src={logo} alt={logo}></img>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}