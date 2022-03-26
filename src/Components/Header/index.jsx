import React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useNavigate } from "react-router-dom";
import './Header.style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';
import Cart from '../Cart/index';
import {toggleCart} from '../../Redux/Cart/action';
import useLoadCart from '../../Hooks/useLoadCart';
export default function HeaderComponent({signOutofApp}) {

  const [routes, setRoutes] = useState(["/shop", "/contact","/sign-in"])
  const [value, setValue] = React.useState(window.location.pathname);
  const {displayName} = useSelector(state => state.user);
  const {hidden} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useLoadCart();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    if(displayName){
      navigate("/", { replace: true });
      setRoutes(["/shop", "/contact","/sign-out"]);
    } else {
      setRoutes(["/shop", "/contact","/sign-in"]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[displayName])
  
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
                  /> : (
                    <Tab 
                    label="SIGN OUT"
                    value={routes[2]} 
                    onClick={()=>{signOutofApp()}}
                    />
                  )
                }
            </Tabs>
        </Box>
      

      {
          displayName ? (
            <Box display={'flex'} alignItems={'center'} justifyContent={'end'} columnGap={'0.5rem'} flexBasis={'9%'}>
              <Box onClick={()=>{dispatch(toggleCart())}} className="cart__icon">
                <img  style={{width : '2rem'}} src="/images/shopping-bag.svg" alt="cart"/>
                <Box component={'span'} className='cart__count'>0</Box>
                {
                  !hidden ? (
                    <Cart cart={cart}/>
                  ):(null)
                }
              </Box>
              <Box>
                <Box component={'span'} mr={'5px'}>{displayName}</Box>
              </Box>
            </Box>
          ) : (
            <Box display={'flex'} alignItems={'center'} justifyContent={'end'}>
              <Box onClick={()=>{dispatch(toggleCart())}} className="cart__icon">
                <img  style={{width : '2rem'}} src="/images/shopping-bag.svg" alt="cart"/>
                <Box component={'span'} className='cart__count'>0</Box>
                {
                  !hidden ? (
                    <Cart cart={cart}/>
                  ):(null)
                }
              </Box>
            </Box>
          )
        }
    </Box>
  )
}
