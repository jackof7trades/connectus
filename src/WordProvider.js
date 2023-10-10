import { useEffect, useState } from 'react';
import axios from 'axios';

import WordContext from './WordContext';

export default function WordProvider({ children }) {
    const [words, setWords] = useState({});
    const [selected, setSelected] = useState([]);
    const [correct, setCorrect] = useState([]);
    const [guesses, setGuesses] = useState(4);

    const URL = 'https://m6y6xp4gri5mv3cc2ykrvlgpc40cvuvn.lambda-url.us-east-1.on.aws/';

    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get(URL);
            setWords(res.data);
        };
        fetchData();
    }, []);

    return (
        <WordContext.Provider value = {{ words, setWords, selected,
        setSelected, correct, setCorrect, guesses, setGuesses }}>
            { children }
        </WordContext.Provider>
    )
};