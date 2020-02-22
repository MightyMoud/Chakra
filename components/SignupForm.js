import {
	InputGroup,
	InputLeftAddon,
	Icon,
	Input,
	FormControl,
	FormHelperText,
	Stack,
	Button,
	Divider,
	InputRightElement,
} from '@chakra-ui/core';
import { useState } from 'react';
const SingupForm = () => {
	return (
		<form action='submit'>
			<Stack spacing={3} m={3}>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftAddon children={<Icon name='info' color='gray.500' />} />
						<Input
							aria-label='First name input field'
							id='fname'
							type='name'
							placeholder='First Name'
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftAddon children={<Icon name='info' color='gray.500' />} />
						<Input
							id='lname'
							type='name'
							placeholder='Last Name'
							aria-label='Last name input field'
						/>
					</InputGroup>
				</FormControl>
				<Divider borderColor='gray.300' />
				<FormControl isRequired>
					<InputGroup>
						<InputLeftAddon children={<Icon name='email' color='gray.500' />} />
						<Input
							id='email'
							type='email'
							placeholder='Email'
							aria-label='Email input field'
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftAddon children={<Icon name='lock' color='gray.500' />} />
						<Input
							id='password'
							type='password'
							placeholder='Password'
							aria-label='Password input field'
						/>
					</InputGroup>
				</FormControl>
				<Button boxShadow='md' _active={{ boxShadow: 'lg' }} type='submit'>
					Sign up!
				</Button>
				<FormHelperText textAlign='center'>
					We'll never share your email.
					<br />
					We promise! 🤞🏼
				</FormHelperText>
			</Stack>
		</form>
	);
};

export default SingupForm;
