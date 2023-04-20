import { EmployeeList as data } from '../../store/EmployeeList'
import { EmployeeListItem } from './EmployeeListItem';
// import {Header} from './Header';
// import {SearchBar} from './SearchBar';

export const EmployeeList = ({onItemClick}) => {
    const userList = data.map(
        (user, i)=><EmployeeListItem user={user} key={`${i}-${user.name}`} onClick={onItemClick} />
    )
    return (<div className='employee-list-wrapper'>{userList}</div>)
}