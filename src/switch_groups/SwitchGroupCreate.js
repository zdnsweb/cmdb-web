import React from 'react';
import {
    NumberInput,
    Create,
    TextInput,
    SelectInput,
    SimpleForm,
    useRedirect,
    useTranslate,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const SwitchGroupTitle = ({ record }) => {
    const translate = useTranslate();
    return (
        <span>
            {translate('resources.zones.title', {
                name: '',
            })}
        </span>
    );
};

const useEditStyles = makeStyles({
    root: { alignItems: 'flex-start' },
});

const SwitchGroupCreate = props => {
    const classes = useEditStyles();
    const [views, setViews] = React.useState([]);
    React.useEffect(() => {
        fetch('/apis/views').then((resp) => resp.json()).then(({ data = []}) => {
            const views = data.map((v) => ({ id: v.viewName, name: v.viewName }));
            setViews(views);
        });
    }, []);
    const redirect = useRedirect();

    const success = () => {
        redirect(props.basePath);
    };

    return (
        <Create
            title={<SwitchGroupTitle />}
            classes={classes}
            {...props}
            onSuccess={success}
        >
            <SimpleForm>
                <TextInput source="zoneName" />
                <NumberInput source="defaultTtl" min={1} max={2 ** 31 -1} step={1} />
                <SelectInput
                    source="viewName"
                    choices={views}
                />
            </SimpleForm>
        </Create>
    );
};

export default SwitchGroupCreate;
