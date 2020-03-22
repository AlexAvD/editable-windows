export const ADD_WINDOW = 'ADD_WINDOW';
export const CREATE_NEW_WINDOW = 'CREATE_NEW_WINDOW'; 

export const REMOVE_WINDOW = 'REMOVE_WINDOW'; 
export const RETURN_REMOVED_WINDOW = 'RETURN_REMOVED_WINDOW'; 

export const SET_SIZE = 'SET_SIZE';
export const SET_POSITION = 'SET_POSITION';
export const SET_ACTIVE = 'SET_ACTIVE';

export const SET_ACTIVE_WINDOW= 'SET_ACTIVE_WINDOW';
export const UNSET_ACTIVE_WINDOW= 'UNSET_ACTIVE_WINDOW';

export const ADD_UNDO = 'ADD_UNDO';
export const ADD_REDO = 'ADD_REDO';
export const GET_UNDO = 'GET_UNDO';
export const GET_REDO = 'GET_REDO';

export const DELETE_LAST_UNDO = 'DELETE_LAST_UNDO';
export const DELETE_LAST_REDO = 'DELETE_LAST_REDO';

export default {
  CREATE_NEW_WINDOW,
  ADD_WINDOW,

  REMOVE_WINDOW,
  RETURN_REMOVED_WINDOW,

  SET_ACTIVE_WINDOW,
  UNSET_ACTIVE_WINDOW,
  
  ADD_UNDO,
  ADD_REDO,

  DELETE_LAST_UNDO,
  DELETE_LAST_REDO
}