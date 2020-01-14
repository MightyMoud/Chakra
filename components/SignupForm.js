import {
	InputGroup,
	InputLeftAddon,
	Icon,
	Input,
	FormControl,
	FormHelperText,
	Stack,
	Button,
	Text,
} from '@chakra-ui/core';
const SingupForm = () => {
	return (
		<FormControl textAlign='center'>
			<Stack spacing={3} m={3}>
				<InputGroup>
					<InputLeftAddon children={<Icon name='info' color='gray.500' />} />
					<Input type='name' placeholder='Name' />
				</InputGroup>
				<InputGroup>
					<InputLeftAddon children={<Icon name='email' color='gray.500' />} />
					<Input type='email' placeholder='Email' />
				</InputGroup>
				<InputGroup>
					<InputLeftAddon children={<Icon name='lock' color='gray.500' />} />
					<Input type='password' placeholder='Password' />
				</InputGroup>
				<Button>Submit</Button>
				<FormHelperText id='email-helper-text' textAlign='center'>
					We'll never share your email.
					<br />
					We promise! 🤞🏼
				</FormHelperText>
			</Stack>
		</FormControl>
	);
};

export default SingupForm;
