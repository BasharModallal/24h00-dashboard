import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../_metronic/layout/core'
import {DealsListWrapper} from './DealList'

const usersBreadcrumbs: Array<PageLink> = [
    {
      title: 'Deals Management',
      path: '/apps/deals/all',
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
const DealPage = () => {
    
    return (
      <Routes>
        <Route element={<Outlet />}>
          <Route
            path='all'
            element={
              <>
                <PageTitle breadcrumbs={usersBreadcrumbs}>Category list</PageTitle>
                <DealsListWrapper />
              </>
            }
          />
        </Route>
        <Route index element={<Navigate to='/apps/deals/all' />} />
      </Routes>
    )
  }
  
  export default DealPage
  