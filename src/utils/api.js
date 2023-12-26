import axios from 'axios';

const BASE_URL = 'http://localhost:8081'; // URL base de tu servidor backend

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  // Puedes agregar otras configuraciones si es necesario
});

const fetchItems = async () => {
  try {
    const response = await axiosInstance.get('/productos');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

const searchItems = async (searchTerm) => {
  try {
    const response = await axiosInstance.get(`/productos/buscar?nombre=${searchTerm}&codigo=${searchTerm}&`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
// Función para eliminar un producto por ID
const deleteItem = async (id) => {
    console.log(id);
    try {
      await axiosInstance.delete(`/productos/${id}`);
      console.log(`Item with ID ${id} has been deleted.`);
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error;
    }
  };
  
  // Función para modificar un producto por codigo
  const updatedProducto = async (nuevoProducto) => {
    try {
      const response = await axiosInstance.post(`/productos/`, nuevoProducto);
      console.log('Producto guardado con éxito:', response.data);
      return response.data; // Si necesitas la respuesta, puedes retornarla
    } catch (error) {
      console.error('Error al guardar el producto:', error);
      throw error;
    }
  };
  
  export { fetchItems, searchItems, deleteItem, updatedProducto };
