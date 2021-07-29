
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";


const initialState = {
    list: [],
}

const initialPost = {
    image_url: "https://media.tenor.com/images/015b33630755ed9c1a5da21e93b5a83e/tenor.gif",
    TextWrite: "놀고 싶다... 영화관도 가고 바닷가도 가고",
  };

  export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {
          
        }),
  
        [ADD_POST]: (state, action) => produce(state, (draft) => {
            
        })
    },
    initialState
  );


const actionCreators = {
    setPost,
    addPost,
  };
  
  export { actionCreators };