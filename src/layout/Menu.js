import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelIcon from '@material-ui/icons/Label';
import { useMediaQuery } from '@material-ui/core';
import { useTranslate, DashboardMenuItem, MenuItemLink } from 'react-admin';

import zones from '../zones';
import switchGroups from '../switch_groups';
import tickets from '../tickets';
import accounts from '../accounts';
import domains from '../domains';
import icps from '../icps';
import SubMenu from './SubMenu';

const Menu = ({ onMenuClick, dense, logout }) => {
    const [state, setState] = useState({
        domain: true,
        registration: true,
        icp: true,
        system: true,
        ticket: true,
        switch: true,
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
                handleToggle={() => handleToggle('domain')}
                isOpen={state.domain}
                sidebarIsOpen={open}
                name="pos.menu.domain"
                icon={<zones.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/zones`}
                    primaryText={translate(`resources.zones.name`)}
                    leftIcon={<zones.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('registration')}
                isOpen={state.registration}
                sidebarIsOpen={open}
                name="pos.menu.registration"
                icon={<domains.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/domains`}
                    primaryText={translate(`resources.domains.name`)}
                    leftIcon={<domains.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('icp')}
                isOpen={state.icp}
                sidebarIsOpen={open}
                name="pos.menu.icp"
                icon={<icps.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/icps`}
                    primaryText={translate(`resources.icps.name`)}
                    leftIcon={<icps.icon />}
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
                icon={<accounts.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/accounts`}
                    primaryText={translate(`resources.accounts.name`)}
                    leftIcon={<accounts.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('ticket')}
                isOpen={state.ticket}
                sidebarIsOpen={open}
                name="pos.menu.ticket"
                icon={<tickets.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/tickets`}
                    primaryText={translate(`resources.tickets.name`)}
                    leftIcon={<tickets.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('switch')}
                isOpen={state.switch}
                sidebarIsOpen={open}
                name="pos.menu.switch"
                icon={<switchGroups.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/switch_groups`}
                    primaryText={translate(`resources.switch_groups.name`)}
                    leftIcon={<switchGroups.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            {isXsmall && (
                <MenuItemLink
                    to="/configuration"
                    primaryText={translate('pos.configuration')}
                    leftIcon={<SettingsIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            )}
            {isXsmall && logout}
        </div>
    );
};

Menu.propTypes = {
    onMenuClick: PropTypes.func,
    logout: PropTypes.object,
};

export default Menu;
