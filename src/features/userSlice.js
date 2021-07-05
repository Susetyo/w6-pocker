import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user:{
    name:""
  },
  users:[
    {
      id:1,
      name:"Raito",
      isAlreadyVote:true
    },
    {
      id:2,
      name:"Bonsai",
      isAlreadyVote:false
    },
    {
      id:3,
      name:"Squis",
      isAlreadyVote:true
    }
  ]
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onInputUser: (state,action) => {
      const copyUsers = state.users;
      const newUser = { id: copyUsers[copyUsers.length-1].id+1, name:action.payload, isAlreadyVote:false}
      state.user = newUser;
    },
    onInputUsers: (state,action) => {
      const copyUsers = state.users;
      copyUsers.push({
        id:copyUsers[copyUsers.length-1].id+1,
        name:action.payload,
        isAlreadyVote:false
      })
      state.users = copyUsers;
    },
    onUpdateUsers: (state,action) =>{
      const copyUsers = state.users;
      const newUsers = copyUsers.map((copyUser)=>{
        if(copyUser.id === action.payload){
          copyUser.isAlreadyVote = true;
        }

        return copyUser
      })

      state.users = newUsers;
    }
  },
});

export const { onInputUser, onInputUsers, onUpdateUsers } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user.user;
export const selectUsers = (state) => state.user.users;

export default userSlice.reducer;
