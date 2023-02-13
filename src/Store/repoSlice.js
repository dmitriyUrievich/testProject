import {createSlice} from '@reduxjs/toolkit'
import {getRepos} from "../services/service";

export const RepoSlice = createSlice({
  name: 'repo',
  initialState: {
    items:[],
    isLoading:false,
    queryParams:null,
    error: null,
    currentPage:1,
    perPage:6,
    totalCount:null
  },
  reducers: {
    editUser: state => {
      state.value += 1
    },
    RemoveUser: state => {
      state.value -= 1
    },
    usersRequested: (state, action) => {
      state.items = null
      state.isLoading = true
    },
    repoReceived: (state, action) => {
      state.items = action.payload.items
      state.totalCount = action.payload.total_count
      state.isLoading = false
    },
    setCurrentPage: (state, action) => {
    state.currentPage = action.payload
    },
    setQueryParam: (state, action) => {
      state.queryParams = action.payload
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload
    },
    repoSearchReceived: (state, action) => {
      state.items = action.payload
      state.isLoading = false
    },
    userUpdateSuccessed: (state, action) => {
      state.entities[
        state.entities.findIndex((u) => u._id === action.payload._id)
        ] = action.payload
    },
    usersRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
  }
})
export const loadRepoList = (guery,currentPage,perPage) => async(dispatch, getState) => {
  dispatch(usersRequested())
  try {
     const res = await getRepos(guery,currentPage,perPage)
     dispatch(repoReceived(res.data))
  }catch (e) {
      console.error(e.message)
  }
}
export const SearchRepoList = () => async(dispatch, getState) => {
  dispatch(usersRequested())
  try {
    const res = await getRepos()
    const {items} = res.data
    console.log(typeof items,'resres')
    dispatch(repoReceived(items))
  }catch (e) {
    console.error(e.message)
  }
}

export const getRepo = () => state => state.repo.items
export const getCurrentPage = () => state => state.repo.currentPage
export const getTotalCount = () => state => state.repo.totalCount
export const getPerPage = () => state => state.repo.perPage
export const getQueryParam = () => state => state.repo.queryParams
export const getLoading = () => state => state.repo.isLoading
export const {editUser, RemoveUser,usersRequested,setCurrentPage,setPerPage,userUpdateSuccessed,repoReceived} = RepoSlice.actions

export default RepoSlice.reducer
