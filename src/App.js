import {useDispatch, useSelector} from "react-redux";
import {useEffect} from 'react';
import {Route, Router, useSearchParams} from 'react-router-dom';
import {getCurrentPage, getPerPage, getQueryParam, loadRepoList} from "./Store/repoSlice";
import Header from "./component/header";
import RepoList from "./component/RepoList";
import Footer from "./component/Fotter";

function App() {
  const dispatch = useDispatch()
  const currentPage = useSelector(getCurrentPage())
  const perPage = useSelector(getPerPage())
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  useEffect(() => {
    const search = localStorage.getItem('search');
    console.log(search,'const search = localStorage.getItem(\'search\');')
    dispatch(loadRepoList('',currentPage,perPage))
  }, [currentPage,perPage,])

  return (
  <div className="App">
        <Header/>
        <RepoList/>
        <Footer/>
  </div>
  )
}

export default App;
