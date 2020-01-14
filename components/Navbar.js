import { Flex, Stack, PseudoBox, useColorMode } from '@chakra-ui/core';
import Link from 'next/link';

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = { light: 'gray.300', dark: 'gray.600' };
	const textColor = { light: 'black', dark: 'gray.100' };
	return (
		<Flex
			w='100vw'
			bg={bgColor[colorMode]}
			textAlign='center'
			align='center'
			color={textColor[colorMode]}
			justify='center'
			fontSize={['md', 'lg', 'xl', '2xl']}
			h='7vh'
			p={2}>
			<Stack
				spacing={8}
				align='center'
				justify='center'
				color='gray.700'
				color={textColor[colorMode]}
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
					<Link href='/cards'>
						<a>Cards</a>
					</Link>
				</PseudoBox>
				<PseudoBox
					position='relative'
					_hover={{ textDecor: 'underline', bottom: '5px' }}>
					<Link href='/login'>
						<a>List</a>
					</Link>
				</PseudoBox>
			</Stack>
		</Flex>
	);
};

export default Navbar;
