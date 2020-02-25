import { Box, Badge, Text, Flex } from '@chakra-ui/core';
import { ItemTypes } from '../utils/items';
import { useDrag } from 'react-dnd';

const TaskCard = props => {
	const [{ isDragging }, drag] = useDrag({
		item: {
			type: ItemTypes.CARD,
			id: props._id,
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	});

	return (
		<Box
			ref={drag}
			my='4'
			p={3}
			bg='gray.500'
			opacity={isDragging ? '0.5' : '1'}
			boxShadow='sm'
			w='100%'
			rounded='md'
			color='white'>
			<Flex justify='space-between' my='2'>
				<Text fontSize='lg' fontWeight='semibold'>
					{props.title}
				</Text>
				<Badge
					variantColor={props.category === 'Chores' ? 'green' : 'red'}
					h='100%'>
					{props.category}
				</Badge>
			</Flex>
			<Text textAlign='center' fontSize='md'>
				{props.details}
			</Text>
		</Box>
	);
};

export default TaskCard;
