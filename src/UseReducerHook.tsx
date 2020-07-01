import { useState, useEffect, useReducer } from 'react';

const useReducerFetch = (initialSearchTxt: any) => {
const [search, setSearch] = useState(initialSearchTxt);

type StateType = { 
  isLoading: boolean,
  isError : boolean,
  search: string,
  data: [],
};

//Discriminated union type.
type Action = { type: 'FETCH_INIT' } | { type: 'FETCH_SUCCESS', payload: [] } | { type: 'FETCH_FAILURE'};

const reducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
        value: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
}

const startState : StateType = { 
  isLoading: false,
  isError : false,
  search: 'redux',
  data: [],
};

//Reducer Hook
const [state, dispatch] =  useReducer(reducer, startState);

useEffect(() => {
    const promise = async () => { 
      dispatch({ type: 'FETCH_INIT' });
      try {
        const response =  await fetch(`https://hn.algolia.com/api/v1/search?query=${search}`);
        const result = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: result.hits });
      }
      catch(ex) {
        dispatch({ type: 'FETCH_FAILURE' });
      }          
    };
    promise();
}, [search]);

return [ state, setSearch ] as const;

}

export default useReducerFetch;

