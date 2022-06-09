import ItemList from '../components/ItemList.js';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import getCookies from '../components/getCookies.js';

const Products =() =>{
    const [cookies, setCookies] = useState([])
    const { category } = useParams()

    useEffect( () => {
        setCookies([])
        getCookies().then( (response) => {
            filterByCategory(response)
        })
    },[])
    const filterByCategory = (array) => {
        return array.map( (item) => {
            if(item.category === category) {
                return setCookies(x => [...x,item])
            }
        })
    }
    return (
        <ItemList data={cookies}/>
    )
}
export default Products;