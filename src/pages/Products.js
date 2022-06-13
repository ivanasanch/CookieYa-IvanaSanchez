import ItemList from '../components/ItemList.js';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import galletitas from '../components/cookiesMock.js';

const Products =() =>{
    const [cookies, setCookies] = useState([])
    const { category } = useParams()

    useEffect( () => {
        setCookies([])
        category ? filterByCategory(galletitas, category) : setCookies(galletitas)
    },[category])
    
    const filterByCategory = (array, category) => {
        return array.map( (item) => {
            if(item.category === category) {
                return setCookies(cookies => [...cookies, item])
            }
        })
    }
    return (
        <ItemList data={cookies}/>
    )
}
export default Products;