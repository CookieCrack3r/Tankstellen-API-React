import { useState, useEffect } from 'react';
import axios, { AxiosResponse, Method } from 'axios';

type Setter<T> = (data: T) => void

export function useTankstellenApi<T>(method: Method, path: string): [T | undefined, Setter<T>] {
    const [data, setData] = useState<T>();

    useEffect(() => {
        tankstelleApi(
            method,
            path,
            (data_: T) => setData(data_)
        )
    }, [method, path])

    return [data, setData];
}

export function tankstelleApi<T>(method: Method, path: string, callback: Setter<T>, data = {}): void {
    const baseUrl = 'https://creativecommons.tankerkoenig.de/json/list.php?'

    axios({
        method: method,
        url: `${baseUrl}/${path}`,
        headers: { Authorization: 'Bearer 1234567890' },
        data
    })
        .then((response: AxiosResponse<T>) => callback(response.data))
}
