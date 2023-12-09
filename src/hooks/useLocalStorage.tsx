import { useState } from 'react';

function useLocalStorage() {
    const [storage, setStorage] = useState(localStorage);

    const set = (key: string, value: string) => {
        localStorage.setItem(key, value);
        setStorage(localStorage);
    }

    const get = (key: string) => {
        return localStorage.getItem(key);
    }

    const remove = (key: string) => {
        localStorage.removeItem(key);
        setStorage(localStorage);
    }

    const clear = () => {
        localStorage.clear();
        setStorage(localStorage);
    }

    const getStorage = () => {
        return storage;
    }

    return { getStorage, set, get, remove, clear };
}

export default useLocalStorage;