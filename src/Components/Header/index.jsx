import React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useNavigate } from "react-router-dom";
import './Header.style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import Cart from '../Cart/index';
import {toggleCart} from '../../Redux/Cart/action';
export default function HeaderComponent({signOutofApp}) {

  const routes = ["/shop", "/contact","/sign-in"];
  const [value, setValue] = React.useState(window.location.pathname);
  const {displayName} = useSelector(state => state.user);
  const {hidden} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    if(displayName){
      navigate("/", { replace: true });
    }
  },[displayName])

  useEffect(()=>{
    console.log(hidden)
  },[hidden])
  
  return (
      <Box padding={'0.5rem 1rem'} display={"flex"} alignItems={'center'} justifyContent={'space-between'} >
        <Link to="/"><img src="/images/logo.svg" alt="crwn"/></Link>
        <Box sx={{ width: '100%', bgcolor: 'background.paper'}}>
            <Tabs 
              value={window.location.pathname !== "/"
                  ? value
                  : false} 
              onChange={handleChange}
              >
                <Tab 
                  value={routes[0]} 
                  label="SHOP" 
                  component={Link}
                  to={routes[0]}
                  />
                <Tab 
                  label="CONTACT"
                  value={routes[1]} 
                  component={Link}
                  to={routes[1]}
                  />
                {
                  !displayName? <Tab 
                  label="SIGN IN"
                  value={routes[2]} 
                  component={Link}
                  to={routes[2]}
                  /> : ('')
                }
            </Tabs>
        </Box>
      <Box display={'flex'} alignItems={'center'} justifyContent={'end'} flexBasis={'25%'}>
        {
          displayName ? (
            <Box>
              <Box component={'span'} mr={'5px'}>{displayName}</Box>
              <Button onClick={()=>{signOutofApp()}} underline="hover">
                {'Sign Out'}
              </Button>
            </Box>
          ) : ''
        }
        <Box className="cart__icon">
          <img onClick={()=>{dispatch(toggleCart())}} style={{width : '2rem'}} src="/images/shopping-bag.svg" alt="cart"/>
          <Box component={'span'} className='cart__count'>0</Box>
          {
            !hidden ? (
              <Cart />
            ):(null)
          }
        </Box>
      </Box>
    </Box>
  )
}
