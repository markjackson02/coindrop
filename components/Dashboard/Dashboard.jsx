import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { useRouter } from 'next/router'
import { Box, Flex, Button, useTheme, Heading, Text, Link, Input, InputGroup, InputLeftAddon, Icon, Tag, TagIcon, TagLabel, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/core'
import Logo from '../Logo/Logo';
import { useUser } from '../../utils/auth/useUser'

const Dashboard = (props) => {
    const theme = useTheme();
    const router = useRouter();
    const { user, logout } = useUser();
    console.log('dashboard user', user)
    return (
        <Box
            maxW="960px"
            mx="auto"
            px={4}
            mb={6}
        >
            <Flex
                id="navbar"
                align="center"
                justify="space-between"
            >
                <Logo />
                <Flex>
                    <Menu>
                        <MenuButton as={Button}>
                            <Icon name="hamburgerMenu" />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>About</MenuItem>
                            <MenuItem>Github</MenuItem>
                            <MenuItem
                                onClick={() => {
                                    logout();
                                    router.push('/');
                                }}
                            >
                                Log out
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
            This is the user dashboard for {user && user.email}
        </Box>
    );
};

Dashboard.propTypes = {

};

Dashboard.defaultProps = {

};

export default Dashboard;
