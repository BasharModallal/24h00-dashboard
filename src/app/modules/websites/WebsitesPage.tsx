import {PageLink, PageTitle} from "../../../_metronic/layout/core";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {WebsitesListWrapper} from "./WebsitesList.tsx";

const websitesBreadcrumbs: Array<PageLink> = [
    {
        title: 'Deal WebSites',
        path: '/websites',
        isSeparator: false,
        isActive: false
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false
    },
]

const WebsitesPage = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route path='websites' element={
                    <>
                        <PageTitle breadcrumbs={websitesBreadcrumbs}>Websites List</PageTitle>
                        <WebsitesListWrapper />
                    </>
                }
                />
            </Route>
            <Route element={<Navigate to='/websites' /> } />
        </Routes>
    )
}

export default WebsitesPage