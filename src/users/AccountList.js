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


const AccountFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
    </Filter>
);

const useDatagridStyles = makeStyles({
    total: { fontWeight: 'bold' },
});


class TabbedDatagrid extends React.Component {

    render() {
        const { isXSmall, classes, filterValues, ...props } = this.props;

        return (
            <Fragment>
                <Datagrid {...props}>
                    <TextField source="rrName" />
                    <TextField source="rrType" />
                    <TextField source="rrTtl" />
                    <TextField source="rrValue" />
                    <DateField source="createTime" showTime />
                    <TextField source="des" />
                    <BooleanField source="enable" />
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

const AccountList = ({ classes, ...props }) => (
    <List
        {...props}
        pagination={false}
        exporter={false}
    >
        <StyledTabbedDatagrid />
    </List>
);

export default AccountList;
