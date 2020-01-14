import {
	Box,
	Image,
	Badge,
	Text,
	Icon,
	Flex,
	Button,
	useColorMode,
	Divider,
} from '@chakra-ui/core';

const List = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = { light: 'gray.100', dark: 'gray.700' };
	const textColor = { light: 'gray.500', dark: 'gray.100' };
	return (
		<Flex
			maxW='1000px'
			w={['90vw', '90vw', '90vw', '70vw']}
			direction={['column', 'column', 'row', 'row']}
			justify='center'
			bg={bgColor[colorMode]}
			boxShadow='md'
			rounded='lg'
			p='4'>
			<Flex align='center' wrap='nowrap'>
				<Image src='/icon.png' />
				<Box mx='4'>
					<Text as='h2' fontSize='xl' fontWeight='bold' mb='2'>
						Usability
					</Text>
					<Text as='h3' fontWeight='light' fontSize='lg'>
						Sometimes the simples things are the hardest to find. So we created
						a new line for everday life.
					</Text>
				</Box>
			</Flex>
			<Divider orientation='vertical' m='4' />
			<Flex align='center' wrap='nowrap'>
				<Image src='/icon2.png' />
				<Box m='4'>
					<Text as='h2' fontSize='xl' fontWeight='bold' mb='2'>
						Parralax Effect
					</Text>
					<Text as='h3' fontWeight='light' fontSize='lg'>
						Sometimes the simples things are the hardest to find. So we created
						a new line for everday life.
					</Text>
				</Box>
			</Flex>
			<Divider orientation='vertical' m='4' />
			<Flex align='center' wrap='nowrap'>
				<Image src='/icon3.png' />
				<Box mx='4'>
					<Text as='h2' fontSize='xl' fontWeight='bold' mb='2'>
						Unlimited Colors
					</Text>
					<Text as='h3' fontWeight='light' fontSize='lg'>
						Sometimes the simples things are the hardest to find. So we created
						a new line for everday life.
					</Text>
				</Box>
			</Flex>
		</Flex>
	);
};

export default List;
