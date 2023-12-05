import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { AppBar } from 'components/AppBar/AppBar.jsx'
import { Loader } from '../Loader/Loader.jsx';

export const Layout = () => {
    return (
        <div>
            <AppBar/>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </div>
    )
}