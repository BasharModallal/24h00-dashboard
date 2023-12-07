import { KTIcon } from '../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'

const DealsListToolbar = () => {
  const { setItemIdForUpdate } = useListView()
  const openAddBrandModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-brand-table-toolbar='base'>

      {/* begin::Add brand */}
      <button type='button' className='btn btn-primary' onClick={openAddBrandModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add Brand
      </button>
      {/* end::Add brand */}
    </div>
  )
}

export { DealsListToolbar }
