import { EmployeeFullData as data } from "../../store/EmployeeFullData"
import { EmployeeCardHeader } from "./EmployeeCardHeader"
import { formatUserName } from '../../utils'
import "./EmployeeCard.css"

export const EmployeeCard = ({ currentEmployee, onGoBack }) => {
    /* ищем пользователя, потому что другой источник данных с большим числом полей */
    const employee = data.find(el=>el.id === currentEmployee?.id)
    console.log(employee.name)
    return (<div className="employee-page-wrapper">
        <EmployeeCardHeader onGoBack={onGoBack} />
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
    </div>)
}
