import React from "react";
import {StoreType} from "./redux/store";

const StoreContext = React.createContext({} as StoreType);

export type ProviderPropsType = {
    store: StoreType
}
export const Provider: React.FC<ProviderPropsType> = (props) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext;