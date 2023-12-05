import {ListViewProvider, useListView} from './core/ListViewProvider'
import {KTCard} from "../../../_metronic/helpers";
import {WebsitesListHeader} from "./components/header/WebsitesListHeader.tsx";
import {WebsitesTable} from "./table/WebsitesTable.tsx";
import {WebsiteEditModal} from "./websites-edit-modal/WebsiteEditModal.tsx";
import {QueryRequestProvider} from "./core/QueryRequestProvider.tsx";
import {QueryResponseProvider} from "./core/QueryResponseProvider.tsx";
const WebsitesList = () => {
    const {itemIdForUpdate} = useListView()
    return (
        <>
            <KTCard>
                <WebsitesListHeader />
                <WebsitesTable />
            </KTCard>
            {itemIdForUpdate !== undefined && <WebsiteEditModal />}
        </>
    )
}

const WebsitesListWrapper = () => (
    <QueryRequestProvider>
        <QueryResponseProvider>
            <ListViewProvider>
                <WebsitesList />
            </ListViewProvider>
        </QueryResponseProvider>
    </QueryRequestProvider>
)

export {WebsitesListWrapper}