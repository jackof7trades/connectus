import { useContext, useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';

import WordContext from '../WordContext';

export default function GuessButton() {
    const { words, setWords, selected, setSelected,
        setCorrect, guesses, setGuesses } = useContext(WordContext);
    const [buttonVisible, setButtonVisible] = useState(true);
    const toast = useToast();

    const showError = (message) => {
        toast.closeAll();
        toast({
            title: message,
            status: 'error',
            isClosable: true,
            position: 'top'
        });
    };    

    const handleGuess = () => {
        if(selected.length !== 4) {
            showError('Make sure you have 4 selected.');
            return;
        }
        const categories = selected.map(word => words[word]);
        const uniqueCategories = [...new Set(categories)];
        if(uniqueCategories.length > 1) {
            const newGuesses = guesses - 1;
            if(newGuesses === 0) {
                setButtonVisible(false);
                showError('Better luck next time!');
            } else {
                showError('Please try again.');
            }
            setGuesses(newGuesses);
            setSelected([]);
            return;
        }
        if(uniqueCategories[0] === words[selected[0]]) {
            const wordKeys = Object.keys(words);
            const newWords = {};
            wordKeys.forEach(word => {
                if(words[word] !== uniqueCategories[0]) {
                    newWords[word] = words[word];
                }
            });
            setWords(newWords);
            setSelected([]);
            setCorrect(prev => [...prev, uniqueCategories[0]]);
            if(Object.keys(newWords).length === 0) {
                setButtonVisible(false);
                toast.closeAll();
                toast({
                    title: 'Wahoo!',
                    status: 'success',
                    isClosable: true,
                    position: 'top'
                });
            }
        }
    };

    return (
        <>
            { buttonVisible &&
                <Button
                bg = 'blue.500'
                color = 'white'
                rounded = 'lg'
                size = 'lg'
                onClick = {() => handleGuess()}
                >
                    Guess
                </Button>
            }
        </>
    );
};