import { useState } from "react";

const mock = [
    {
        id: 1,
        name: "John",
        avatar: "",
        position: "SEO",
        email: "seo@paperfactory.com",
        phone: {
            office: "",
            cell: "",
            sms: ""
        },
    },
    {
        id: 2,
        name: "Bob",
        avatar: "",
        position: "Manager",
        email: "bob@paperfactory.com",
        phone: {
            office: "555-678",
            cell: "903 586-789",
            sms: "903 586-789"
        },
    },
];

export const useEmployeeFullData = () => {
    const [data, setData] = useState(undefined);
    const [isFetching, setIsFetching] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);

    const getEmployee = (employeeId) => {
        setIsFetching(true);

        const employee = mock.find((el) => el.id === Number(employeeId));

        setTimeout(()=>{
            if(!employee) {
                setIsError(true);
                setIsLoaded(true);
                setIsFetching(false);
                setData(undefined);
            } else {
                setIsError(false);
                setIsLoaded(true);
                setIsFetching(false);
                setData(employee);
            }
        }, 1500);
    }

    return {
        data,
        isError,
        isFetching,
        isLoaded,
        getEmployee,
    };
}
