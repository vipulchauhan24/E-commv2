import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { categories } from "../Constants/homepage.data"
import { loadCategories } from "../Redux/Categories/action"
import { categoriesSelector } from "../Redux/Categories/selector"

const useLoadCategories = () => {
    const {category} = useSelector(categoriesSelector)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadCategories(categories))
    },[])

    return category;
}

export default useLoadCategories;