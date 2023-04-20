import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { PageHeader } from "../../components/PageHeader";
import { EmployeeCard } from "../../components/EmployeeCard";

export const EmployeeCardPage = () => {
    const navigate = useNavigate();
    /* useCalllback, т. к. useNavigate - это хук (начинается с "use") */
    const onGoBack = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return (<>
    <PageHeader onGoBack={onGoBack} text="Employee" />
    <EmployeeCard/>
    </>)
}