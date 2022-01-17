import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageNumber, fetchData } from "../redux/actions";
import { selectPageNumber, selectTotalCount } from "../redux/selectors";

import { Pagination } from "antd";

import "./paginator.css";

const MAX_DATA_COUNT = 10;

const Paginator = () => {
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    dispatch(pageNumber(page));
    dispatch(fetchData());
  };

  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentPageNumber = useSelector(selectPageNumber);
  const totalCount = useSelector(selectTotalCount);

  return (
    <Pagination
      pageSize={MAX_DATA_COUNT}
      showSizeChanger={false}
      defaultCurrent={1}
      total={totalCount}
      current={currentPageNumber}
      onChange={handlePageChange}
    />
  );
};

export { Paginator };
