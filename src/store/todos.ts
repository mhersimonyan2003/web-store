import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppState, ExtraParams } from '@/store/index';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (arg: string, thunkAPI) => {
  console.log({ arg, thunkAPI });
  const response = await fetch(`${(thunkAPI.extra as ExtraParams).url}todos`).then((res) => res.json());
  return response;
});

export const initialState: {
  todos: unknown[];
  error: Error;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
} = {
  todos: [],
  status: 'idle',
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos.push(...action.payload);
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error as Error;
      });
  },
});
export const todosActions = todosSlice.actions;

export const todosSelectors = {
  get: (state: AppState): AppState['todos'] => state.todos,
};

export const todos = todosSlice.reducer;
