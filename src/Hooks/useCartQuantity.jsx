import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../Constants/cart.data";
import { loadCartQuantity } from "../Redux/Cart/action";
import { cartSelectors } from "../Redux/Cart/selector";

const useCardQuantity = () => {
    const {quantity} = useSelector(cartSelectors)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadCartQuantity(1, cartData))
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return quantity;
}

export default useCardQuantity;