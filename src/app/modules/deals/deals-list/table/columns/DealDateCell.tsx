
import clsx from 'clsx'
import { FC } from 'react'
import { toAbsoluteUrl } from '../../../../../../_metronic/helpers'
import { Deal, DealResponse } from '../../core/_models'
import dayjs from 'dayjs'

type Props = {
    deal: DealResponse
}

const DealDateCell: FC<Props> = ({ deal }) => (
    <div className='d-flex align-items-center'>
        <div className=''>
            {dayjs(deal.created_at).format('YYYY-MM-DD HH:mm A')}
        </div>
    </div>
)

export { DealDateCell }
