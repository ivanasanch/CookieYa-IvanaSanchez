import ItemList from '../components/ItemList';
import { useState, useEffect } from 'react';
import getCookies from '../components/getCookies';
const Home =() =>{
    const [products, setProducts] = useState([])
    useEffect( () => {
        getCookies()
        .then( (response) => {
            setProducts(response)
        })
    }, [])
    return (
        <ItemList data={products}/>
    )
}
export default Home;