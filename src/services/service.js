import axios from "axios";

const BASE_URL = 'https://api.github.com';

export const getRepos = async (query= 'stars:%3E1',currentPage,perPage) => {
  if(query===''){
    query='stars:%3E1'
  }
  return axios.get(`${BASE_URL}/search/repositories?q=${query}&sort=stars&per_page=${perPage}&page=${currentPage}`)
}
