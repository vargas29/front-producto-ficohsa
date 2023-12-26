import { useState } from 'react';
import { searchItems } from '../utils/api'; // Asegúrate de importar la función searchItems

const useSearchItems = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const performSearch = async (searchTerm) => {
    setLoading(true);
    try {
      const data = await searchItems(searchTerm);
      if (!Array.isArray(data)) {
        console.error('Invalid data format received from searchItems.');
        setLoading(false);
        return;
      }
      console.log('Data received:', data);
      setSearchResults(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  return { searchResults, loading, performSearch };
};

export default useSearchItems;
