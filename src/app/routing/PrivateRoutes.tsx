import { FC, lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { MenuTestPage } from '../pages/MenuTestPage'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { WithChildren } from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import { WebsitesListWrapper } from "../modules/websites/WebsitesList.tsx";
// import { BrandsListWrapper } from "../modules/brands/brands-list/BrandsList.tsx";
import { UsersListWrapper } from "../modules/users/users-list/UsersList.tsx";

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  const CategoryPage = lazy(() => import('../../app/modules/category/CategoryPage'))
  const DealsListWrapper = lazy(() => import('../modules/deals/deals-list/DealsList'))
  const BrandsListWrapper = lazy(() => import('../modules/brands/brands-list/BrandsList'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />

        {/* Lazy Modules */}

        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
              {/* <h1>Crafted widgets</h1> */}
            </SuspensedView>
          }
        />
        {/* <Route
          path='deals/*'
          element={
            <SuspensedView>
              <DealsListWrapper />
            </SuspensedView>
          }
        /> */}
        <Route
          path='brands/*'
          element={
            <SuspensedView>
              <BrandsListWrapper />
            </SuspensedView>
          }
        />
        <Route
          path='websites/*'
          element={
            <SuspensedView>
              <WebsitesListWrapper />
            </SuspensedView>
          }
        />
        <Route
          path='users/*'
          element={
            <SuspensedView>
              <UsersListWrapper />
            </SuspensedView>
          }
        />

        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />

        <Route
          path='apps/category-management/*'
          element={
            <SuspensedView>
              <CategoryPage />
            </SuspensedView>
          }
        />
        {/* Deals */}

        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoutes }
