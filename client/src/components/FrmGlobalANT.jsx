import { React, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { postGlobals, getAllGlobals } from "../Redux/Actions";
import Swal from "sweetalert2";
import { Link } from "react-router-dom"
import TblGlobal from "./TblGlobal";

export default function FrmGlobal(){
  const dispatch = useDispatch();
  function  validate(state){
      let errors={};
      if(!state.empresa){
        errors.empresa='*';
      }else if(!state.nombre_impuesto){
        errors.nombre_impuesto='*';
      }else if(!state.porcentaje_impuesto){
        errors.porcentaje_impuesto='*';
      }else if(!state.simbolo_moneda){
        errors.simbolo_moneda='*';
      }else if(!state.logo){
        errors.logo='*';
      }
      return errors;
  }
  const [state, setState] = useState({
    empresa:"",
    nombre_impuesto:"",
    porcentaje_impuesto:"",
    simbolo_moneda:"",
    logo:""
  })

  const [errors, setErrors] = useState({})
  
  const handleChanges = (e) =>{
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...state,
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = (e) =>{
    if (!state.empresa || !state.nombre_impuesto || !state.porcentaje_impuesto || !state.simbolo_moneda || !state.logo){
      e.prevenDefault();
      alert('Debe completar todos los campos!!!')
    }else{
      e.prevenDefault()
      dispatch(postGlobals(state))
      setState({
        empresa:'',
        nombre_impuesto:'',
        porcentaje_impuesto:'',
        simbolo_moneda:'',
        logo:''
      })
      Swal.fire('Ok!','La empresa fue creado con Éxito!', 'success')
    }
  }

  // const [btncancel,setBtncancel] = useState(false)
  const [formulario, setFormulario] = useState(true)
  function handleClickCancel(){
    // e.prevenDefault()
    // dispatch(getAllGlobals())
    // props.setTabla=true
    
    //setBtncancel(true)
    setFormulario(false)
  }

    return(
      <>
      { formulario ? (
      <Form>
        <h3> Adicionar </h3>
        <Form.Group className="mb-3" controlId="formBasicNombreE">
          <Form.Label>Nombre de la Empresa:</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Registre el nombre de la empresa"
            name="empresa"
            value={state.empresa}
            onChange={handleChanges}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicImpuesto">
          <Form.Label>Impuesto:</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Registre el impuesto"
            name="nombre_impuesto"
            value={state.nombre_impuesto}
            onChange={handleChanges} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPorImpuesto">
          <Form.Label>Porcentaje impuesto:</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Registre el porcentaje del impuesto" 
            name="porcentaje_impuesto"
            value={state.porcentaje_impuesto}
            onChange={handleChanges}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSimboloMoneda">
          <Form.Label>Símbolo de la Moneda:</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Registre el símbolo de la moneda" 
            name="simbolo_moneda"
            value={state.simbolo_moneda}
            onChange={handleChanges}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLogoE">
          <Form.Label>Logo:</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Cargue el logo de la empresa" 
            name="logo"
            value={state.logo}
            onChange={handleChanges}
          />
        </Form.Group>

        <Button variant="success" type="submit" noValidate onClick={(e)=>handleSubmit(e)}>
          Registrar
        </Button>
        {'   '}
        {/* {
          btncancel ? (
                     <div>
                       <TblGlobal />
                     </div>
          ): null
          // <Button variant="primary" onClick={()=>setBtncancel(true)}>
          
          }   */}
          {/* <Button variant="primary" onClick={(event)=>handleClickCancel(event)}> */}
          
          {/* <Button variant="primary" type="submit" onClick={()=>handleClickCancel()}> */}
          <Button variant="primary" type="submit">
            Cancelar
           </Button>
          
       
      </Form>
      ): <div>
      <TblGlobal control={false}/>
    </div>
     }
      </>
    )
}

