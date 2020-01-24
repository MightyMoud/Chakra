import {
	Box,
	Image,
	Badge,
	Text,
	Icon,
	Flex,
	Button,
	useColorMode,
} from '@chakra-ui/core';

const Card = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = { light: 'gray.200', dark: 'gray.700' };
	const textColor = { light: 'gray.500', dark: 'gray.100' };

	return (
		<Box
			w='400px'
			bg={bgColor[colorMode]}
			rounded='20px'
			border='1px solid'
			boxShadow='sm'
			borderColor='gray.300'
			overflow='hidden'>
			<Image src='./Thumb.png' alt='course cover' transform='scale(1.1)' />
			<Box p='5'>
				<Box d='flex' alignItems='baseline'>
					<Badge rounded='full' px='2' variant='solid' variantColor='teal'>
						NEW!
					</Badge>
					<Badge
						rounded='full'
						px='2'
						mx='2'
						variant='solid'
						variantColor='teal'>
						React
					</Badge>
					<Text
						color={textColor[colorMode]}
						fontSize='sm'
						textTransform='uppercase'
						letterSpacing='wide'>
						2 Hours · 12 Lectures
					</Text>
				</Box>
				<Text
					as='h2'
					my='2'
					fontWeight='semibold'
					fontSize='xl'
					lineHeight='tight'>
					Introduction to Chakra-UI
				</Text>
				<Text as='h4' isTruncated fontWeight='light' fontSize='md' mb='2'>
					Dolor nulla adipisicing fugiat aute et velit ea ad <br />
					et deserunt sint. Voluptate pariatur fugiat enim <br /> nostrud
					proident. Commodo dolor et ullamco nisi fugiat aliqua.
				</Text>
				<Flex
					alignItems='baseline'
					justify='space-between'
					color={textColor[colorMode]}>
					<Box as='h3' fontSize='lg' fontWeight='semibold'>
						$20
					</Box>
					<Box d='flex'>
						<Box as='span'>
							{Array(4)
								.fill('')
								.map((_, i) => (
									<Icon name='star' key={i} mr='1' color='teal.500' />
								))}
							<Icon name='star' mr='1' mr='2' />
						</Box>
						<Text as='h3' fontSize='lg' fontWeight='semibold'>
							34 Reviews
						</Text>
					</Box>
				</Flex>
				<Box textAlign='center' mt='6'>
					<Button
						variant='solid'
						variantColor='teal'
						size='lg'
						boxShadow='md'
						_active={{ boxShadow: 'lg', bgColor: 'teal.500' }}>
						Sign up now!
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Card;
