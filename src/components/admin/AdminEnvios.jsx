import React from 'react'
import { NavBar } from '../NavBar'
import { TableEnvios } from './TableEnvios'
import { Title } from '../envio/Title'

export const AdminEnvios = () => {
    return (
        <>
          <NavBar isAdmin={true} />
          <div className="px-6 py-16 mx-auto md:px-16 lg:max-w-7xl">
            <Title
              title="Administración de Envíos"
              className="pb-4 mt-10" />
            <TableEnvios />
          </div>
        </>
      )
}
