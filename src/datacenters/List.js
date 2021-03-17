import React, { Fragment } from 'react';
import {
    Datagrid,
    DateField,
    EditButton,
    List,
    TextField,
} from 'react-admin';
import {
    makeStyles,
} from '@material-ui/core';

const useDatagridStyles = makeStyles({
    total: { fontWeight: 'bold' },
});


class TabbedDatagrid extends React.Component {

    render() {
        const { isXSmall, classes, filterValues, ...props } = this.props;

        return (
            <Fragment>
                <Datagrid {...props}>
                    <TextField source="name" />
                    <TextField source="addess" />
                    <TextField source="contacts" />
                    <TextField source="phone" />
                    <TextField source="networks" />
                    <TextField source="isp" />
                    <DateField source="updateTime" showTime />
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

const UserList = ({ classes, ...props }) => (
    <List
        {...props}
        pagination={false}
        exporter={false}
    >
        <StyledTabbedDatagrid />
    </List>
);

export default UserList;
