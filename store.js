javascript
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // Assurez-vous de créer un slice pour les tâches

const store = configureStore({
reducer: {
todos: todoReducer,
},
});