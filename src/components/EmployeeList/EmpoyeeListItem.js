import { formatUserName } from '../../utils'
import './EmployeeListItem.css'

export const EmpoyeeListItem = ({user}) => {
    return (<div className='employee-list-item'>
        <div className='avatar'>{user.avatar}</div>
        <div className='user-info'>
            <div className='employee-name'>{formatUserName(user)}</div>
            <div className='employee-position'>{user.position}</div>
        </div>
    </div>);
}
