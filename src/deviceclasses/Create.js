import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    PasswordInput,
    useRedirect,
    useTranslate,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const UserTitle = ({ record }) => {
    const translate = useTranslate();
    return (
        <span>
            {translate('resources.users.title', {
                name: '',
            })}
        </span>
    );
};

const useEditStyles = makeStyles({
    root: { alignItems: 'flex-start' },
});

const UserCreate = props => {
    const classes = useEditStyles();
    
    const redirect = useRedirect();

    const success = () => {
        redirect(props.basePath);
    };

    return (
        <Create
            title={<UserTitle />}
            classes={classes}
            {...props}
            onSuccess={success}
        >
            <SimpleForm>
                <TextInput autoComplete={false} source="username" />
                <PasswordInput autoComplete={false} source="password" />
            </SimpleForm>
        </Create>
    );
};

export default UserCreate;
