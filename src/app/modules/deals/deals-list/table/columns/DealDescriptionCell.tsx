
import clsx from 'clsx'
import { FC } from 'react'
import { Deal, DealResponse } from '../../core/_models'

type Props = {
    deal: DealResponse
}

const DealDescriptionCell: FC<Props> = ({ deal }) => (
    <div className='d-flex align-items-center'>
        <div className='d-flex flex-column'>
            {deal.description}
        </div>
    </div>
)

export { DealDescriptionCell }
