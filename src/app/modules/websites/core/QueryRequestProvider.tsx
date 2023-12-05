import {createContext, FC, useContext, useState} from "react";
import {initialQueryRequest, QueryRequestContextProps, QueryState, WithChildren} from "../../../../_metronic/helpers";

const QueryRequestContext = createContext<QueryRequestContextProps>(initialQueryRequest)

const QueryRequestProvider: FC<WithChildren> = ({children}) => {
    const [state, setState] = useState<QueryState>(initialQueryRequest.state)

    const updateState = (updates: Partial<QueryState>) => {
        console.log('queryRequest')
        const updatedState = {...state, ...updates} as QueryState
        console.log(updatedState)
        setState(updatedState)
    }

    return (
        <QueryRequestContext.Provider value={{state, updateState}}>
            {children}
        </QueryRequestContext.Provider>
    )
}

const  useQueryRequest = () => useContext(QueryRequestContext)
// eslint-disable-next-line react-refresh/only-export-components
export {QueryRequestProvider, useQueryRequest}