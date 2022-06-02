import ItemDetail from './ItemDetail.js';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import galletitas from './cookiesMock.js';


const ItemDetailContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [cookies , setCookies] = useState({})

    useEffect(() => {
        if(productFilter === undefined){
            navigate('/')
        }else {
            setCookies(productFilter)

        }
    }, [id])
    const productFilter = galletitas.find( (cookie) => {
        return cookie.id === Number(id)
    })

    return(
        <>
        <ItemDetail props={cookies}/>
        </>
    )
}
export default ItemDetailContainer;