import { useEffect } from 'react';
import { useEmployeeList as data, useEmployeeList } from '../../store/useEmployeeList'
import { EmployeeListItem } from './EmployeeListItem';

export const EmployeeList = ({onItemClick}) => {
    const {data, isFetching, isLoaded, refetch, isError} = useEmployeeList();

    // useEffect(()=>{
    //     if(!data && !isFetching && !isLoaded) {
    //         refetch();
    //     }
    // }, [data, isFetching, isLoaded, refetch]);

    // const userList = data.map(
    //     (user, i)=><EmployeeListItem user={user} key={`${i}-${user.name}`} onClick={onItemClick} />
    // )
    return (<div className='employee-list-wrapper'>
        {isFetching && <>Data loading...</>}
        {(!isFetching && isLoaded) && data.map(
        (user, i)=><EmployeeListItem user={user} key={`${i}-${user.name}`} onClick={onItemClick} />
    )}
    </div>)
}