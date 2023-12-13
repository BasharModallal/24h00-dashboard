import { useQuery } from 'react-query'
import { DealEditModalForm } from './DealEditModalForm'
import { isNotEmpty, QUERIES } from '../../../../../_metronic/helpers'
import { useListView } from '../core/ListViewProvider'
import { getDealById } from '../core/_requests'
import { initialDeal } from '../core/_models'

const DealEditModalFormWrapper = () => {
  const { itemIdForUpdate, setItemIdForUpdate } = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: deal,
    error,
  } = useQuery(
    `${QUERIES.DEALS_LIST}-deals-${itemIdForUpdate}`,
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
    return <DealEditModalForm isBrandLoading={isLoading} deal={{ ...initialDeal }} />
  }

  if (!isLoading && !error && deal) {
    return <DealEditModalForm isBrandLoading={isLoading} deal={deal} />
  }

  return null
}

export { DealEditModalFormWrapper }
