import { Button, Center } from "@chakra-ui/react";
import { bool, func, object, string } from 'prop-types';

function ButtonOpen({ loading, onClick, text, style, ...rest }) {
    return (
        <Center style={style}>
            <Button
                colorScheme="blackAlpha"
                size="sm"
                isLoading={loading}
                onClick={onClick}
                className="animation-heart"
                borderRadius="10px"
                fontWeight="normal"
                backgroundColor={'#FFF'}
                color={'#000'}
                padding={'20px'}
                _hover={{ bgColor: 'hover' }}
                {...rest}
            >
                {text}
            </Button>
        </Center>
    );
}

ButtonOpen.propTypes = {
    loading: bool.isRequired,
    text: string,
    style: object,
    onClick: func.isRequired,
};

ButtonOpen.defaultProps = {
    text: 'Buka',
    style: {},
};

export default ButtonOpen;