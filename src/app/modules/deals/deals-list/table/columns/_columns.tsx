import { Column } from 'react-table'
import { DealInfoCell } from './DealInfoCell'
import { DealActionsCell } from './DealActionsCell'
import { DealSelectionCell } from './DealSelectionCell'
import { DealCustomHeader } from './DealCustomHeader'
import { DealSelectionHeader } from './DealSelectionHeader'
import { Deal, DealResponse } from '../../core/_models'
import { DealDateCell } from './DealDateCell'
import { DealIdCell } from './DealIdCell'

const dealsColumns: ReadonlyArray<Column<DealResponse>> = [
  {
    Header: (props) => <DealCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    id: 'id',
    Cell: ({ ...props }) => <DealIdCell deal={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <DealCustomHeader tableProps={props} title='Title' className='min-w-125px' />,
    id: 'title',
    Cell: ({ ...props }) => <DealInfoCell deal={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <DealCustomHeader tableProps={props} title='Created Date time' className='min-w-125px' />,
    id: 'created_at',
    Cell: ({ ...props }) => <DealDateCell deal={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <DealCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <DealActionsCell id={props.data[props.row.index].id} />,
  },
]

export { dealsColumns }
