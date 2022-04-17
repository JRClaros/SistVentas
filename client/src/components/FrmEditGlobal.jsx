import { React, useEffect, useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { updateGlobals, uploadImageCloud } from "../Redux/Actions";


export default function FrmEditGlobal(props){
  const dispatch = useDispatch();
    
    const [idempresa, setIdEmpresa] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [nombreImpuesto, setNombreImpuesto] = useState("")
    const [porcentajeImpuesto, setPorcentajeImpuesto] = useState("")
    const [simboloMoneda, setSimboloMoneda] = useState("")
    const [logo, setLogo] = useState("")
    const [updateLogo, setUpdateLogo] = useState(false)
    
    useEffect(()=>{
      setIdEmpresa(props.globalsId.idglobal)
      setEmpresa(props.globalsId.empresa)
      setNombreImpuesto(props.globalsId.nombre_impuesto)
      setPorcentajeImpuesto(props.globalsId.porcentaje_impuesto)
      setSimboloMoneda(props.globalsId.simbolo_moneda)
      setLogo(props.globalsId.logo)
    },[props])

   const handleChangeEmpresa = (e) =>{
      setEmpresa(e.target.value)
   }

   const handleChangeNombreImpuesto = (e) =>{
     setNombreImpuesto(e.target.value)
   }


   const handleChangePorcentajeImpuesto = (e) =>{
     setPorcentajeImpuesto(e.target.value)
   }

   const handleChangeSimboloMoneda = (e) =>{
     setSimboloMoneda(e.target.value)
   }

   const uploadImage = async (e) => {
    if(!updateLogo) {
      const formData = new FormData()
      formData.append("file", e.target.files[0])
      formData.append("upload_preset", "sistVentas")
     
      let link = await dispatch(uploadImageCloud(formData))

      setLogo(link)
      setUpdateLogo(true)
    } else {
      Swal.fire('Ups!','No se pudo actualizar el logo.', 'error');
    }
  }

   const [estadovalidacion, setEstadoValidacion] = useState(false)

  const validacion = () =>{
    if (empresa==="" || nombreImpuesto==="" || porcentajeImpuesto===0 || simboloMoneda==="" || logo===""){
      return false
    }
      return true
  }

   const actualizar = async(e) =>{
    e.preventDefault()
    if(await validacion()){
      const updateGlobal= {empresa, nombreImpuesto, porcentajeImpuesto, simboloMoneda, logo}
      dispatch(updateGlobals(idempresa,updateGlobal))
      Swal.fire('Ok!','La empresa fue actualizado con Éxito!', 'success')
  } else{
      setEstadoValidacion(true)
    }
  }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
        setValidated(true);
        actualizar(event)
    };
   
    return(
      <div className="container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
       
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="formBasicNombreE">
          <Form.Label>Nombre de la Empresa:</Form.Label>
          <Form.Control 
            required
            type="text" 
            placeholder="Registre el nombre de la empresa" 
            name="empresa"
            defaultValue={empresa}
            onChange={(e)=>handleChangeEmpresa(e)}
          />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
            Por favor ingrese el nombre de la empresa
        </Form.Control.Feedback>
      </Row>  

      <Row className="mb-3">  
        <Form.Group as={Col} md="12" controlId="formBasicImpuesto">
          <Form.Label>Impuesto:</Form.Label>
          <Form.Control 
             required
             type="text" 
             placeholder="Registre el impuesto" 
             name="nombre_impuesto"
             defaultValue={nombreImpuesto}
             onChange={(e)=>handleChangeNombreImpuesto(e)}
             />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
            Por favor ingrese el tipo de impuesto
        </Form.Control.Feedback>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="formBasicPorImpuesto">
          <Form.Label>Porcentaje impuesto:</Form.Label>
          <Form.Control 
             required
             type="text" 
             placeholder="Registre el porcentaje del impuesto"
             name="porcentaje_impuesto" 
             defaultValue={porcentajeImpuesto}
             onChange={(e)=>handleChangePorcentajeImpuesto(e)}
          />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
            Por favor ingrese el porcentaje del impuesto
        </Form.Control.Feedback>
      </Row>  

      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="formBasicSimboloMoneda">
          <Form.Label>Símbolo de la Moneda:</Form.Label>
          <Form.Control 
             required
             type="text" 
             placeholder="Registre el símbolo de la moneda" 
             name="simbolo_moneda"
             defaultValue={simboloMoneda}
             onChange={(e)=> handleChangeSimboloMoneda(e)}
          />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
            Por favor ingrese el símbolo de la moneda
        </Form.Control.Feedback>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="formBasicLogoE">
          <Form.Label>Logo:</Form.Label>
          <Form.Control 
             required
             type="file" 
             placeholder="Cargue el logo de la empresa" 
             name="file"
             defaultValue={logo}
             accept=".png, .jpg, .jpeg"
             onChange={(e)=>uploadImage(e)}
             />
            <img src={logo} alt="LOGO"/>
        </Form.Group>
        <Form.Control.Feedback type="invalid">
            Por favor cargue el logo de la empresa
        </Form.Control.Feedback>
      </Row>

        <Button variant="success" type="submit">
          Actualizar
        </Button>
        {'   '}
        <Button variant="primary" href="/Global">
          Cancelar
        </Button>
     
      </Form>
      </div>
    )
}

