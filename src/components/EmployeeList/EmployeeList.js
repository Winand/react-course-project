import { EmployeeList as data } from '../../store/EmpoyeeList'
import { EmpoyeeListItem } from './EmpoyeeListItem';

export const EmployeeList = () => {
    const userList = data.map(
        (user, i)=><EmpoyeeListItem user={user} key={`${i}-${user.name}`} />
    )
    return (<div>{userList}</div>)
}