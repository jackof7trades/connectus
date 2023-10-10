import { useContext, useMemo } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import WordContext from '../WordContext';

import WordButton from './WordButton';
import CorrectAnswer from './CorrectAnswer';

import shuffle from '../util/shuffle';

export default function WordGrid() {
    const { words, correct } = useContext(WordContext);
    const shuffled = useMemo(() => {
        return shuffle(Object.keys(words))
    }, [words]);
    return (
        <Grid templateColumns = 'repeat(4, 25%)' width = '50vw' mx = 'auto' gap = {4}>
            {correct.map(ans => (
                <GridItem key = {ans} colSpan = {4}><CorrectAnswer text = {ans} /></GridItem>
            ))}
            {shuffled.map(word => (
                <GridItem key = {word}><WordButton text = {word} /></GridItem>
            ))}
        </Grid>
    );
};