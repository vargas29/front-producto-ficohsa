import React, { useState } from 'react';
import SearchResults from './SearchResults'; // Importa el componente de resultados
import useSearchItems from '../hooks/useSearchItems'; // Importa el hook personalizado
import styles from '../styles/SearchBox.module.css'; 

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { searchResults, loading, performSearch } = useSearchItems(); // Usa el hook personalizado
  
    const handleSearch = (e) => {
      e.preventDefault();
      performSearch(searchTerm);
    };
  
    return (
      
         <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.form}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar..."
          />
          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </form>
        <SearchResults results={searchResults} /> {/* Pasar los resultados como prop al componente SearchResults */}
      </div>
    );
  };
  

export default SearchBox;
