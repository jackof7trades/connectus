import { useContext, useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';

import WordContext from '../WordContext';

export default function WordButton(props) {
    const { selected, setSelected } = useContext(WordContext);
    const [bg, setBg] = useState('gray.500');
    const [fg, setFg] = useState('white');

    useEffect(() => {
        if(selected.includes(props.text)) {
            setBg('gray.100');
            setFg('black');
        } else {
            if(selected.length < 4) {
                setBg('gray.500');
                setFg('white');
            }
        }
    }, [selected, props.text]);

    return (
        <Button
        w = '100%'
        bg = {bg}
        color = {fg}
        rounded = 'lg'
        size = 'lg'
        onClick = {() => {
            let newSelected;
            if(selected.includes(props.text)) {
                newSelected = selected.filter(word => word !== props.text);
            } else if(selected.length === 4) {
                newSelected = selected;
            } else {
                newSelected = [...selected, props.text];
            }
            setSelected(newSelected);
        }}
        >
            {props.text}
        </Button>
    )
}
