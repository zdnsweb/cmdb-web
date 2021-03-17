import React from 'react';
import {
    Edit,
    TextInput,
    PasswordInput,
    SimpleForm,
    useRedirect,
    useTranslate,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const UserTitle = ({ record }) => {
    const translate = useTranslate();
    return (
        <span>
            {translate('resources.users.title', {
                name: record.username,
            })}
        </span>
    );
};

const useEditStyles = makeStyles({
    root: { alignItems: 'flex-start' },
});

const UserEdit = props => {
    const classes = useEditStyles();
    const redirect = useRedirect();

    const success = () => {
        redirect(props.basePath);
    };

    return (
        <Edit
            title={<UserTitle />}
            classes={classes}
            {...props}
            onSuccess={success}
        >
            <SimpleForm>
                <TextInput autoComplete={false} source="username" />
                <PasswordInput autoComplete={false} source="password" />
            </SimpleForm>
        </Edit>
    );
};

export default UserEdit;
