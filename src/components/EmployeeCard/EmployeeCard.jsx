import { useParams } from 'react-router-dom';
import { useEmployeeFullData } from "../../store/useEmployeeFullData";
import "./EmployeeCard.css";
import { useCallback, useEffect, useState } from 'react';
import { formatUserName } from '../../utils'
import { EmployeeCardElement } from './EmployeeCardElement';

export const EmployeeCard = () => {
    const [employee, setEmployee] = useState();
    const {employeeId} = useParams();

    // переименование data->employee https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#nested_object_and_array_destructuring
    const {data, isFetching, isLoaded, getEmployee} = useEmployeeFullData();

    const prepOnSave = useCallback((fieldName)=>(newValue) => {
        switch(fieldName) {
            case 'email':
                setEmployee((state)=>{return {...state, email: newValue}});
                break;
            case 'phone-office':
                setEmployee((state)=>{
                    const newState = {...state}
                    newState.phone.office = newValue;
                    return newState;
                });
                break;
        }
        console.log(newValue, fieldName);
    }, [setEmployee]);

    useEffect(()=>{
        if(!isFetching && !isLoaded && employeeId) {
            getEmployee(employeeId);
        }
    }, [isFetching, isLoaded, getEmployee, employeeId]);

    useEffect(() => {
        if(data) {
            setEmployee(data);
        }
    }, [data, setEmployee]);

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
            <EmployeeCardElement label="Email" value={employee.email} onSave={prepOnSave('email')}/>
            <EmployeeCardElement label="Call office" value={employee.phone.office} onSave={prepOnSave('phone-office')}/>
            <EmployeeCardElement label="Call mobile" value={employee.phone.cell} onSave={prepOnSave('phone-mobile')}/>
            <EmployeeCardElement label="SMS" value={employee.phone.sms} onSave={prepOnSave('phone-sms')}/>
        </div>)}

        {(!employee && isFetching) && (<>Employee data loading...</>)}

        {(!employee && !isFetching && isLoaded) && (<>No employee data.</>)}
    </div>);
}
