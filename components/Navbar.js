import {
	Flex,
	Stack,
	PseudoBox,
	useColorMode,
	IconButton,
	Box,
	Image,
} from '@chakra-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = { light: 'gray.300', dark: 'gray.600' };
	const textColor = { light: 'black', dark: 'gray.100' };
	const router = useRouter();
	return (
		<Flex
			w='100vw'
			bg={bgColor[colorMode]}
			align='center'
			color={textColor[colorMode]}
			justify='center'
			align='center'
			fontSize={['md', 'lg', 'xl', 'xl']}
			h='7vh'
			boxShadow='md'
			p={2}>
			<Flex w={['100vw', '100vw', '80vw', '80vw']} justify='space-around'>
				<Box>
					<Image h='5vh' src='./logo.svg' alt='Logo of Chakra-ui' />
				</Box>
				<Stack
					spacing={8}
					color={textColor[colorMode]}
					justify='center'
					align='center'
					isInline>
					<PseudoBox
						position='relative'
						opacity={router.pathname !== '/' ? 0.4 : 1}>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</PseudoBox>
					{/* <PseudoBox
						position='relative'
						opacity={router.pathname !== '/form' ? 0.4 : 1}>
						<Link href='/form'>
							<a>Form</a>
						</Link>
					</PseudoBox>
					<PseudoBox
						position='relative'
						opacity={router.pathname !== '/card' ? 0.4 : 1}>
						<Link href='/card'>
							<a>Card</a>
						</Link>
					</PseudoBox>
					<PseudoBox
						position='relative'
						opacity={router.pathname !== '/list' ? 0.4 : 1}>
						<Link href='/list'>
							<a>List</a>
						</Link>
					</PseudoBox>*/}
					<PseudoBox
						position='relative'
						opacity={router.pathname !== '/tasks' ? 0.4 : 1}>
						<Link href='/tasks'>
							<a>Tasks</a>
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
		</Flex>
	);
};

export default Navbar;
