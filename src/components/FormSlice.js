import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
      username:'',
      email:'',
      level:'',
      skill:'',
      workExp:'',
      facebook:''
  }
}

export const FormSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    formInfo: (state,action) => {
     state.value={
       username:action.payload.username,
       email:action.payload.email,
      level:action.payload.level,
      skill:action.payload.skill,
      workExp:action.payload.workExp,
      frontend: action.payload.frontend,
      backend: action.payload.backend,
      midLevel:action.payload.midLevel,
      seniorLevel:action.payload.seniorLevel,
      url:action.payload.facebook
     }
      
        
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { formInfo} = FormSlice.actions

export default FormSlice.reducer