import {useQuery} from 'react-query'
import {DealEditModalForm} from './DealEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getDealById} from '../core/_requests'

const DealEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: brand,
    error,
  } = useQuery(
    `${QUERIES.USERS_LIST}-deals-${itemIdForUpdate}`,
    () => {
      return getDealById(itemIdForUpdate)
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
    return <DealEditModalForm isBrandLoading={isLoading} brand={{id: undefined}} />
  }

  if (!isLoading && !error && brand) {
    return <DealEditModalForm isBrandLoading={isLoading} brand={brand} />
  }

  return null
}

export {DealEditModalFormWrapper}
