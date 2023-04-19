import { useNavigate, useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react';
import { EmployeeFullData as data } from "../../store/EmployeeFullData"
import { EmployeeCardHeader } from "./EmployeeCardHeader"
import { formatUserName } from '../../utils'
import "./EmployeeCard.css"

export const EmployeeCard = () => {
    const navigate = useNavigate();
    const {employeeId} = useParams();
    const [employee, setEmployee] = useState();

    /* useCalllback, т. к. useNavigate - это хук (начинается с "use") */
    const onGoBack = useCallback(() => {
        navigate(-1)
    }, [navigate]);

    useEffect(()=>{
        if(employeeId) {
            console.log(employeeId);
            /* ищем пользователя, потому что другой источник данных с большим числом полей */
            setEmployee(data.find(el=>el.id === Number(employeeId)));
        }
    }, [employeeId, setEmployee])

    const currentEmployee = {};

    return (<div className="employee-page-wrapper">
        <EmployeeCardHeader onGoBack={onGoBack} />
        {employee ? (
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
        ) : (
        <div>NO EMPLOYEE</div>
        )}
    </div>)
}
