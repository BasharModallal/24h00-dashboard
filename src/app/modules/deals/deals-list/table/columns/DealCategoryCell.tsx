
import clsx from 'clsx'
import { FC } from 'react'
import { Deal, DealResponse } from '../../core/_models'

type Props = {
    deal: DealResponse
}

const DealCategoryCell: FC<Props> = ({ deal }) => (
    <div className='d-flex align-items-center'>
        <div className='d-flex flex-column'>
            <a href='#' className='text-gray-800 text-hover-primary mb-1'>
                {deal.category_details.name}
            </a>
        </div>
    </div>
)

export { DealCategoryCell }
