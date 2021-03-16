import React from 'react';
import {
    NumberInput,
    Edit,
    TextInput,
    SimpleForm,
    useRedirect,
    useTranslate,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const ZoneTitle = ({ record }) => {
    const translate = useTranslate();
    return (
        <span>
            {translate('resources.zones.title', {
                name: record.zoneName,
            })}
        </span>
    );
};

const useEditStyles = makeStyles({
    root: { alignItems: 'flex-start' },
});

const ZoneEdit = props => {
    const classes = useEditStyles();
    const redirect = useRedirect();

    const success = () => {
        redirect(props.basePath);
    };

    return (
        <Edit
            title={<ZoneTitle />}
            classes={classes}
            {...props}
            onSuccess={success}
        >
            <SimpleForm>
                <TextInput source="zoneName" disabled />
                <NumberInput source="defaultTtl" min={1} max={2 ** 31 -1} step={1} />
                <TextInput source="viewName" disabled />
            </SimpleForm>
        </Edit>
    );
};

export default ZoneEdit;
