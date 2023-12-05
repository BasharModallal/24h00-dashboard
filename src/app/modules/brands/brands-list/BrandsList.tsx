import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { BrandsListHeader } from './components/header/BrandsListHeader'
import { BrandsTable } from './table/BrandsTable'
import { BrandEditModal } from './brand-edit-modal/BrandEditModal'
import { KTCard } from "../../../../_metronic/helpers"

const BrandsList = () => {
  const { itemIdForUpdate } = useListView()
  return (
    <>
      <KTCard>
        <BrandsListHeader />
        <BrandsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <BrandEditModal />}
    </>
  )
}

const BrandsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <BrandsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export default BrandsListWrapper 
