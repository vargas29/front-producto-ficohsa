import React, { useState } from 'react';
import ItemDetailPopup from './ItemDetailPopup';
import EditItemForm from './EditItemForm'; // Importa el componente de edición
import { deleteItem, updatedProducto } from '../utils/api';
import styles from '../styles/styles.module.css'; 
const SearchResults = ({ results }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  
  const showItemDetail = (item) => {
    setSelectedItem(item);
  };
  const closeEditModal = () => {
    setEditModalOpen(false);
  };
  const openEditModal = (item) => {
    setSelectedItem(item);
    setEditModalOpen(true);
  };
  const closeItemDetail = () => {
    setSelectedItem(null);
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      // Actualiza la lista de resultados después de eliminar el ítem
      // Puedes usar algún método para recargar los resultados, como fetchItems nuevamente o modificar el estado directamente si estás usando useState
      console.log(`Item with ID ${id} has been deleted.`);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleUpdate = async (editedItem) => {
    try {
      await updatedProducto(editedItem);
      console.log(`Item with ID ${editedItem.codigo} has been updated.`);
      closeEditModal(); // Cierra el modal después de la actualización
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div className={styles.searchResults}>
      <h2>Resultados de la búsqueda:</h2>
      <ul>
        {results.map((item) => (
          <li key={item.id} className={styles.searchResultsItem}>
            <div className={styles.searchResultsItemContent}>
              <span>Código: {item.codigo}, Nombre: {item.nombre}</span>
              <button onClick={() => showItemDetail(item)}>Ver Detalle</button>
              <button onClick={() => openEditModal(item)}>Editar</button> {/* Abre el modal de edición */}
              <button onClick={() => handleDelete(item.codigo)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      {selectedItem && (
        <ItemDetailPopup item={selectedItem} onClose={closeItemDetail} />
      )}
      {editModalOpen && selectedItem && (
        <EditItemForm item={selectedItem} onUpdate={handleUpdate} closeModal={closeEditModal} />
      )}
    </div>
  );
};


export default SearchResults;