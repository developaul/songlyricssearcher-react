import { useState, useEffect } from 'react';

import axios from 'axios';

const useAxios = (busqueda, url1, url2) => {

    const [state, setState] = useState({
        result: null,
        error: null,
        loading: true
    });

    useEffect(() => {

        if (Object.keys(busqueda).length === 0) return;

        setState({
            result: null,
            error: null,
            loading: true
        });

        (async () => {

            try {

                const result = await Promise.all([axios(url1), axios(url2)]);

                setState({
                    result,
                    error: null,
                    loading: false
                });

            } catch (error) {

                setState({
                    result: null,
                    error,
                    loading: false
                });

            }


        })();

    }, [busqueda, url1, url2]);

    return state;
};

export default useAxios;