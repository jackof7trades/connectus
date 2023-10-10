import { Box } from '@chakra-ui/react';

export default function CorrectAnswer(props) {
    return (
        <Box
        bg = 'green.500'
        color = 'white'
        rounded = 'lg'
        fontWeight = 'bold'
        width = '100%'
        py = {2}
        textAlign = 'center'
        >
            {props.text}
        </Box>
    );
}