
import { useIntl } from 'react-intl'
import { KTIcon } from '../../../helpers'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import { AsideMenuItem } from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
        <AsideMenuItem to='/websites' icon='element-12' title='Deal Websites' />
        <AsideMenuItem to='/apps/category-management/categories' icon='element-5' title='Category management' />
        <AsideMenuItem to='/brands' icon='shield-tick' title='Brand management' />
        <AsideMenuItem to='/deals' icon='shield-tick' title='Deals management' />
    </>
  )
}
