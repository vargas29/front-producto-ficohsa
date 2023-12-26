import React, { useState } from 'react';
import styles from '../styles/styles.module.css'; 

const ItemDetailPopup = ({ item, onClose, onEdit, isEditing }) => {
  const [editedItem, setEditedItem] = useState({ ...item });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({
      ...editedItem,
      [name]: value,
    });
  };

  const handleSaveEdit = () => {
    onEdit(item.id, editedItem);
    onClose();
  };

  return (
    <div className={styles.popup}>
    <div className={styles.popupContent}>
        <h2>Detalle del Ítem:</h2>
        <p>Código: {item.codigo}</p>
        <p>Nombre: {item.nombre}</p>
        {isEditing && (
          <div>
            <input
              type="text"
              name="codigo"
              value={editedItem.codigo}
              onChange={handleInputChange}
              className={styles.popupContentInput}
              
            />
            <input
              type="text"
              name="nombre"
              value={editedItem.nombre}
              onChange={handleInputChange}
              className={styles.popupContentInput}
            />
            <button onClick={handleSaveEdit} className={styles.popupContentButton}>Guardar</button>
          </div>
        )}
        <button onClick={onClose} className={styles.popupContentButton}>Cerrar</button>
      </div>
    </div>
  );
};

export default ItemDetailPopup;
