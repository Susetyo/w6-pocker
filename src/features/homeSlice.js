import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scores:[
    {
      id:'1',
      value:1,
      isChecked: false
    },
    {
      id:'2',
      value:2,
      isChecked: false
    },
    {
      id:'3',
      value:3,
      isChecked: false
    },
    {
      id:'5',
      value:5,
      isChecked: false
    },
    {
      id:'8',
      value:8,
      isChecked: false
    },
    {
      id:'13',
      value:13,
      isChecked: false
    },
  ],
};

export const homeSlice = createSlice({
  name: 'home',
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

export const { onSelectBox } = homeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectScores = (state) => state.home.scores;

export default homeSlice.reducer;
