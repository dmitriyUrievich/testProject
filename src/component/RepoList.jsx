import {useSelector} from "react-redux";
import {getLoading, getRepo} from "../Store/repoSlice";
import Repo from "./Repo";
import {useSearchParams} from "react-router-dom";

const RepoList = () => {
  const isLoading = useSelector(getLoading())
  const repo = useSelector(getRepo())
  const [searchParam,] = useSearchParams()

  const postQuery = searchParam.get('q') || ''
  console.log(repo,'reporepo')
  console.log(searchParam,'searchParamsearchParamsearchParam')
  return (
    <div className="repo-card">
      {!isLoading?
          repo.map( repo =>
        <Repo repo={repo} key={repo.id}/>
        )
        :<p>Loading...</p>
      }
    </div>



  //       <div className="repo-card">
    //       {!isLoading?
    //         repo.map( repo =>
    //         <Repo repo={repo} key={repo.id}/>
    //         )
    //         :<p>Loading...</p>
    //       }
    //     </div>
  );
};

export default RepoList;
