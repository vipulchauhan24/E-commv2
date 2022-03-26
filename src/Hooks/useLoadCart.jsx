import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../Constants/cart.data";
import { loadCart } from "../Redux/Cart/action";

const useLoadCart = () => {
    const {cart} = useSelector(state => state.cart)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadCart(1, cartData))
    }, []);

    return cart;
}

export default useLoadCart;