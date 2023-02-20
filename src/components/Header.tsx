import React, { useEffect, useState } from "react";
import Notification from './../assets/icons/notification.svg'
import Docker from './../assets/icons/docker.svg'
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    const [Heading, setHeading] = useState('')
    useEffect(() => {
        if ((location.pathname == "/")) {
            setHeading('Welcome Home!')

        } else {
            if ((location.pathname.slice(1) == "flexi-benefit")) {
                setHeading("Fuel (Flexi-Benifit)")
            } else {
                setHeading(location.pathname.slice(1))
            }
        }
    }, [location.pathname])

    return (
        <nav className="flex flex-row mt-8 h-1/6 mt-0">
            <div className="font-bold text-3xl capitalize text-custom-head ml-5 mt-12 w-10/12">
                {Heading}
            </div>
            <div className="w-2/12 flex flex-row mt-12">
                <div className="relative mx-1 h-7 w-9 rounded-lg bg-custom-blue">
                    <img src={Notification} alt="notification-icon" className="absolute inset-1/4 h-4 w-4" />
                </div>
                <div className="relative h-7 w-12 ml-1 rounded-lg bg-custom-orange">
                    <img src={Docker} alt="notification-icon" className="absolute ml-2 mt-1 h-4 w-4" />
                </div>
                <div className="bg-custom-blue w-14 h-7 ml-1 rounded-lg">
                    <div className="rounded-lg border-custom-blue bg- custom-orange h-4 w-4"></div>
                </div>
            </div>
        </nav >
    );
}