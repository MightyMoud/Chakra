/** @jsx jsx */
import {
	Text,
	Flex,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Image,
	useColorMode,
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
			boxShadow='sm'
			w='350px'
			bg={bgColor[colorMode]}
			rounded='lg'
			justify='center'
			align='center'
			m={2}>
			<Flex justify='center' align='center' h='120px'>
				<Image w='80px' src='./security.png' alt='Logo' />
			</Flex>
			<Text fontSize='lg'>Sign up or login to your account.</Text>
			<Tabs isFitted variant='enclosed-colored' m={2} w='100%'>
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
