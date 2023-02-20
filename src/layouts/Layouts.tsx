import { Outlet } from 'react-router-dom';
import { LeftNavigationBar } from '../components/LeftNavigationBar';
import { Header } from './../components/Header';

export const Layouts = () => {
    return (
        <>
            <div className="grid grid-cols-5">
                <div className="col-span-1">
                    <LeftNavigationBar />
                </div>
                <div className="col-span-4">
                    <Header />
                    <Outlet />
                </div>
            </div >
        </>
    );
};