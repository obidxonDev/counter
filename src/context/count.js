const count =  (state = 0, action) => {
   switch(action.type){
      case "INC":
         return state = state + action.payload
      case "RESET": 
         return state = 0
      default:
         return state
   }
}

export default count