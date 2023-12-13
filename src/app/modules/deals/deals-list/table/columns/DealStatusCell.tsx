
import clsx from 'clsx'
import { FC } from 'react'
import { Deal, DealResponse } from '../../core/_models'
import { getStatusName } from '../../../../../../_metronic/helpers'

type Props = {
    deal: DealResponse
}

const DealStatusCell: FC<Props> = ({ deal }) => (
    <div className='d-flex align-items-center'>
        <div className='d-flex flex-column'>
            {getStatusName(deal.status)}
        </div>
    </div>
)

export { DealStatusCell }
