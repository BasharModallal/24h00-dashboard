import {Website} from "../../core/_models.ts";
import {Column} from "react-table";
import {WebsiteSelectionHeader} from "./WebsiteSelectionHeader.tsx";
import {WebsiteSelectionCell} from "./WebsiteSelectionCell.tsx";
import {WebsiteCustomHeader} from "./WebsiteCustomHeader.tsx";
import {WebsiteInfoCell} from "./WebsiteInfoCell.tsx";
import {WebsiteActionsCell} from "./WebsiteActionsCell.tsx";

const websitesColumns: ReadonlyArray<Column<Website>> = [
    {
        Header: (props) => <WebsiteSelectionHeader tableProps={props} />,
        id: 'selection',
        Cell: ({...props}) => <WebsiteSelectionCell id={props.data[props.row.index].id} />,
    },
    {
        Header: (props) => <WebsiteCustomHeader tableProps={props} title='Name' className='min-w-125px'/>,
        id: 'name',
        Cell: ({...props}) => <WebsiteInfoCell website={props.data[props.row.index]}/>,
    },
    {
        Header: (props) => <WebsiteCustomHeader tableProps={props} title='Role' className='min-w125px' />,
        accessor: 'url'
    },
    {
        Header: (props) => (
            <WebsiteCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
        ),
        id: 'actions',
        Cell: ({...props}) => <WebsiteActionsCell id={props.data[props.row.index].id} />
    },
]

export {websitesColumns}