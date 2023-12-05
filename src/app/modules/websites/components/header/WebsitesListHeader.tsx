import {useListView} from "../../core/ListViewProvider.tsx";
import {WebsitesListSearchComponent} from "./WebsitesListSearchComponent.tsx";
import {WebsitesListGrouping} from "./WebsitesListGrouping.tsx";
import {WebsiteListToolbar} from "./WebsiteListToolbar.tsx";

const WebsitesListHeader = () => {
    const {selected} = useListView()
    return (
        <div className='card-header border-0 pt-6'>
            <WebsitesListSearchComponent />
            {/* begin::Card toolbar */}
            <div className='card-toolbar'>
                {/* begin::Group actions */}
                {selected.length > 0 ? <WebsitesListGrouping /> : <WebsiteListToolbar />}
                {/* end::Group actions */}
            </div>
            {/* end::Card toolbar */}
        </div>
    )
}

export {WebsitesListHeader}