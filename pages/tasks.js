import { Box, Grid, Stack, Text } from '@chakra-ui/core';
import { useState, createContext } from 'react';
import TaskCard from '../components/TaskCard';
import BoxTarget from '../components/BoxTarget';

export const CardContext = createContext({
	markAsDone: null,
});

const Tasks = () => {
	const [taskList, setTaskList] = useState([
		{
			_id: (Math.random() * 100).toFixed(0),
			status: 'wip',
			category: 'Chores',
			title: 'Buy dog food',
			details: 'Gotta make my woof woof happy 🐕',
		},
		{
			_id: (Math.random() * 100).toFixed(0),
			status: 'wip',
			category: 'Shopping',
			title: 'Buy Milk',
			details: 'Remember, remember the lactose free aisle... 🥛',
		},
		{
			_id: (Math.random() * 100).toFixed(0),
			status: 'wip',
			category: 'Chores',
			title: 'Renew Gym Membership',
			details: 'Gotta keep the muscles happy! 💪🏻',
		},
	]);

	const markAsDone = _id => {
		const task = taskList.filter((task, i) => task._id === _id);
		task[0].status = 'done';
		setTaskList(taskList.filter((task, i) => task._id !== _id).concat(task[0]));
	};

	return (
		<CardContext.Provider value={{ markAsDone }}>
			<Grid
				gap={6}
				templateColumns='1fr 3fr'
				bg='gray.500'
				w='100vw'
				h='93vh'
				p={3}>
				<Box bg='gray.200' rounded='md' p={3} boxShadow='md'>
					<Stack spacing={3}>
						<Text fontSize='2xl' textAlign='center'>
							WIP Tasks
						</Text>
						{taskList
							.filter((task, i) => task.status === 'wip')
							.map((task, i) => (
								<TaskCard
									key={task._id.toString()}
									_id={task._id}
									category={task.category}
									title={task.title}
									details={task.details}
								/>
							))}
					</Stack>
				</Box>
				<Box bg='blue.200' rounded='md' p={3} boxShadow='md'>
					<Stack>
						<Text fontSize='2xl' textAlign='center'>
							Done Tasks
						</Text>
						<BoxTarget>
							{taskList
								.filter((task, i) => task.status === 'done')
								.map((task, i) => (
									<TaskCard
										key={task._id.toString()}
										_id={task._id}
										category={task.category}
										title={task.title}
										details={task.details}
									/>
								))}
						</BoxTarget>
					</Stack>
				</Box>
			</Grid>
		</CardContext.Provider>
	);
};

export default Tasks;
