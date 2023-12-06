import {useQuery} from 'react-query'
import {BrandEditModalForm} from './BrandEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getBrandById} from '../core/_requests'

const BrandEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: brand,
    error,
  } = useQuery(
    `${QUERIES.USERS_LIST}-brand-${itemIdForUpdate}`,
    () => {
      return getBrandById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
        console.error(err)
      },
    }
  )

  if (!itemIdForUpdate) {
    return <BrandEditModalForm isBrandLoading={isLoading} brand={{id: undefined}} />
  }

  if (!isLoading && !error && brand) {
    return <BrandEditModalForm isBrandLoading={isLoading} brand={brand} />
  }

  return null
}

export {BrandEditModalFormWrapper}
