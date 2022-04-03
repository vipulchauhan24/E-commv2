import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCart } from "../Redux/Cart/action";
import { cartSelectors } from "../Redux/Cart/selector";

const useLoadCart = () => {
    const {cart} = useSelector(cartSelectors)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadCart(1))
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return cart;
}

export default useLoadCart;