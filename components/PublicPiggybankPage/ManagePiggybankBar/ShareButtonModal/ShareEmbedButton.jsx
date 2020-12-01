import { useState } from 'react';
import PropTypes from 'prop-types';
import { ViewOffIcon, ViewIcon, CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text, Image, useClipboard } from '@chakra-ui/react';
import { SourceCodeIcon } from "../../../Icons/CustomIcons";
import styles from './HtmlEmbedButton.module.scss';

const fullBaseUrl = 'https://coindrop.to/';

const ShareEmbedButton = (props) => {
    const { fullPublicUrl } = props;
    const imageButtonHtml = `<a href="${fullPublicUrl}" target="_blank"><img src="${fullBaseUrl}embed-button.png" style="border-radius: 10px;" alt="Coindrop.to me" style="height: 57px !important;width: 229px !important;" ></a>`;
    const { onCopy: onCopyImage, hasCopied: hasCopiedImage } = useClipboard(imageButtonHtml);
    const [isDisplayed, setIsDisplayed] = useState(false);
    return (
        <Box>
            <Flex>
                <Box>
                    <Heading
                        as="h2"
                        size="lg"
                    >
                        Button
                    </Heading>
                    <Text>Embed on a website</Text>
                </Box>
                <Flex align="center" flexGrow={1} justify="center" mt={2} wrap="wrap">
                    {isDisplayed ? (
                        <Button
                            leftIcon={<ViewOffIcon />}
                            onClick={() => setIsDisplayed(false)}
                            variant="outline"
                            colorScheme="green"
                        >
                            Hide
                        </Button>
                    ) : (
                        <Button
                            leftIcon={<ViewIcon />}
                            onClick={() => setIsDisplayed(true)}
                            colorScheme="green"
                        >
                            View
                        </Button>
                    )}
                </Flex>
            </Flex>
            {isDisplayed && (
                <>
                <Box textAlign="center" my={3}>
                    <Image className={styles['coindrop-html-embed-button']} display="block" mx="auto" src="/embed-button.png" />
                </Box>
                <Box textAlign="center">
                    <Button
                        leftIcon={hasCopiedImage ? <CheckIcon /> : <SourceCodeIcon />} // TODO: Fix icon
                        colorScheme="green"
                        mb={1}
                        onClick={onCopyImage}
                    >
                        {hasCopiedImage ? 'Copied' : 'Copy HTML Code'}
                    </Button>
                </Box>
                </>
            )}
        </Box>
    );
};

ShareEmbedButton.propTypes = {
    fullPublicUrl: PropTypes.string.isRequired,
};

ShareEmbedButton.defaultProps = {

};

export default ShareEmbedButton;
