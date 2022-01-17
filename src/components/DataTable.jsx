import React from "react";
import { useSelector } from "react-redux";
import { selectLaureates, selectLoading } from "../redux/selectors";

import { Table } from "antd";

const { Column } = Table;

const DataTable = () => {
  const data = useSelector(selectLaureates);
  const loading = useSelector(selectLoading);

  return (
    <>
      <Table dataSource={data} loading={loading} rowKey="id" pagination={false}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Name" dataIndex={["knownName", "en"]} key="knownName" />
        <Column title="Birth" dataIndex={["birth", "date"]} key="birth" />
        <Column title="Death" dataIndex={["death", "date"]} key="death" />
      </Table>
    </>
  );
};

export { DataTable };
