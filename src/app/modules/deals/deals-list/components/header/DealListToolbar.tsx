import { KTIcon } from '../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'

const DealsListToolbar = () => {
  const { setItemIdForUpdate } = useListView()
  const openAddBrandModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-brand-table-toolbar='base'>

      <button type='button' className='btn btn-primary' onClick={openAddBrandModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add Deal
      </button>
    </div>
  )
}

export { DealsListToolbar }
