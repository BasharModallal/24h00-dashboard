import {
    createResponseContext,
    initialQueryResponse, initialQueryState, PaginationState, QUERIES,
    stringifyRequestQuery,
    WithChildren
} from "../../../../_metronic/helpers";
import {Website} from "./_models.ts";
import {FC, useContext, useEffect, useMemo, useState} from "react";
import {useQueryRequest} from "../../apps/user-management/users-list/core/QueryRequestProvider.tsx";
import {useQuery} from "react-query";
import {getWebsites} from "./_requests.ts";

const QueryResponseContext = createResponseContext<Website>(initialQueryResponse)

const QueryResponseProvider: FC<WithChildren> = ({children}) => {
    const {state} = useQueryRequest()
    const [query, setQuery] = useState<string>(stringifyRequestQuery(state))
    const updatedQuery = useMemo(() => stringifyRequestQuery(state), [state])
    console.log(query);
    useEffect(() => {
        console.log(updatedQuery)
        if(query !== updatedQuery) {
            setQuery(updatedQuery)
        }
    }, [updatedQuery]);

    const {
        isFetching,
        refetch,
        data: response
    } = useQuery(
        `${QUERIES.WEBSITES_LIST}-${query}`,
        () => {
            return getWebsites(query)
        },
        {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
    )

    return (
        <QueryResponseContext.Provider value={{isLoading: isFetching, refetch, response, query}}>
            {children}
        </QueryResponseContext.Provider>
    )
}

const useQueryResponse = () => useContext(QueryResponseContext)

const useQueryResponseData = () => {
    const {response} = useQueryResponse()
    if(!response){
        return []
    }

    return response?.data || [];
}

const useQueryResponsePagination = () => {
    const defaultPaginnationState: PaginationState = {
        links: [],
        ...initialQueryState,
    }

    const {response} = useQueryResponse()
    if(!response || !response.payload || !response.payload.pagination){
        return defaultPaginnationState
    }

    return response.payload.pagination
}

const useQueryResponseLoading = (): boolean => {
    const {isLoading} = useQueryResponse()
    return isLoading
}

export {
    QueryResponseProvider,
    useQueryResponse,
    useQueryResponseData,
    useQueryResponsePagination,
    useQueryResponseLoading
}