import {ID, Response} from '../../../_metronic/helpers'
export type Deal = {
  id?: ID
  title?: string
  description?: string
  image?: any
  initials?: {
    label: string
    state: string
  }
}

export type DealsQueryResponse = Response<Array<Deal>>

export const initialDeal: Deal = {
  title: '',
  image: null,
  description: '',
}
