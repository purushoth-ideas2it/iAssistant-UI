import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import { Layouts } from '../layouts/Layouts'
import { Timesheet } from '../pages/Timesheet'
import { Home } from '../pages/Home'
import { Ticket } from '../pages/Ticket'
import { Claim } from '../pages/Claim'
import { FlexiBenefit } from '../pages/FlexiBenefit'
import { LeaveRequest } from '../pages/LeaveRequest'
import { Discussion } from '../pages/Discussion'
import { Loan } from '../pages/Loan'
import { EmployeeDatabase } from '../pages/EmployeeDatabase'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Layouts />}>
                    <Route index element={<Home />} />
                    <Route path='timesheet' element={<Timesheet />} />
                    <Route path='tickets' element={<Ticket />} />
                    <Route path='leave-request' element={<LeaveRequest />} />
                    <Route path='claims' element={<Claim />} />
                    <Route path='flexi-benefit' element={<FlexiBenefit />} />
                    <Route path='discussion' element={<Discussion />} />
                    <Route path='loans' element={<Loan />} />
                    <Route path='employee-database' element={<EmployeeDatabase />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}