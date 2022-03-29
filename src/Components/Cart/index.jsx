import { Box, Button } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
const Cart = ({cart}) =>{
    return (
        <Box className="cart">
            <Box height={'calc(100vh - 220px) '} overflow={'auto'}>
                <List>
                    {
                        cart ? (
                            cart.map(item => {
                                return (
                                    <ListItem key={item.id} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                            <img
                                            style={{width : '3rem'}}
                                            src={item.imageUrl}
                                            alt={item.name}
                                            loading="lazy"
                                            />
                                            </ListItemIcon>
                                            <ListItemText primary={item.name} secondary={item.quantity + ' X INR ' +item.price}/>
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })
                        ) : (null)
                    }
                </List>
            </Box>
            <Box padding={'0 0.5rem'}>
                <Button variant="contained" fullWidth={true}>Checkout</Button>
            </Box>
        </Box>
    )
} 

export default Cart;