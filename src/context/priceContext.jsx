import { createContext, useState } from "react";
const PriceContext = createContext({});

const PriceProvider = ({children}) => {
    const [cart, setCart] = useState({price: 39000, quantity: 1});

    return(
        <PriceContext.Provider value={{cart, setCart}}>
            {children}
        </PriceContext.Provider>
    )
}

export { PriceContext, PriceProvider};