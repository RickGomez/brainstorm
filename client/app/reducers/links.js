function links(state = [], action) {
  switch (action.type) {
    case 'ADD_LINK':
      
        return [...state, action.link]
    default: 
      return state 
  }
  return state
}

export default links 