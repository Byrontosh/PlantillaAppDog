import React from 'react'

const Paciente = () => {
  return (

    <div className='m-3 bg-white px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:{" "}
      <span className='font-normal normal-case'>Hook</span></p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre del Propietario:{" "} 
      <span className='font-normal normal-case'>Byron</span></p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>Email del Propietario:{" "}
      <span className='font-normal normal-case'>byron@gmail.com</span></p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de alta:{" "}
      <span className='font-normal normal-case'>24/05/2022</span></p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:{" "}
      <span className='font-normal normal-case'>Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. Iste ullam illo quisquam itaque saepe porro, 
      odio architecto nisi pariatur, sed doloremque est quibusdam voluptates quaerat 
      iusto molestias suscipit, labore corrupti!</span></p>

    </div>
  )
}

export default Paciente