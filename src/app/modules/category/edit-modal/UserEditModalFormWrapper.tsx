import {useQuery} from 'react-query'
import {UserEditModalForm} from './UserEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getCategoryById} from '../core/_requests'

const UserEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: category,
    error,
  } = useQuery(
    `${QUERIES.USERS_LIST}-category-${itemIdForUpdate}`,
    () => {
      return getCategoryById(itemIdForUpdate)
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
    return <UserEditModalForm isUserLoading={isLoading} category={{id: undefined}} />
  }

  if (!isLoading && !error && category) {
    return <UserEditModalForm isUserLoading={isLoading} category={category} />
  }

  return null
}

export {UserEditModalFormWrapper}
