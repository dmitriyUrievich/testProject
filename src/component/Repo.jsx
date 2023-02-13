import Input from "./input";
import Button from "./Button";
import Image from "./Image";
import Pensil from '../assets/icons/Group 9.svg'
const Repo = ({repo}) => {
  return (
    <div className='repo-child'>
        <h5 className="repo-child-header"><a href={repo.html_url}>{repo.name}</a></h5>
        <div className="cards">
          <div className='card-image'>
            <Image className="card-img rounded-circle" src={repo.owner.avatar_url} alt="Card image cap"/>
            <p><a href={repo.owner.html_url}>{repo.owner.login}</a></p>
          </div>
             <div className='card-image'>
               <i className="bi bi-star-fill"></i>
               <p>{repo.stargazers_count}</p>
               <i className="bi bi-eye"></i>
               <p>{repo.watchers}</p>
               <i role='button' onClick={()=>console.log('info')} className="bi bi-info"></i>
            </div>
          </div><div className='repo-child-footer'>
          <Input id={repo.id}
                  className='comments'
                 placeholder='Коментарий к проекту'
          />
          <Button className='comment-button'>
              <Image className='comment-img'
                     alt='Card comment'
                     src={Pensil}/>
          </Button>
        </div>
    </div>
  );
};

export default Repo;
