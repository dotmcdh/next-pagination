import React from "react";

export interface NextPaginationProps {
  label: string;
}

const NextPagination = (props: NextPaginationProps) => {
  return <button>{props.label}</button>;
};

export default NextPagination;
