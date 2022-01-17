import _ from "lodash";

import React from "react";
import { useDispatch } from "react-redux";
import { fetchData, searchQuery } from "../redux/actions";

import { Input } from "antd";

const Search = () => {
  const dispatch = useDispatch();

  const handleSearchInput = _.debounce((event) => {
    dispatch(searchQuery(event.target.value));
    dispatch(fetchData());
  }, 1000);

  return (
    <Input
      placeholder="Input search text"
      size="large"
      allowClear
      onChange={handleSearchInput}
    />
  );
};

export { Search };
