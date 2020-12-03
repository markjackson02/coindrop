import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { Link, Box, Flex, Button, Menu, MenuButton, MenuList, MenuItem, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon, QuestionIcon } from "@chakra-ui/icons";
import { mutate } from 'swr';
import cookies from 'js-cookie';
import { LogoutIcon, HamburgerMenuIcon, GithubIcon } from '../Icons/CustomIcons';
import Logo from '../Logo/Logo';
import { useUser } from '../../utils/auth/useUser';
import useDidMountEffect from '../../utils/hooks/useDidMountEffect';
import UserOwnedPiggybanks from './UserOwnedPiggybanks/UserOwnedPiggybanks';
import useCreatePiggybank from '../../utils/hooks/useCreatePiggybank';
import { githubReadmeHelpUrl } from '../../src/settings';
import Footer from '../Footer/Footer';

const Dashboard = () => {
    const router = useRouter();
    const { user, logout } = useUser();
    const { colorMode, toggleColorMode } = useColorMode();
    const [isCreateTriggered, setIsCreateTriggered] = useState(false);
    const [candidatePiggybankPath, setCandidatePiggybankPath] = useState();
    const { submitStatus } = useCreatePiggybank(candidatePiggybankPath, setCandidatePiggybankPath, user, isCreateTriggered, setIsCreateTriggered);
    const pendingLoginCreatePiggybankPath = cookies.get('pendingLoginCreatePiggybankPath');
    useDidMountEffect(() => {
        if (!user) {
            router.push('/');
        }
    });
    useEffect(() => {
        if (pendingLoginCreatePiggybankPath) {
            setCandidatePiggybankPath(pendingLoginCreatePiggybankPath);
            setIsCreateTriggered(true);
        }
    }, []);
    useEffect(() => {
        if (submitStatus === 'success' && user) {
            mutate(user.id);
        }
    }, [submitStatus]);
    if (!user) return null;
    return (
        <>
        <NextSeo
            title="Dashboard | Coindrop"
        />
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
                wrap="wrap"
            >
                <Logo />
                <Flex>
                    <Menu placement="bottom-end">
                        <MenuButton as={Button} variant="ghost">
                            <HamburgerMenuIcon />
                        </MenuButton>
                        <MenuList>
                            <MenuItem
                                onClick={toggleColorMode}
                            >
                                <Flex
                                    align="center"
                                >
                                    {colorMode === 'dark' ? <SunIcon mr={2} /> : <MoonIcon mr={2} />}
                                    {colorMode === 'dark' ? 'Light mode' : 'Dark mode'}
                                </Flex>
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    logout();
                                }}
                            >
                                <Flex
                                    align="center"
                                >
                                    <LogoutIcon mr={2} />
                                    Log out
                                </Flex>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
            {user?.id && (
                <UserOwnedPiggybanks
                    uid={user.id}
                />
            )}
            <Box mt={10}>
                <Footer />
            </Box>
        </Box>
        </>
    );
};

Dashboard.propTypes = {

};

Dashboard.defaultProps = {

};

export default Dashboard;
