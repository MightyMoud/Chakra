import {
	Flex,
	Stack,
	PseudoBox,
	useColorMode,
	IconButton,
	Box,
} from '@chakra-ui/core';
import Link from 'next/link';

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = { light: 'gray.300', dark: 'gray.600' };
	const textColor = { light: 'black', dark: 'gray.100' };
	return (
		<Flex
			w='100vw'
			bg={bgColor[colorMode]}
			align='center'
			color={textColor[colorMode]}
			justify='center'
			fontSize={['md', 'lg', 'xl', '2xl']}
			h='7vh'
			p={2}>
			<Stack
				flexBasis='80%'
				spacing={8}
				color={textColor[colorMode]}
				justify='center'
				isInline>
				<PseudoBox
					position='relative'
					_hover={{ textDecor: 'underline', bottom: '5px' }}>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</PseudoBox>
				<PseudoBox
					position='relative'
					_hover={{ textDecor: 'underline', bottom: '5px' }}>
					<Link href='/form'>
						<a>Form</a>
					</Link>
				</PseudoBox>
				<PseudoBox
					position='relative'
					_hover={{ textDecor: 'underline', bottom: '5px' }}>
					<Link href='/card'>
						<a>Card</a>
					</Link>
				</PseudoBox>
				<PseudoBox
					position='relative'
					_hover={{ textDecor: 'underline', bottom: '5px' }}>
					<Link href='/list'>
						<a>List</a>
					</Link>
				</PseudoBox>
			</Stack>
			<Box>
				<IconButton
					rounded='full'
					onClick={toggleColorMode}
					icon={colorMode === 'light' ? 'moon' : 'sun'}>
					Change Color Mode
				</IconButton>
			</Box>
		</Flex>
	);
};

export default Navbar;
