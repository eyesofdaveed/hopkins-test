import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";

import { Paginator } from ".";

import { Table } from "antd";

const { Column } = Table;

const DataTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useSelector((state) => state.data.fetchedData.laureates);
  const loading = useSelector((state) => state.app.loading);

  return (
    <>
      <Table
        dataSource={data}
        pagination={{ Paginator }}
        loading={loading}
        rowKey="id"
      >
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Name" dataIndex={["knownName", "en"]} key="knownName" />
        <Column title="Birth" dataIndex={["birth", "date"]} key="birth" />
        <Column title="Death" dataIndex={["death", "date"]} key="death" />
      </Table>
    </>
  );
};

export { DataTable };
