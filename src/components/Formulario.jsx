import React, { useState } from 'react'

const Formulario = () => 
{

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade pacientes y <span className='text-indigo-600 font-bold'>administralos</span>
      </p>
      <form className='bg-white shadow-xl rounded-lg py-5 px-5 mb-5'>

        <div>
          <label 
          htmlFor='nombre'
          className='text-gray-700 uppercase font-bold'>Nombre de la mascota: </label>
          <input 
          id='nombre'
          type="text" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          placeholder='nombre de la mascota'/>
        </div>

        <div>
          <label 
          htmlFor='propietario'
          className='text-gray-700 uppercase font-bold'>Nombre del propietario: </label>
          <input 
          id='propietario'
          type="text" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          placeholder='nombre de la mascota'/>
        </div>

        <div>
          <label 
          htmlFor='email'
          className='text-gray-700 uppercase font-bold'>Email: </label>
          <input 
          id='email'
          type="email" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          placeholder='email de contacto'/>
        </div>


        <div>
          <label 
          htmlFor='fecha'
          className='text-gray-700 uppercase font-bold'>Fecha de alta: </label>
          <input 
          id='fecha'
          type="date" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'/>
        </div>

        <div>
          <label 
          htmlFor='sintomas'
          className='text-gray-700 uppercase font-bold'>Sintomas: </label>
          <textarea 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          placeholder='Describe los sintomas'/>
        </div>

        <input 
        id='sintomas'
        type="submit"
        className='bg-indigo-600 w-full p-3 
        text-white uppercase font-bold rounded-lg 
        hover:bg-indigo-900 cursor-pointer transition-all'
        value="Agregar paciente"
        />

      </form>
    </div>

  )
}

export default Formulario