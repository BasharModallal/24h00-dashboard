import { useListView } from '../../core/ListViewProvider'
import { DealsListToolbar } from './DealListToolbar'
import { DealsListGrouping } from './DealsListGrouping'
import { DealsListSearchComponent } from './DealsListSearchComponent'

const DealsListHeader = () => {
  const { selected } = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <DealsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <DealsListGrouping /> : <DealsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export { DealsListHeader }
