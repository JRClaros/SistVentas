import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Table from "react-bootstrap/Table"
import { Button } from "react-bootstrap"
import { getAllSucursales } from "../Redux/Actions";

export default function TblSucursales(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllSucursales())
    },[]);

    const AllSucursales = useSelector(state=>state.sucursales)

    return(
        <div className="content-wrapper">
            <Table className='container' striped bordered hover responsive="sm">
                <thead className='text-center'>
                    <tr>
                        <th>#</th>
                        <th>Razón Social</th>
                        <th>Documento</th>
                        <th>Dirección</th>
                        <th>Email</th>
                        <th>Logo</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    AllSucursales.length && AllSucursales?.map((s,index) =>{
                        return(
                            <tr>
                                <td className='text-center'>{index+1}</td>
                                <td>{s.razon_social}</td>
                                <td className='text-center'>{s.tipo_documento} {s.num_documento}</td>
                                <td>{s.direccion}</td>
                                <td>{s.email}</td>
                                <td className='text-center'>{s.logo}</td>
                                <td className='text-center'><Button variant="warning"><i className="fas fa-edit"></i></Button>{' '} 
                                    <Button variant="danger"><i class="fas fa-trash"></i></Button></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </div>
    )
}