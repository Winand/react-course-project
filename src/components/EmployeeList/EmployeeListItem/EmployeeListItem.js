import { formatUserName } from '../../../utils'
import './EmployeeListItem.css'

export const EmployeeListItem = ({user, onClick}) => {
    return (<div className='employee-list-item' onClick={() => onClick(user)}>
        <div className='avatar'>{user.avatar}</div>
        <div className='user-info'>
            <div className='employee-name'>{formatUserName(user)}</div>
            <div className='employee-position'>{user.position}</div>
        </div>
    </div>);
}
