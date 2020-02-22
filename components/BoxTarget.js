import { Box, Stack } from '@chakra-ui/core';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/constants';

import { CardContext } from '../pages/tasks';
import { useContext } from 'react';

const BoxTarget = props => {
	const { markAsDone } = useContext(CardContext);

	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,
		drop: (item, monitor) => markAsDone(item.id),
		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	});

	return (
		<Box
			ref={drop}
			m={2}
			p={3}
			bg={isOver ? 'green.500' : 'green.200'}
			boxShadow='sm'
			textAlign='center'
			w='100%'
			rounded='md'
			color='white'>
			{props.children}
		</Box>
	);
};

export default BoxTarget;
