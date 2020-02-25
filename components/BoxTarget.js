import { Box } from '@chakra-ui/core';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/items';
import { useContext } from 'react';
import { CardContext } from '../pages/tasks';

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
			boxShadow='sm'
			bg={isOver ? 'green.500' : 'green.200'}
			minH='200px'
			textAlign='center'
			w='100%'
			rounded='md'
			color='white'>
			{props.children}
		</Box>
	);
};

export default BoxTarget;
