import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {CategoryListWrapper} from './user-management/users-list/CategoryList'

const usersBreadcrumbs: Array<PageLink> = [
    {
      title: 'Category Management',
      path: '/apps/category-management/categories',
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
const CategoryPage = () => {
    
    return (
      <Routes>
        <Route element={<Outlet />}>
          <Route
            path='categories'
            element={
              <>
                <PageTitle breadcrumbs={usersBreadcrumbs}>Category list</PageTitle>
                <CategoryListWrapper />
              </>
            }
          />
        </Route>
        <Route index element={<Navigate to='/apps/category-management/categories' />} />
      </Routes>
    )
  }
  
  export default CategoryPage
  