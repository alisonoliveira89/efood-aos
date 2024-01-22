import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status } from '../../utils/enums/Status'

type StatusState = {
  status?: Status
}

const initialState: StatusState = {
  status: Status.Cart
}

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload
    }
  }
})

export const { changeStatus } = statusSlice.actions
export default statusSlice.reducer
