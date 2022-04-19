import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGlobals, getAllGlobalsById, deleteGlobals } from '../Redux/Actions'
import Table from 'react-bootstrap/Table'
import { Button } from "react-bootstrap"
import { confirmAlert } from "react-confirm-alert"
import 'react-confirm-alert/src/react-confirm-alert.css';
import FrmGlobal from './FrmGlobal'
import FrmEditGlobal from './FrmEditGlobal'

export default function TblGlobal() {
    const dispatch = useDispatch();
    
  useEffect(() =>{
    dispatch(getAllGlobals())
  },[])

  const [editing, setEditing] =useState(false) 
  const [control, setControl] = useState(true)
  const [nuevo, setNuevo] = useState(false)
  const [tabla, setTabla] = useState(true)
  const [borrar, setBorrar] = useState(false)

  const AllGlobals = useSelector(state => state.globals)
 
  const activarModificacion = (id)=>{
    setEditing(true)
    dispatch(getAllGlobalsById(id))
    setControl(false)
  }
  const globalsId=useSelector(state => state.globalsId)

  const activarNuevo = ()=>{
    setNuevo(true)
    setTabla(false)
  }
 
  const eliminar = (id) =>{
     dispatch(deleteGlobals(id))
     setBorrar(true)
  }
  
  useEffect(() =>{
    dispatch(getAllGlobals())
    setBorrar(false)
  },[borrar===true])


  const confirmacion = (id) =>{
    confirmAlert({
        title : "Confirmación",
        message : "Deseas eliminar el Registro?",
        buttons : [
            {
              label : 'Sí',
              onClick : ()=>eliminar(id)
            },
            {
              label : 'No'
            }
        ]
    })
  }
 
  return (
    <div className="content-wrapper">
     {
       control ? (<div>
                  <h3 className='text-center'>Configuración General</h3>
                  {
                    nuevo ? (
                            <div className='container'>   
                                <FrmGlobal />
                            </div>
                    ) : 
                    (
                      <div className='container'>
                      <Button variant="primary" type="submit" onClick={()=>activarNuevo()}>
                          Nuevo
                      </Button>
                      </div>
                    )
                  }
                  {/* <Button variant="primary" type="submit" onClick={()=>activarNuevo()}>
                     Nuevo
                  </Button> */}
                 </div>): null
     }
     
      <br/>
      { editing ? (
        <div>
          <h3 className='text-center'>Configuración General</h3>
          <h3 className='container'> Editar </h3>
          <FrmEditGlobal globalsId={globalsId}/>
        </div>
      ): tabla ? (
      (<Table className='container' striped bordered hover responsive="sm">
        <thead className='text-center'>
          <tr>
            <th>#</th>
            <th>Empresa</th>
            <th>Impuesto</th>
            <th>Impuesto %</th>
            <th>Moneda</th>
            <th>Logo</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
          //  AllGlobals.length && 
          AllGlobals.length && AllGlobals?.map((g,index) => {
             return(
                <tr>
                  {/* <td className='text-center'>{g.idglobal}</td> */}
                  <td className='text-center'>{index+1}</td>
                  <td>{g.empresa}</td>
                  <td className='text-center'>{g.nombre_impuesto}</td>
                  <td className='text-center'>{g.porcentaje_impuesto}</td>
                  <td className='text-center'>{g.simbolo_moneda}</td>
                  <td className='text-center'><img  style={{width:100}} src={g.logo} alt="LOGO"/></td>
                  <td className='text-center'><Button variant="warning" onClick={() => activarModificacion(g.idglobal)}><i className="fas fa-edit"></i></Button>{' '} 
                                              <Button variant="danger"  onClick={() => confirmacion(g.idglobal)}><i class="fas fa-trash"></i></Button></td>
                </tr>
             )
           })
         }
        </tbody>
      </Table>)):null
     }   
    </div>
  )
}
