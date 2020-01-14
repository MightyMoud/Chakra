/** @jsx jsx */
import {
	Box,
	Text,
	Flex,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Image,
	useColorMode,
	IconButton,
} from '@chakra-ui/core';
import { jsx } from '@emotion/core';
import SingupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

const Form = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = { light: 'gray.200', dark: 'gray.700' };
	return (
		<Flex
			direction='column'
			p={3}
			boxShadow='lg'
			bg={bgColor[colorMode]}
			rounded='lg'
			justify='center'
			align='center'
			m={2}
			h='510px'>
			<Flex justify='center' align='center' h='120px'>
				<Image w='80px' src='./security.png' alt='Logo' />
			</Flex>
			<Text fontSize='xl'>Sign up or login to your account.</Text>
			<Tabs isFitted variant='enclosed-colored' m={2}>
				<TabList>
					<Tab>Sign up</Tab>
					<Tab>Login</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<SingupForm />
					</TabPanel>
					<TabPanel>
						<LoginForm />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
};

export default Form;
