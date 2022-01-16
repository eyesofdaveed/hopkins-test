import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { pageNumber } from "../redux/actions";

import { Pagination } from "antd";

import "./paginator.css"

const MAX_ITEM_COUNT = 10;

const Paginator = () => {
  const dispatch = useDispatch();
  const currentPageNumber = useSelector((state) => state.data.pageNumber);

  const handlePageChange = (page) => {
    console.log("changed");
    dispatch(pageNumber(page));
  };

  return (
    <Pagination
      showSizeChanger={false}
      defaultCurrent={1}
      pageSize={MAX_ITEM_COUNT}
      current={currentPageNumber}
      onChange={handlePageChange}
    />
  );
};

export { Paginator };
