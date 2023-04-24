import { useParams } from 'react-router-dom';
import { useEmployeeFullData } from "../../store/useEmployeeFullData";
import "./EmployeeCard.css";
import { useEffect } from 'react';
import { formatUserName } from '../../utils'
import { EmployeeCardElement } from './EmployeeCardElement';

export const EmployeeCard = () => {
    const {employeeId} = useParams();

    // переименование data->employee https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#nested_object_and_array_destructuring
    const {data: employee, isFetching, isLoaded, getEmployee} = useEmployeeFullData();

    useEffect(()=>{
        if(!employee && !isFetching && !isLoaded && employeeId) {
            getEmployee(employeeId);
        }
    }, [employee, isFetching, isLoaded, getEmployee, employeeId]);

    return (<div className="employee-page-wrapper">
        {employee && (
        <div className="employee-info-wrapper">
            <div className='employee-badge'>
                <div className='avatar'>{employee.avatar}</div>
                <div className='user-info'>
                    <div className='employee-name'>{formatUserName(employee)}</div>
                    <div className='employee-position'>{employee.position}</div>
                </div>
            </div>
            <EmployeeCardElement label="Email" value={employee.email} onEditClick={()=>{}}/>
            <EmployeeCardElement label="Call office" value={employee.phone.office} onEditClick={()=>{}}/>
            <EmployeeCardElement label="Call mobile" value={employee.phone.cell} onEditClick={()=>{}}/>
            <EmployeeCardElement label="SMS" value={employee.phone.sms} onEditClick={()=>{}}/>
        </div>)}

        {(!employee && isFetching) && (<>Employee data loading...</>)}

        {(!employee && !isFetching && isLoaded) && (<>No employee data.</>)}
    </div>);
}
