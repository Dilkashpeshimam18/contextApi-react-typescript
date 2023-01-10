import React, { useContext } from 'react'
import { AppContext } from './store/context';
import { Types } from './store/reducer';

const Display = () => {
    const { state, dispatch } = useContext(AppContext);

    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: Types.Add,
                })
            }}>
                click
            </button>
            {state.shoppingCart}
        </div>
    )

}
export default Display