import React, { useState, useEffect, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import SpacingGrid from './component/grid';


function FetchApi() {
    const [data , setData] =  useState<any[]>([]);
    const [query , setQuery] = useState('');
    const [search, setSearch] = useState('redux');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    

    useEffect(() => {
        const promise = async () => { 
          setIsLoading(true);
          try {
            const response =  await fetch(`https://hn.algolia.com/api/v1/search?query=${search}`);
            const result = await response.json();
            setData(result.hits);
            setIsLoading(false);
          }
          catch(ex) {
            setIsError(true);
            setIsLoading(false);
          }          
        };
        promise();
    }, [search]);

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