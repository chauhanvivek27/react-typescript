import React, { useState, useEffect, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function FetchApi(): JSX.Element {
    const [data , setData] =  useState<Array>([]);
    const [query , setQuery] = useState('');
    const [search, setSearch] = useState('redux');

    useEffect(() => {
        const promise = async () => { 
          const response =  await fetch(`https://hn.algolia.com/api/v1/search?query=${search}`);
          const result = await response.json();
          setData(result.hits);
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
        <ul>    
            {
                data.map(item => (
                <div>
                <a href={item.url}> {item.title} </a> <br/>
                </div>
                ))
            }
        </ul>
        </Fragment>
    );

}


export default FetchApi;