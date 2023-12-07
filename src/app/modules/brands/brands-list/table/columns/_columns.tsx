import { Column } from 'react-table'
import { BrandInfoCell } from './BrandInfoCell'
import { BrandActionsCell } from './BrandActionsCell'
import { BrandSelectionCell } from './BrandSelectionCell'
import { BrandCustomHeader } from './BrandCustomHeader'
import { BrandSelectionHeader } from './BrandSelectionHeader'
import { Brand } from '../../core/_models'
import { BrandDateCell } from './BrandDateCell'

const brandsColumns: ReadonlyArray<Column<Brand>> = [
  {
    Header: (props) => <BrandSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <BrandSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <BrandCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({ ...props }) => <BrandInfoCell brand={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <BrandCustomHeader tableProps={props} title='Created Date time' className='min-w-125px' />,
    id: 'created_at',
    Cell: ({ ...props }) => <BrandDateCell brand={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <BrandCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <BrandActionsCell id={props.data[props.row.index].id} />,
  },
]

export { brandsColumns }
