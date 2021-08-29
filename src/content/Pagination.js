import React, { useState } from 'react';
import './pagination.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

function Pagination({ total, pageSize }) {
  const [inital, setInitial] = useState(1);

  return (
    <div className="pagination">
      <p className="pagination__text">{inital}-{pageSize} of {total}</p>
      <p className="pagination__previous">
        <NavigateBeforeIcon />
      </p>
      <p className="pagination__next">
        <NavigateNextIcon />
      </p>
    </div>
  )
}

export default Pagination;
