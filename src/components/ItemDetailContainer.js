import ItemDetail from './ItemDetail.js';
import { useState, useEffect } from 'react';
import { detalle } from './cookiesMock.js';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    const getItemDetail = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(detalle)
            }, 2000)
        })
    }
    useEffect(() => {
        getItemDetail().then((res) => {
            console.log(res)
            setDetail(res)
        })
    })
    return(
      <ItemDetail props={detail}/>
        )
}
export default ItemDetailContainer;