/* eslint-disable react/prop-types */
import { Box, Modal } from "@mui/material";
import { Input } from "../../envio/Input";
import { Button } from "../../Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../../config/config";
import { FaTrash } from "react-icons/fa";
import { Icon } from "../../Icon";
import { IoIosAddCircle } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { formatPriceToARS } from "../../utils/utils";

const ModalEditProducto = ({ open, handleClose, producto, refrescarProductos }) => {
  const [image, setImage] = useState(null);
  const [dtosProp, setDtosProp] = useState([]);
  const [nomProp, setNomProp] = useState('');

    // Cloudinary
    const preset_name = "indunat" //16 Pegamos el "name" rescatado en el punto 24
    const cloud_name = "daa6wrpz7" //16.2 Pegamos el cloud_name rescatado en punto 20
  
  const uploadImage = async (e)=>{            //2 Preparamos para recibir el evento al ejecutarse la función async
    const files = e.target.files            //3 recuperamos el array de e.target.files
    const data = new FormData()             //4 Creamos/Instanciamos un FormData objeto con nombre data
    data.append('file', files[0])           //5 Utilizando metodo append() agregamos al data el archivo desde files[0]
    data.append('upload_preset',preset_name)  //6 Como prop "upload preset" le pasamos la variable de la linea 6 (punto 16.2).

    try {
        //10 enviamos el pedido de upload con el data en body 
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
            method: 'POST',
            body: data
        });

        const file = await response.json() //11 Traducimos la respuesta de JSON
        setImage(file.secure_url)          //13 Recuperamos la url de la imagen en estado local
    } catch (error) {
        console.error('Error uploading image:', error);
    }
}


  // Centraliza el estado del formulario
  const [dtosForm, setDtosForm] = useState({
    nombre: '',
    tamanio: '',
    precio: '',
    descripcion: '',
  });

  // Función para manejar los cambios de cada campo
  const onInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "precio") {
      // Solo permitir números y un punto decimal
      const regex = /^\d*\.?\d*$/;
      if (!regex.test(value)) {
        return;  // Si no coincide con el patrón, no hace nada
      }
    }

    setDtosForm({
      ...dtosForm, // Mantén los valores anteriores del formulario
      [name]: value,  // Actualiza solo el campo que cambió
    });
  };

  const onInputPropChange = (e) => {
    setNomProp(e.target.value)
  }

  // Estilos modal
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',  // Permite el scroll en el modal
    maxHeight: '90vh',  // Define una altura máxima para el modal
  };

  // Funcion para guardar cambios
  const handleGuardarEditDtos = async () => {
    try {

      const datosActualizados = {
        nombre: dtosForm.nombre,
        tamanio: dtosForm.tamanio,
        precio: dtosForm.precio,
        descripcion: dtosForm.descripcion,
        img: image,
        propiedades: dtosProp
      }

      const response = await axios.put(`${apiUrl}/productos/${producto.id}`, datosActualizados);
      if (response.status === 200) {
        refrescarProductos();
        handleClose();
      }
    } catch (error) {
      console.error("Error accediendo a la api productos", error);
    }
  }

  // Actualiza dtosForm con el objeto producto cuando el componente se monta o cuando producto cambie
  useEffect(() => {
    if (producto) {
      setDtosForm({
        nombre: producto.nombre || '',
        tamanio: producto.tamanio || '',
        precio: producto.precio || '',
        descripcion: producto.descripcion || ''
      });
      setDtosProp(producto.propiedades)
      setImage(producto.img)
    }
  }, [producto]); // El efecto se ejecutará cuando 'producto' cambie

  // Función para eliminar propiedad
  const handleEliminarPropiedad = (index) => {
    const nuevasPropiedades = dtosProp.filter((_, i) => i !== index); // Filtra el elemento que se quiere eliminar
    setDtosProp(nuevasPropiedades); // Actualiza el estado
  };

  // Función para agregar nueva propiedad
  const handleAgregarPropiedad = () => {
    if (nomProp.trim() !== '') {  // Verifica que la propiedad no esté vacía
      // Encontrar el próximo ID disponible
      const nuevoId = dtosProp.length > 0 ? Math.max(...dtosProp.map(p => p.id)) + 1 : 1;

      // Crear el objeto de la nueva propiedad con los campos adicionales
      const nuevaPropiedad = {
        id: nuevoId,
        id_producto: producto.id,  // Usa el id del producto actualmente editado
        propiedad: nomProp,
        created_at: new Date().toISOString(),  // Opcional: Agrega las fechas si es necesario
        updated_at: new Date().toISOString()
      };

      // Agregar la nueva propiedad al estado
      setDtosProp([...dtosProp, nuevaPropiedad]);

      setNomProp('');  // Limpia el campo de entrada
    }
  };

  // Funcion para agregar propiedad al Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAgregarPropiedad(); // Llama a la función para agregar la nueva propiedad
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose} // Cierra el modal al hacer clic fuera
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-md w-[90%] 2xl:w-[75%] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-verde-100 scrollbar-track-claro scrollbar-thin">
          <div className="flex items-center justify-between">
            <h2 className='mb-4 text-2xl font-bold text-marron-200'>Editar {dtosForm.nombre} </h2>
            <Icon
              onClick={handleClose}
              icon={<IoCloseSharp size={24}
                className="-mt-8" />} />
          </div>
          
          <div className="flex flex-col xl:flex-row">
            <div className="items-center xl:items-start xl:w-1/2 md:flex">
              <div className="flex flex-col">
                {image && (
                  <div className="md:w-60 h-52">
                    <img src={image} alt="Preview" className="object-cover object-top w-full h-full " />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => uploadImage(e)}
                  className="px-3 py-2 mt-2 text-sm border border-gray-300 rounded md:w-60" />
              </div>

              <div className="mt-8 space-y-6 md:mt-0 md:ml-8">
                <div className="w-56">
                  <Input onChange={onInputChange} value={dtosForm.nombre} label="Nombre" type="text" name="nombre" />
                </div>
                <div className="">
                  <Input onChange={onInputChange} value={formatPriceToARS(dtosForm.precio)} label="Precio" name="precio" />
                </div>
                <div className="">
                  <Input onChange={onInputChange} value={dtosForm.tamanio} type="text" label="Tamaño" name="tamanio" />
                </div>
              </div>
            </div>

            <div className="mt-4 xl:mt-0 md:mr-4 xl:w-1/2">
              <Input
                onChange={onInputChange}
                value={dtosForm.descripcion}
                label="Descripción"
                name="descripcion"
                textarea
                className="cursor-default scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gris-100 scrollbar-track-claro scrollbar-thin"
              />
            </div>
            
          </div>
          
          <div className="mt-8">

            <div className="mb-3 text-sm font-semibold text-marron-200">Propiedades</div>
            <ul className="pr-4 overflow-y-auto max-h-40 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gris-100 scrollbar-track-claro scrollbar-thin">


              {dtosProp && dtosProp.length > 0 ? (
                dtosProp.map((propi, index) => (
                  <div key={index} className="flex items-center justify-start space-x-2 cursor-pointer">
                    <li className="w-full text-sm border-b-[1px] mb-2 text-marron-200 mr-4" key={index}>
                      {propi.propiedad}
                    </li>
                    <Icon
                      icon={<FaTrash size={16} />}
                      onClick={() => handleEliminarPropiedad(index)}
                    />
                  </div>
                ))
              ) : (
                <p className="text-sm text-marron-200">No hay propiedades para este producto</p>
              )}

              <div className="flex items-center mt-4">
                <Input
                  onChange={onInputPropChange}
                  value={nomProp}
                  label="Nueva propiedad"
                  type="text"
                  name="nomprop"
                  onKeyDown={handleKeyDown}
                />

                <Icon
                  onClick={handleAgregarPropiedad}
                  icon={<IoIosAddCircle size={20} className="ml-4" />} />
              </div>

            </ul>
          </div>

          <div className="gap-6 mt-8 md:justify-end md:flex ">
            <Button className="w-full mb-2 md:w-fit md:mb-0 bg-gris-50 hover:bg-gris-100"
              onClick={(e) => {
                handleClose()
              }}
            >Cancelar
            </Button>

            <Button className="w-full md:w-fit bg-verde-100 hover:bg-verde-200" onClick={(e) => {
              handleGuardarEditDtos();
            }}
            >Guardar
            </Button>
          </div>

        </Box>
      </Modal>

    </>

  )
}

export default ModalEditProducto
