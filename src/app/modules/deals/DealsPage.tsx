import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from "../../../_metronic/layout/core"
import DealsListWrapper from './deals-list/DealsList'

const brandsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Deal Management',
    path: '/deals',
    isSeparator: true,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const DealsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='deals'
          element={
            <>
              <PageTitle breadcrumbs={brandsBreadcrumbs}>Deal list</PageTitle>
              <DealsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/deals' />} />
    </Routes>
  )
}

export default DealsPage
