import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { categories } from "../Constants/homepage.data"
import { loadCategories } from "../Redux/Categories/action"

const useLoadCategories = () => {
    const {category} = useSelector(state => state)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadCategories(categories))
    },[])

    return category;
}

export default useLoadCategories;