import { useNavigate } from 'react-router-dom'
import { formatUserName } from '../../../utils'
import './EmployeeListItem.css'
import { useCallback } from 'react';

export const EmployeeListItem = ({ user }) => {
    const navigate = useNavigate();
    /* useCalllback, т. к. useNavigate - это хук (начинается с "use") */
    const onClick = useCallback(() => {
        navigate(`/employee/${user.id}`)
    }, [navigate, user.id]);

    return (<div className='employee-list-item' onClick={() => onClick(user)}>
        <div className='avatar'>{user.avatar}</div>
        <div className='user-info'>
            <div className='employee-name'>{formatUserName(user)}</div>
            <div className='employee-position'>{user.position}</div>
        </div>
    </div>);
}
