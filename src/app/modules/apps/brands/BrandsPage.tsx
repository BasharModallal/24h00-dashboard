import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {BrandsListWrapper} from './brands-list/BrandsList'

const brandsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Brand Management',
    path: '/apps/brand-management/brands',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const BrandsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='brands'
          element={
            <>
              <PageTitle breadcrumbs={brandsBreadcrumbs}>Brands list</PageTitle>
              <BrandsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/brand-management/brands' />} />
    </Routes>
  )
}

export default BrandsPage
