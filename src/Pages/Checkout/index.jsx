import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system"
import useLoadCart from '../../Hooks/useLoadCart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { faXmark, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, removeItem } from "../../Redux/Cart/action";
import useTotalPrice from "../../Hooks/useTotalPrice";

const CheckoutContainer = () =>{
    const cart = useLoadCart();
    const totalPrice = useTotalPrice();
    const dispatch = useDispatch();

    const updateCart = (item) => {
      dispatch(addToCart(1, cart, item))
    }

    const decreaseCountOfItem = (item) => {
        dispatch(decreaseQuantity(1, cart, item))
    } 

    const removeItemFromCart  = (item) =>{
        dispatch(removeItem(1, cart, item))
    }

    return (
        <Box>
            {
                cart.length > 0 ? (
                    <Box padding={'0 10%'}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Product</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Remove</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {cart.map((row) => (
                                    <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <img
                                            style={{width : '5rem'}}
                                            src={row.imageUrl}
                                            alt={row.name}
                                            loading="lazy"
                                            />
                                        </TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>
                                            <Button onClick={()=>{decreaseCountOfItem(row)}}>
                                                <FontAwesomeIcon icon={faCaretLeft} />
                                            </Button>
                                            {row.quantity}
                                            <Button onClick={()=>{updateCart(row)}}>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </Button>
                                        </TableCell>
                                        <TableCell>INR {row.price}</TableCell>
                                        <TableCell>
                                            <Button onClick={()=>{removeItemFromCart(row)}}>
                                                <FontAwesomeIcon icon={faXmark} />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box>
                            <Typography variant="body1">Total: INR {totalPrice}</Typography>
                        </Box>
                    </Box>
                ):(
                    <Typography textAlign={'center'} marginTop={'4rem'} variant="h2">
                        Cart is Empty!
                    </Typography>
                )
            }
            
        </Box>
    )
}

export default CheckoutContainer;