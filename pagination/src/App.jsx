import React, { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${itemsPerPage}&skip=10&select=title,price`
      );
      const result = await response.json();
      setData(result.data);
      setTotalPages(Math.ceil(result.total / itemsPerPage)); // Assuming response has total count
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [itemsPerPage]); // Re-fetch when page or limit changes

  const handlePreviousPage = () => {
    if (itemsPerPage > 10) {
      setItemsPerPage(itemsPerPage - 10);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setItemsPerPage(itemsPerPage + 10);
    }
  };

  return (
    <div>
      {loading ? <p>Loading...</p> :
        <div>
          {/* Render data here */}
          <div>
            <button onClick={handlePreviousPage} disabled={itemsPerPage === 10}>Previous</button>
            <button onClick={handleNextPage} >Next</button>
          </div>
        </div>
      }
    </div>
  );
}

export default App;