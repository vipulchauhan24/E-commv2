import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../Constants/cart.data";
import { getTotalPrice } from "../Redux/Cart/action";
import { cartSelectors } from "../Redux/Cart/selector";

const useTotalPrice = () => {
    const {totalPrice} = useSelector(cartSelectors)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTotalPrice(1, cartData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return totalPrice;
}

export default useTotalPrice;