import React, { Fragment } from 'react';
import {
    AutocompleteInput,
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    EditButton,
    Filter,
    List,
    NullableBooleanInput,
    NumberField,
    ReferenceInput,
    SearchInput,
    TextField,
    TextInput,
} from 'react-admin';
import {
    makeStyles,
    useMediaQuery,
    Divider,
    Tabs,
    Tab,
} from '@material-ui/core';
import { Link } from 'react-router-dom';


const SwitchGroupFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
    </Filter>
);

const useDatagridStyles = makeStyles({
    total: { fontWeight: 'bold' },
});

const SwitchGroupField = ({ source, record = {} }) => {
    return (
        <Link to={`/zones/${record.id}/rrs`}>
            {record[source]}
        </Link>
    );
};

class TabbedDatagrid extends React.Component {

    render() {
        const { isXSmall, classes, filterValues, ...props } = this.props;

        return (
            <Fragment>
                <Datagrid {...props}>
                    <SwitchGroupField source="zoneName" />
                    <TextField source="viewName" />
                    <TextField source="defaultTtl" />
                    <DateField source="createTime" showTime />
                    <EditButton />
                </Datagrid>
            </Fragment>
        );
    }
}

const StyledTabbedDatagrid = props => {
    const classes = useDatagridStyles();
    return <TabbedDatagrid classes={classes} {...props} />;
};

const SwitchGroupList = ({ classes, ...props }) => (
    <List
        {...props}
        pagination={false}
        exporter={false}
    >
        <StyledTabbedDatagrid />
    </List>
);

export default SwitchGroupList;
