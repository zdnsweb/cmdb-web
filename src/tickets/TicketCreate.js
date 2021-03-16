import React from 'react';
import {
    BooleanInput,
    Create,
    NumberInput,
    SelectInput,
    SimpleForm,
    TextInput,
    useRedirect,
    useTranslate,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const TicketTitle = ({ record }) => {
    const translate = useTranslate();
    return (
        <span>
            {translate('resources.zones/:zone_id/rrs.title', {
                name: '',
            })}
        </span>
    );
};

const useEditStyles = makeStyles({
    root: { alignItems: 'flex-start' },
});

const TicketCreate = props => {
    const classes = useEditStyles();
    const [rrTypes, setRrTypes] = React.useState([]);
    React.useEffect(() => {
        fetch('/apis/types').then((resp) => resp.json()).then(({ data = []}) => {
            const rrTypes = data.map((v) => ({ id: v.typeName, name: v.typeName }));
            setRrTypes(rrTypes);
        });
    }, []);
    
    const redirect = useRedirect();

    const success = () => {
        redirect(props.basePath);
    };

    return (
        <Create
            title={<TicketTitle />}
            classes={classes}
            {...props}
            onSuccess={success}
        >
            <SimpleForm>
                <TextInput source="rrName" />
                <NumberInput source="rrTtl" min={1} max={2 ** 31 -1} step={1} />
                <SelectInput
                    source="rrType"
                    choices={rrTypes}
                />
                <TextInput source="rrValue" />
                <TextInput source="des" />
                <BooleanInput source="enable" />
            </SimpleForm>
        </Create>
    );
};

export default TicketCreate;
