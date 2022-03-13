import React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from "react-router-dom";
import './Header.style.scss';
import Button from '@mui/material/Button';

export default function HeaderComponent({userName, signOutofApp}) {

  const routes = ["/shop", "/contact","/sign-in"];
  const [value, setValue] = React.useState(window.location.pathname);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
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
                  userName === null ? <Tab 
                  label="SIGN In"
                  value={routes[2]} 
                  component={Link}
                  to={routes[2]}
                  /> : ('')
                }
            </Tabs>
        </Box>
      <div style={{flexBasis : '25%'}} className='flex align-items-center justify-content-between' >
        <span>{userName}</span>
        <Button onClick={()=>{signOutofApp()}} variant="outlined">Sign Out</Button>
        <img style={{width : '2rem'}} src="/images/shopping-bag.svg" alt="cart"/>
      </div>
    </div>
  )
}
