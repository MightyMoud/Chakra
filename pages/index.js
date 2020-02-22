import { Box, useColorMode } from '@chakra-ui/core';

const index = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<div style={{ textAlign: 'center', fontSize: '1.25rem' }}>
			Let's Start from here!
		</div>
	);
};

export default index;
