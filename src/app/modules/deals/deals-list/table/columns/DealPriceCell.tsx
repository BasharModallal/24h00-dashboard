
import clsx from 'clsx'
import { FC } from 'react'
import { Deal, DealResponse } from '../../core/_models'

type Props = {
    deal: DealResponse
}

const DealPriceCell: FC<Props> = ({ deal }) => (
    <div className='d-flex align-items-center'>
        <div className='d-flex flex-column'>
            {deal.oldprice}<small>(old)</small>/{deal.newprice}<small>(new)</small>
        </div>
    </div>
)

export { DealPriceCell }
