import React, { Fragment } from 'react';
import {
    Datagrid,
    DateField,
    EditButton,
    List,
    NumberField,
    TextField,
} from 'react-admin';
import {
    makeStyles,
} from '@material-ui/core';

const useDatagridStyles = makeStyles({
    total: { fontWeight: 'bold' },
});

/**
 * Data struct 
 * 
    dataCenter: "科技网机房"
    dataCenterId: 3
    departMent: "顶级域名"
    departMentId: 3
    deviceClass: "服务器"
    deviceModel: "虚拟机"
    deviceModelId: 7
    id: 3
    idrac: ""
    ip: "203.119.80.88"
    location: ""
    masterId: 5
    masterIp: "202.173.10.1"
    net: "办公"
    note: "备注信息"
    number: ""
    owner: "余春云"
    purpose: "strongswan"
    sn: ""
    state: "在用"
    updateTime: "2021-02-18 16:07:37"
    weight: 0.5
 * 
 */

class TabbedDatagrid extends React.Component {

    render() {
        const { isXSmall, classes, filterValues, ...props } = this.props;

        return (
            <Fragment>
                <Datagrid {...props}>
                    <TextField source="owner" />
                    <TextField source="ip" />
                    <TextField source="departMent" />
                    <TextField source="deviceClass" />
                    <TextField source="deviceModel" />
                    <TextField source="dataCenter" />
                    <TextField source="purpose" />
                    <TextField source="masterIp" />
                    <TextField source="purpose" />
                    <DateField source="updateTime" showTime />
                    <NumberField source="weight" />
                    <TextField source="state" />
                    <TextField source="note" />
                    <TextField source="idrac" />
                    <TextField source="location" />
                    <TextField source="number" />
                    <TextField source="sn" />
                    <TextField source="net" />
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

const AssetList = ({ classes, ...props }) => (
    <List
        {...props}
        pagination={false}
        exporter={false}
    >
        <StyledTabbedDatagrid />
    </List>
);

export default AssetList;
