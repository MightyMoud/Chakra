import {
	Box,
	Image,
	Badge,
	Text,
	Icon,
	Grid,
	Stack,
	Flex,
	Button,
	useColorMode,
	Divider,
	PseudoBox,
	Spinner,
} from '@chakra-ui/core';
import { createContext, useContext, useEffect, useState } from 'react';
import DragCard from '../components/TaskCard';
import BoxTarget from '../components/BoxTarget';

export const CardContext = createContext({
	WIP: null,
	setWIP: null,
});

const List = () => {
	const [WIP, setWIP] = useState(true);

	return (
		<CardContext.Provider value={{ WIP, setWIP }}>
			<Grid
				gap={6}
				templateColumns='1fr 3fr'
				bg='gray.500'
				w='80vw'
				h='93vh'
				p={3}>
				<Box bg='gray.200' rounded='md' p={3} boxShadow='md'>
					<Stack spacing={3}>{WIP && <DragCard />}</Stack>
				</Box>
				<Box bg='blue.200' rounded='md' p={3} boxShadow='md'>
					<Stack>
						<BoxTarget>{!WIP && <DragCard />}</BoxTarget>
					</Stack>
				</Box>
			</Grid>
		</CardContext.Provider>
	);
};

export default List;
