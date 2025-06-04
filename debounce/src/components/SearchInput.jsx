import React, { useEffect, useState } from 'react'
import useDebounce from '../customHooks/useDebounce';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data)
          setResults(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });

    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputText" className="form-label">Search Keywords: </label>
          <input type="text" className="form-control" id="exampleInputText" aria-describedby="search-Keyword" value={searchTerm} placeholder='Search...'
            onChange={() => handleInputChange(event)} />
        </div>

      </form>
      {loading && <p>Loading...</p>}
      <ul>
        {results && results?.map((result) => (
          <li key={result.id}>{result.name.official}   {result.capital[0]}  {result.subregion}</li> 
         
        ))}
      </ul>
    </>

  )
}

export default SearchInput