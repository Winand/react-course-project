import { useState } from "react";

const mock = [
    {
        id: 1,
        name: "John",
        avatar: "",
        position: "SEO"
    },
    {
        id: 2,
        name: "Bob",
        avatar: "",
        position: "Manager"
    },
];

const myFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof mock === 'string') {
                reject(new Error("Wrong data format"));
            } else {
                resolve(mock);
            }
        }, 500);
    })
}

export const useEmployeeList = () => {
    const [data, setData] = useState(undefined);
    const [isFetching, setIsFetching] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    const refetch = () => {
        setIsLoaded(false)
        setIsFetching(true);
        myFetch()
            .then((_data) => {
                setData(_data);
                setIsLoaded(true);
            })
            .catch(() => {
                setData(undefined);
                setIsLoaded(false);
                setIsError(true);
            })
            .finally(() => {
                setIsFetching(false);
            });
    }

    if(!data && !isFetching && !isLoaded && !isError) {
        refetch();
    }

    return {
        data,
        isError,
        isFetching,
        isLoaded,
        refetch,
    }
}
