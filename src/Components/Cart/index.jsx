import { Box, Button } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
const Cart = () =>{
    return (
        <Box className="cart">
            <Box height={'calc(100vh - 220px) '}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <Box padding={'0 0.5rem'}>
                <Button variant="contained" fullWidth={true}>Checkout</Button>
            </Box>
        </Box>
    )
} 

export default Cart;