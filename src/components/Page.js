import { Heading, VStack } from '@chakra-ui/react';
import WordGrid from './WordGrid';
import GuessButton from './GuessButton';
import GuessesRemaining from './GuessesRemaining';

export default function Page() {
    return (
        <VStack align = 'center'>
            <Heading>ConnectUs</Heading>
            <Heading as = 'h5'>Find the common thread.</Heading>
            <WordGrid />
            <GuessesRemaining />
            <GuessButton />
        </VStack>
    );
}