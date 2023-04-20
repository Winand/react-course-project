import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react';
import { EmployeeCard } from "../../components/EmployeeCard"
import { PageHeader } from "../../components/PageHeader"

export const EmployeeCardPage = () => {
    const navigate = useNavigate();
    /* useCalllback, т. к. useNavigate - это хук (начинается с "use") */
    const onGoBack = useCallback(() => {
        navigate(-1)
    }, [navigate]);

    return (<>
    <PageHeader onGoBack={onGoBack} text="Employee" />
    <EmployeeCard/>
    </>)
}