import Input from "./input";
import Button from "./Button";
import SearchPhoto from '../assets/icons/Group_5.svg'
import Image from "./Image";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getPerPage, loadRepoList, setCurrentPage} from "../Store/repoSlice";
import {useSearchParams} from "react-router-dom";
const Header = () => {
  const [search,setSearch] = useState('')
  const dispatch = useDispatch()
  const currentPage =useSelector(getCurrentPage())
  const perPage = useSelector(getPerPage())
  const [searchParam, setSearchParam] = useSearchParams()
  const postQuery = searchParam.get('q') || 'stars:%3E1'

  const searchHendler = ()=>{
    dispatch(setCurrentPage(1))
    dispatch(loadRepoList(search,currentPage,perPage))
  }
  useEffect(() => {
    localStorage.setItem('search', searchParam.toString());
  }, [searchParam,searchParam]);

  const handleSearch = (e) => {
    const query = e.target.value
    setSearch(e.target.value)
    setSearchParam({q:query})
  }
  return (
    <header>
      <Input placeholder='Введите имя'
             value={search}
             onChange={handleSearch}/>
      <Button className='button' onClick={searchHendler}>
        <Image src={SearchPhoto}
               alt='Search Photo'
               width='100%'
               height='100%'
               />
      </Button>
    </header>
  );
};

export default Header;
