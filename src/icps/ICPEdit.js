import React from 'react';
import {
    BooleanInput,
    NumberInput,
    Edit,
    TextInput,
    SimpleForm,
    useRedirect,
    useTranslate,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const ICPTitle = ({ record }) => {
    const translate = useTranslate();
    return (
        <span>
            {translate('resources.zones/:zone_id/rrs.title', {
                name: record.rrName,
            })}
        </span>
    );
};

const useEditStyles = makeStyles({
    root: { alignItems: 'flex-start' },
});

const ICPEdit = props => {
    const classes = useEditStyles();
    const redirect = useRedirect();

    const success = () => {
        redirect(props.basePath);
    };

    return (
        <Edit
            title={<ICPTitle />}
            classes={classes}
            {...props}
            onSuccess={success}
        >
            <SimpleForm>
                <TextInput source="rrName" disabled />
                <NumberInput source="rrTtl" min={1} max={2 ** 31 -1} step={1} />
                <TextInput source="rrType" disabled />
                <TextInput source="rrValue" />
                <TextInput source="des" />
                <BooleanInput source="enable" />
            </SimpleForm>
        </Edit>
    );
};

export default ICPEdit;
