import {KTIcon} from '../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'

const WebsiteEditModalHeader = () => {
  const {setItemIdForUpdate} = useListView()

  return (
    <div className='modal-header pt-4 pb-2'>
      {/* begin::Modal title */}
      <h2 className='fw-bolder'>Add Website</h2>
      {/* end::Modal title */}

      {/* begin::Close */}
      <div
        className='btn btn-icon btn-sm btn-active-icon-primary'
        data-kt-websites-modal-action='close'
        onClick={() => setItemIdForUpdate(undefined)}
        style={{cursor: 'pointer'}}
      >
        <KTIcon iconName='cross' className='fs-1' />
      </div>
      {/* end::Close */}
    </div>
  )
}

export {WebsiteEditModalHeader}
