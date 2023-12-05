import {useListView} from "../../core/ListViewProvider.tsx";
import {KTIcon} from "../../../../../_metronic/helpers";

const WebsiteListToolbar = () => {
    const {setItemIdForUpdate} = useListView()

    const openAddWebsiteModal = () => {
        setItemIdForUpdate(null)
    }

    return (
        <div className='d-flex justify-content-end' data-kt-website-table-toolbar='base'>
            {/* begin::Export */}
            {/*<button type='button' className='btn btn-light-primary btn-sm me-3'>*/}
            {/*    <KTIcon iconName='exit-up' className='fs-2' />*/}
            {/*    Export*/}
            {/*</button>*/}
            {/* end::Export */}

            {/* begin::Add website */}
            <button type='button' className='btn btn-primary btn-sm' onClick={openAddWebsiteModal}>
                <KTIcon iconName='plus' className='fs-2' /> Add Website
            </button>
            {/* end::Add website */}
        </div>
    )
}

export {WebsiteListToolbar}