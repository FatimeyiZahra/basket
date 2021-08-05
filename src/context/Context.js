import React, { createContext} from 'react'
import  {useState} from 'react'
export const ContextProducts = createContext();

const Context = (props) => {

  const [basket, setBasket] = useState([]);
    const [product, setProduct] = useState([{
        id: 1,
        name: "Iphone XR",
        price: 1200,
        image:
          "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
        info: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      },
      {
        id: 2,
        name: "Macbook",
        price: 1500,
        image:
          "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
        info: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      },
      {
        id: 3,
        name: "Samsung S8",
        price: 1000,
        image:
          "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
        info: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      },
      {
        id: 4,
        name: "Ipad",
        price: 800,
        image:
          "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
        info: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      },
      {
        id: 5,
        name: "AirPod",
        price: 200,
        image:
          "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
        info: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      },])
    return (
        <div>
            <ContextProducts.Provider value={product}>
                {props.children}
            </ContextProducts.Provider>
        </div>
    )
}

export default Context
