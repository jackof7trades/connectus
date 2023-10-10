import { useContext } from 'react';
import { Box } from '@chakra-ui/react';

import WordContext from '../WordContext';

export default function GuessesRemaining() {
    const { guesses } = useContext(WordContext);
    const gArr = [...Array(guesses)];
    return (
        <Box display = 'flex'>
            {gArr.map((_, i) => (
                <Box
                key = {i}
                bg = 'gray.500'
                w = '10px'
                h = '10px'
                m = {1}
                rounded = 'full'
                />
            ))}
        </Box>
    );
};