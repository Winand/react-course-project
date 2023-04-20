import { useNavigate, useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react';
import { useEmployeeFullData as data, useEmployeeFullData } from "../../store/useEmployeeFullData"
// import { EmployeeCardHeader } from "./EmployeeCardHeader"
import { formatUserName } from '../../utils'
import "./EmployeeCard.css"

export const EmployeeCard = () => {
    const {employeeId} = useParams();

    const {data: employee, isFetching, isLoaded, getEmployee} = useEmployeeFullData()

    useEffect(()=>{
        if(!employee && !isFetching && !isLoaded && employeeId) {
            getEmployee(employeeId);
        }
    }, [data, isFetching, isLoaded, getEmployee, employeeId])

    return (<div className="employee-page-wrapper">
        {/* <EmployeeCardHeader onGoBack={onGoBack} /> */}
        {employee && (
        <div className="employee-info-wrapper">
            <div className='employee-badge'>
                <div className='avatar'>{employee.avatar}</div>
                <div className='user-info'>
                    <div className='employee-name'>{formatUserName(employee)}</div>
                    <div className='employee-position'>{employee.position}</div>
                </div>
            </div>
            <div className="info-item">
                <div className="label">Email</div>
                <div className="value">{employee.email}</div>
            </div>
            <div className="info-item">
                <div className="label">Call office</div>
                <div className="value">{employee.phone.office}</div>
            </div>
            <div className="info-item">
                <div className="label">Call mobile</div>
                <div className="value">{employee.phone.cell}</div>
            </div>
            <div className="info-item">
                <div className="label">SMS</div>
                <div className="value">{employee.phone.sms}</div>
            </div>
        </div>
        )}

        {(!employee && isFetching) && (<>Employee data loading...</>)}
        {(!employee && !isFetching && isLoaded) && (<>No employee data</>)}
    </div>)
}
