import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { categoryList } from "../Constants/homepage.data"
import { loadCategories } from "../Redux/Categories/action"
import { categoriesSelector } from "../Redux/Categories/selector"

const useLoadCategories = () => {
    const categories = useSelector(categoriesSelector)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadCategories(categoryList))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return categories;
}

export default useLoadCategories;