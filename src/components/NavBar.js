import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
//ButtonComponent is imported styled component
import {ButtonComponent} from './ButtonComponent';
import styled from "styled-components";

export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="logo" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-item-center">
                  <li className="nav-item ml-5">
                      <Link to="/" className="nav-link">
                          Products
                      </Link>
                   </li>  
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonComponent>
                        <span className="mr-2"><i className="fa fa-cart-plus"/>
                       </span>
                         My cart
                    </ButtonComponent>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-Link {
        color: var(--mainWhite)!important;
        font-size: 1.3rem;
        text-transform: capitalize !important;

    }
`