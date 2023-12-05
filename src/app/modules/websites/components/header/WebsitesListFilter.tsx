import {useQueryRequest} from "../../core/QueryRequestProvider.tsx";
import {useQueryResponse} from "../../core/QueryResponseProvider.tsx";
import {useEffect, useState} from "react";
import {MenuComponent} from "../../../../../_metronic/assets/ts/components";
import {initialQueryState, KTIcon} from "../../../../../_metronic/helpers";

const WebsitesListFilter = () => {
    const {updateState} = useQueryRequest()
    const {isLoading} = useQueryResponse()
    const [role, setRole] = useState<string | undefined>()
    const [lastLogin, setLastLogin] = useState<string | undefined>()

    useEffect(() => {
        MenuComponent.reinitialization()
    }, []);

    const resetData = () => {
        updateState({filter: undefined, ...initialQueryState})
    }

    const filterData = () => {
        updateState({
            filter: {role, last_login: lastLogin}
        })
    }

    return (
        <>
            {/* begin::Filter Button */}
            <button
                disabled={isLoading}
                type='button'
                className='btn btn-light-primary me-3'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
            >
                <KTIcon iconName='filter' className='fs-2' />
                Filter
            </button>
            {/* end::Filter Button */}
            {/* begin::SubMenu */}
            <div className='menu menu-sub menu-sub-dropdown w-300px w-md-325px' data-kt-menu='true'>
                <div className='px-7 py-5'>
                    <div className='fs-5 text-gray-900 fw-bolder'>Filter Options</div>
                </div>
            </div>

            {/* begin::Separator */}
            <div className='separator border-gray-200'></div>
            {/* end::Separator */}

            {/* begin::Content */}
            <div className='px-7 py-5' data-kt-user-table-filter='form'>
                {/* begin::Input group */}
                <div className='mb-10'>
                    <label className='form-label fs-6 fw-bold'>Role:</label>
                    <select
                        className='form-select form-select-solid fw-bolder'
                        data-kt-select2='true'
                        data-placeholder='Select option'
                        data-allow-clear='true'
                        data-kt-user-table-filter='role'
                        data-hide-search='true'
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                        >
                        <option value=''></option>
                        <option value='Administrator'>Administrator</option>
                        <option value='Analyst'>Analyst</option>
                        <option value='Developer'>Developer</option>
                        <option value='Support'>Support</option>
                        <option value='Trial'>Trial</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export  {WebsitesListFilter}