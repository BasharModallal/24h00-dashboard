import {useListView} from "../../core/ListViewProvider.tsx";
import {useMutation, useQueryClient} from "react-query";
import {useQueryResponse} from "../../core/QueryResponseProvider.tsx";
import {QUERIES} from "../../../../../_metronic/helpers";
import {deleteSelectedWebsites} from "../../core/_requests.ts";

const WebsitesListGrouping = () => {
    const {selected, clearSelected} = useListView()
    const queryClient = useQueryClient()
    const {query} = useQueryResponse()

    const deleteSelectedItems = useMutation(() => deleteSelectedWebsites(selected), {
        //response of the mutation is passed to onSuccess
        onSuccess: () => {
            // update detail view directly
            queryClient.invalidateQueries([`${QUERIES.WEBSITES_LIST}-${query}`])
            clearSelected()
        },
    })

    return (
        <div className='d-flex justify-content-end align-items-center'>
            <div className='fw-bolder me-5'>
                <span className='me-2'>{selected.length}</span> Selected
            </div>

            <button
                type='button'
                className='btn btn-danger'
                onClick={async () => await deleteSelectedItems.mutateAsync()}
            >
                Delete Selected
            </button>
        </div>
    )
}

export {WebsitesListGrouping}