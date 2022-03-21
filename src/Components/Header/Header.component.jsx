import React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useNavigate } from "react-router-dom";
import './Header.style.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Button } from '@mui/material';

export default function HeaderComponent({signOutofApp}) {

  const routes = ["/shop", "/contact","/sign-in"];
  const [value, setValue] = React.useState(window.location.pathname);
  const state = useSelector(state => state.user)
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    if(state.displayName){
      navigate("/", { replace: true });
    }
  },[state])
  
  return (
      <div style={{padding : '0.5rem 1rem'}} className="flex align-items-center justify-content-between ">
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
                  !state.displayName? <Tab 
                  label="SIGN In"
                  value={routes[2]} 
                  component={Link}
                  to={routes[2]}
                  /> : ('')
                }
            </Tabs>
        </Box>
      <div style={{flexBasis : '25%'}} className='flex align-items-center justify-content-end' >
        {
          state.displayName ? (
            <div>
              <span style={{marginRight : '5px'}}>{state.displayName}</span>
              <Button onClick={()=>{signOutofApp()}} underline="hover">
                {'Sign Out'}
              </Button>
            </div>
          ) : ''
        }
        <img style={{width : '2rem'}} src="/images/shopping-bag.svg" alt="cart"/>
      </div>
    </div>
  )
}
