import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { useTranslate, MenuItemLink } from 'react-admin';

import zones from '../zones';
import users from '../users';
import SubMenu from './SubMenu';

const Menu = ({ onMenuClick, dense, logout }) => {
    const [state, setState] = useState({
        asset: true,
        system: true,
    });
    const translate = useTranslate();
    const isXsmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    useSelector(state => state.theme); // force rerender on theme change

    const handleToggle = menu => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div>
            {' '}
            <SubMenu
                handleToggle={() => handleToggle('asset')}
                isOpen={state.asset}
                sidebarIsOpen={open}
                name="pos.menu.assetsManagement"
                icon={<zones.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/assets`}
                    primaryText={translate(`resources.assets.name`)}
                    leftIcon={<zones.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>

            <SubMenu
                handleToggle={() => handleToggle('system')}
                isOpen={state.system}
                sidebarIsOpen={open}
                name="pos.menu.system"
                icon={<users.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/users`}
                    primaryText={translate(`resources.users.name`)}
                    leftIcon={<users.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/datacenters`}
                    primaryText={translate(`resources.datacenters.name`)}
                    leftIcon={<users.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/departments`}
                    primaryText={translate(`resources.departments.name`)}
                    leftIcon={<users.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/deviceclasses`}
                    primaryText={translate(`resources.deviceclasses.name`)}
                    leftIcon={<users.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/devicemodels`}
                    primaryText={translate(`resources.devicemodels.name`)}
                    leftIcon={<users.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            {isXsmall && logout}
        </div>
    );
};

Menu.propTypes = {
    onMenuClick: PropTypes.func,
    logout: PropTypes.object,
};

export default Menu;
