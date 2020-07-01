import { useState, useEffect } from 'react';

const useFetch = () => {
const [data , setData] =  useState<any[]>([]);
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

return [ data, isLoading, isError, setSearch ] as const;

}

export default useFetch;

