import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getPerPage, getTotalCount, setCurrentPage} from "../Store/repoSlice";
import {createPages} from "../utils/pages";
import SelectComponent from "./Select";

const Footer = () => {
  const pages = []
  const dispatch = useDispatch()
  const currentPage = useSelector(getCurrentPage())
  const totalCount = useSelector(getTotalCount())
  const perPage = useSelector(getPerPage())
  const pagesCount = Math.ceil(totalCount/perPage)
  createPages(pages,pagesCount,currentPage)
  return (
    <footer>
      <div className='pages'>
        <SelectComponent/>
        {pages.map((page,idx)=>
          <span key={idx}
                onClick={()=>dispatch(setCurrentPage(page))}
                className={currentPage===page ? 'currentPage' : 'page'}>
            {page}
          </span>
        )}
      </div>
    </footer>
  );
};

export default Footer;
