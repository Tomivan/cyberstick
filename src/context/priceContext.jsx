import { createContext, useEffect, useState } from "react";
const PriceContext = createContext({});

const PriceProvider = ({children}) => {
    const [price, setPrice] = useState(null);

    return(
        <PriceContext.Provider value={{price, setPrice}}>
            {children}
        </PriceContext.Provider>
    )
}

export { PriceContext, PriceProvider};