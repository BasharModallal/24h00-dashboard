
import { useIntl } from 'react-intl'
import { KTIcon } from '../../../helpers'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import { AsideMenuItem } from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
        <AsideMenuItem
            to='/apps/deals'
            icon='element-5'
            title='Deals'
        />
        <AsideMenuItem to='/websites' icon='element-12' title='Deal Websites' />
        <AsideMenuItem to='/apps/brand-management/brands' icon='shield-tick' title='Brand management' />
        <AsideMenuItem
            to='/apps/category-management/categories'
            icon='element-5'
            title='Categories'
        />
    </>
  )
}
