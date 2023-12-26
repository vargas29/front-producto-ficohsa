import React, { useState } from 'react';
import styles from '../styles/styles.module.css';

const EditItemForm = ({ item, onUpdate, closeModal }) => {
  const [editedItem, setEditedItem] = useState(item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedItem);
    closeModal(); // Cierra el modal después de actualizar
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span onClick={closeModal} className={styles.close}>&times;</span>
        <form onSubmit={handleSubmit} className={styles.formEditContainer}>
          <label>
            Código:
            <input type="text" name="codigo" value={editedItem.codigo} onChange={handleChange} className={styles.formEditInput} />
          </label>
          <label>
            Nombre:
            <input type="text" name="nombre" value={editedItem.nombre} onChange={handleChange} className={styles.formEditInput} />
          </label>
          <button type="submit" className={styles.formEditButton}>Guardar cambios</button>
        </form>
      </div>
    </div>
  );
};

export default EditItemForm;
