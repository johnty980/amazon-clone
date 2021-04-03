import React from 'react';
//import HeaderLogo from './HeaderLogo';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

function Header({ cartItems, user, signOut }) {
    const getCount = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.quantity;
        })

        return count;
    }
    return (
        <Container>
            <HeaderLogo>
                <Link to="/">
                    <img src={"https://i.imgur.com/7I9Was5.png"}/>
                </Link>
            </HeaderLogo>
            <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineOne>Deliver to</OptionLineOne>
                    <OptionLineTwo>Your Address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderNavOption onClick={signOut}>
                    <OptionLineOne>Hello, {user.name}</OptionLineOne>
                    <OptionLineTwo>Account & Lists</OptionLineTwo>
                </HeaderNavOption>
                <HeaderNavOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderNavOption>

                
                <HeaderOptionCart>
                    <Link to="/cart">
                        <LocationOnIcon />
                        <CartCount>{getCount()}</CartCount>
                    </Link>
                </HeaderOptionCart>
               
            </HeaderNavItems>
        </Container>
    )
}

export default Header

const Container = styled.div`
height: 60px;
background-color: #0F1111;
display: flex;
align-items: center;
justify-content: space-between;
color: white;
//justify-content: center;

`

const HeaderLogo = styled.div`
    
img { width: 100px; 
      margin: 10px;
      padding: 13px 17px 0 17px;
      
}
`

const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    padding-right: 9px;
    display: flex;
    align-items: center;
`
const HeaderOption = styled.div`
`

const OptionLineOne = styled.div`
`
const OptionLineTwo = styled.div`
    font-weight: 700;
`
const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 2px #F90;
    }
    `
const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: none;
    :focus {
        outline: none;
    }
`

const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    color: black;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;

`
const HeaderNavItems = styled.div`
    display: flex;
    align-items: center;

`
const HeaderNavOption = styled.div`
    // TROUBLE
    padding: 10px 9px 10px 9px;
    cursor: pointer;
    
`
const HeaderOptionCart = styled.div`
    display: flex;
    a {
        align-items: center;
        padding-right: 9px;
        display: flex;
        color: white;
        text-decoration: none;
    }
    `
const CartCount = styled.div`
    padding-left: 4px;
    font-weight: 700;
    color: #f08804;
`