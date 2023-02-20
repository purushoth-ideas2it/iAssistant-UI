import React, { useEffect, useState } from "react";
import Notification from './../assets/icons/notification.svg'
import Docker from './../assets/icons/docker.svg'
import { useLocation, useNavigate } from "react-router-dom";
import profile from './../assets/icons/profile.svg'

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

    const [docker, setdocker] = useState("750")
    return (
        <nav className="flex flex-row h-1/6 mt-3">
            <div className="font-bold text-3xl capitalize text-custom-head ml-5 mt-10 w-10/12 h-4/6">
                {Heading}
            </div>
            <div className="w-2/12 h-4/6 flex flex-row mt-10">
                <div className="relative h-2/5 w-2/12 rounded-lg bg-blue">
                    <img src={Notification} alt="notification-icon" className="absolute mt-1.5 ml-0.5 h-6 w-max-6 w-5/6" />
                </div>
                <div className="relative h-2/5 w-4/12 ml-3 rounded-lg bg-orange">
                    <img src={Docker} alt="notification-icon" className="absolute mt-1 h-6 ml-1 w-max-6 w-2/6" />
                    <p className="ml-6 text-orange mt-1">{docker}</p>
                </div>
                <div className="h-2/5 w-4/12 ml-3 rounded-lg">
                    <div className="rounded-2xl border h-8 w-8">
                        <img src={profile} alt="profile" />
                    </div>
                    <div className="ml-9 h-2 -mt-5 w-4 bg-cover bg-select"></div>
                </div>
            </div>
        </nav >
    );
}