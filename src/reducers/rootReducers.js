const init_state = {
  posts: [
    {id: '1', title:'title', body:"body"},
    {id: "2", title:'title', body:"body"},
  ]
}

const rootReducer = ( state = init_state, action ) => {
  if (action.type==='DELETE_POST'){
    let new_array = state.posts.filter( post => post.id !== action.id)

    return {
      ...state,
      posts: new_array
    }
  }


  return state
}

export default rootReducer