import React, { useState } from 'react';
import SearchBox from '../components/SearchBox';
import useSearchItems from '../hooks/useSearchItems';

const HomePage = () => {
  const { loading, performSearch } = useSearchItems();
  const [searchTerm, setSearchTerm] = useState(''); // Ejemplo de uso de useState

  const handleSearch = () => {
    performSearch(searchTerm);
  };

  return (
    <div>
      <h1>Homepage</h1>
      <SearchBox 
        onSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} // Pasando setSearchTerm al componente SearchBox para actualizar el estado
      />
      {/* Resto del código relacionado con la visualización de resultados */}
    </div>
  );
};

export default HomePage;
