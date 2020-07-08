import React, { useState, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import SpacingGrid from './component/grid';
import useFetch from './UseFetch';

function FetchApi(): JSX.Element {
    const [query , setQuery] = useState('');
    const [data, isLoading, isError, setSearch] = useFetch('redux');   

    return (
        <Fragment>
          <TextField 
              id="outlined-basic"
              label="Outlined"
              variant="outlined" 
              value={query}
              onChange={event => setQuery(event.target.value)}
          />
          <Button variant="contained" color="primary" onClick={() => setSearch(query)}>
              Submit
          </Button>
          { isError && <div>Something went wrong ...</div> }
          {  isLoading ? <CircularProgress color="secondary" /> : <SpacingGrid data={data} /> }
        </Fragment>
    );

}


export default FetchApi;