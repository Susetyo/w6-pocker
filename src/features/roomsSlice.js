import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listRooms:[
    {
      id:"001",
      roomName:"Rooms 1",
      password:"plokijuh",
      link:"/rooms/",
      userId:"001",
    },
    {
      id:"002",
      roomName:"Rooms 2",
      password:"plokijuh",
      link:"/rooms/002",
      userId:"002"
    },
    {
      id:"003",
      roomName:"Rooms 3",
      password:"plokijuh",
      link:"/rooms/003",
      userId:"003"
    }
  ]
};

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    onSelectBox: (state,action) => {
      const id = action.payload;
      const newScore = state.scores.map((score)=>{
        if(score.id === id){
          score.isChecked = true;
        }else{
          score.isChecked = false;
        }
  
        return score;
      })


  
      state.scores = newScore;
    }
  },
});

export const { onSelectBox } = roomsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectScores = (state) => state.home.scores;

export default roomsSlice.reducer;
