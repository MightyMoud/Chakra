import { Box, Stack, PseudoBox } from '@chakra-ui/core';
import Link from 'next/link';

const Navbar = () => {
	return (
		<Box
			w='100vw'
			bg='gray.300'
			textAlign='center'
			fontSize={['md', 'lg', 'xl', '2xl']}
			p={2}>
			<Stack
				spacing={8}
				align='center'
				justify='center'
				color='gray.700'
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
		</Box>
	);
};

export default Navbar;
