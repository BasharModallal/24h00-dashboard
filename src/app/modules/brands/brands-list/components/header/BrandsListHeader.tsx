import { useListView } from '../../core/ListViewProvider'
import { BrandsListToolbar } from './BrandListToolbar'
import { BrandsListGrouping } from './BrandsListGrouping'
import { BrandsListSearchComponent } from './BrandsListSearchComponent'

const BrandsListHeader = () => {
  const { selected } = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <BrandsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <BrandsListGrouping /> : <BrandsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export { BrandsListHeader }
