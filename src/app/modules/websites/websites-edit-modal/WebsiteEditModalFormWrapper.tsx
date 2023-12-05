import {useQuery} from 'react-query'
import {WebsiteEditModalForm} from './WebsiteEditModalForm.tsx'
import {isNotEmpty, QUERIES} from '../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getWebsiteById} from '../core/_requests'

const WebsiteEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: website,
    error,
  } = useQuery(
    `${QUERIES.WEBSITES_LIST}-website-${itemIdForUpdate}`,
    () => {
      return getWebsiteById(itemIdForUpdate)
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
    return <WebsiteEditModalForm isWebsiteLoading={isLoading} website={{id: undefined}} />
  }

  if (!isLoading && !error && website) {
    return <WebsiteEditModalForm isWebsiteLoading={isLoading} website={website} />
  }

  return null
}

export {WebsiteEditModalFormWrapper}
