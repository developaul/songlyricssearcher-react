import { useState } from 'react';

const useForm = (initialState = {}) => {

    const [state, setState] = useState(initialState);

    const handleInputChange = ({ target }) => setState({
        ...state,
        [target.name]: target.value
    });

    return [state, handleInputChange, setState];
};

export default useForm;