import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HamburgerMenu from 'react-hamburger-menu';
import {Container} from 'reactstrap';
import HeaderFrame from './components/header-frame';


import logo from './logo.svg';

import './header.css';

export default class Header extends Component {

    state = {
        open: false,
        hide: false
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }
    hideClick() {
        this.setState({
            hide: !this.state.hide
        });
    }
    render() {
        return (
            <header className="header">
                <Container>
                    <div className="navbar_menu">
                    <div className="hamburger" onClick={this.hideClick.bind(this)}>
                        <HamburgerMenu
                            isOpen={this.state.open}
                            menuClicked={this.handleClick.bind(this)}
                            width={36}
                            height={0}
                            strokeWidth={4}
                            rotate={0}
                            color='black'
                            borderRadius={4}
                            animationDuration={0.5}
                        />
                    </div>
                        <div className="navbar_menu_item">
                            <a className="logo" href="/"><img src={logo} alt={logo}/></a>
                            <ul className="navbar_links">
                                <li className="navbar_link"><a href="/">Как это работает</a></li>
                                <li className="navbar_link"><a href="/">Тарифы</a></li>
                                <li className="navbar_link"><a href="/">FAQ</a></li>
                            </ul>
                        </div>
                        <a href="/" className="language">EN</a>
                    </div>
                    <HeaderFrame
                    isHide={this.state.hide}/>
                </Container>
            </header>
        )
    }
}
