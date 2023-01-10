import React, { createContext, useReducer, Dispatch, ReactNode, FC } from 'react'
import { productReducer, cartReducer, ProductActions, ShoppingCartActions } from './reducer';

type ProductType = {
    id: number,
    name: string,
    price: number
}
type InitialStateType = {
    products: ProductType[],
    shoppingCart: number
}
const initialState: InitialStateType = {
    products: [],
    shoppingCart: 0,
}
const AppContext = createContext<{
    state: InitialStateType;
    dispatch: Dispatch<ProductActions | ShoppingCartActions>;
}>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = ({ products, shoppingCart }: InitialStateType, action: ProductActions | ShoppingCartActions) => ({
    products: productReducer(products, action),
    shoppingCart: cartReducer(shoppingCart, action),

})
interface Props {
    children?: ReactNode
}
const AppProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState as never);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}
export { AppProvider, AppContext };
