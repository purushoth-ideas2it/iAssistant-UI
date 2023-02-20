import '../index.css'
import logo from '../assets/icons/logo.svg'
import { Link } from 'react-router-dom'
export const LeftNavigationBar = () => {
    return (
        <div className="w-full bg-white test">
            <img src={logo} alt="logo" className='image' />

            <ul>
                <li><Link to={'/'}>Home</Link ></li>
                <li><Link to={'/timesheet'}>Timesheet</Link ></li>
                <li><Link to={'/tickets'}>Tickets</Link ></li>
                <li><Link to={'/leave-request'}>Leave Request</Link ></li>
                <li><Link to={'/claims'}>Claims</Link ></li>
                <li><Link to={'/flexi-benefit'}>Fuel (Flexi Benefit)</Link ></li>
                <li><Link to={'/discussion'}>Discussions</Link ></li>
                <li><Link to={'/loans'}>Loans</Link ></li>
                <li><Link to={'/employee-database'}>Employee Database</Link ></li>
            </ul>
        </div >
    )
}