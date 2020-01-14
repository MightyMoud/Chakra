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
			p={2}
			boxShadow='lg'
			bg={bgColor[colorMode]}
			rounded={8}
			justify='center'
			align='center'
			m={2}
			h='550px'>
			<Flex justify='center' align='center' h='120px'>
				<Image w='80px' src='/security.png' />
			</Flex>
			<Text>Sign up or login to your account.</Text>
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

			<Flex justify='center' align='center'>
				<IconButton
					onClick={toggleColorMode}
					icon={colorMode === 'light' ? 'moon' : 'sun'}>
					Change Color Mode
				</IconButton>
			</Flex>
		</Flex>
	);
};

export default Form;
