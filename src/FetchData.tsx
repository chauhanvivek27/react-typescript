import React, { useState, useEffect } from 'react';

function FetchApi() {
    const [data , setData] =  useState<any[]>([]);

    useEffect(() => {
        const promise = async () => { 
          const response =  await fetch('https://hn.algolia.com/api/v1/search?query=redux');
          const result = await response.json();
          setData(result.hits);
        };
        promise();
    }, []);

    return (    
        <ul>    
            {
                data.map(item => (
                <div>
                   <a href={item.url}> {item.title} </a> <br/>
                </div>
                ))
            }
        </ul>
    );

}


export default FetchApi;