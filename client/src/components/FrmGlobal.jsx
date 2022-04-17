import { React, useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { postGlobals, uploadImageCloud } from "../Redux/Actions";
import Swal from "sweetalert2";

export default function FrmGlobal(){
  const dispatch = useDispatch();
  
  function validate (state){
    let errors = {};
    if(!state.empresa){
      errors.empresa = '*';
    } else if(!state.nombre_impuesto){
      errors.nombre_impuesto = '*'
    } else if(!state.porcentaje_impuesto){
      errors.porcentaje_impuesto = '*'
    } else if(!state.simbolo_moneda){
      errors.simbolo_moneda = '*'
    } else if(!state.logo){
      errors.logo = '*'
    } 
    return errors;
  };
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({
    empresa:"",
    nombre_impuesto:"",
    porcentaje_impuesto:0,
    simbolo_moneda:"",
    logo:""
  })
  const [registrarLogo, setRegistrarLogo] = useState(false)

  const [estadovalidacion, setEstadoValidacion] = useState(false)

  const validacion = () =>{
    if (state.empresa==="" || state.nombre_impuesto==="" || state.porcentaje_impuesto===0 || state.simbolo_moneda==="" || state.logo===null){
      return false
    }
      return true
  }

  const agregar = async(e) =>{
    e.preventDefault()
    if(await validacion()){
      dispatch(postGlobals(state))
      setState({
        empresa:'',
        nombre_impuesto:'',
        porcentaje_impuesto:0,
        simbolo_moneda:'',
        logo:''
    })
    Swal.fire('Ok!','La empresa fue creado con Éxito!', 'success')
  } else{
      setEstadoValidacion(true)
    }
  }

  const [validated, setValidated] = useState(false);

  const handleChanges = (e) =>{
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  };

  const uploadImage = async (e) => {
    // if(state.logo.length < 2) {
    if (!registrarLogo){
      const formData = new FormData()
      formData.append("file", e.target.files[0])
      formData.append("upload_preset", "sistVentas")

     
      let link = await dispatch(uploadImageCloud(formData))

      setState({
        ...state,
        // logo: [...state.logo, link]
        logo: link
      })
      setErrors(validate({
        ...state,
        logo: e.target.value
      }))
    } else {
      // Swal.fire('Ups!','No se pueden cargar mas de 1 Imagen.', 'error');
      Swal.fire('Ups!','Logo ya fue cargado.', 'error');
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
      setValidated(true);
      console.log("State",state)
      agregar(event)
     
  };
 
    return(
      <div  class="container"> 
      <Form  noValidate validated={validated} onSubmit={handleSubmit}>
        <h3> Adicionar </h3>
        <Row className="mb-3">
        <Form.Group as={Col} md="12"  controlId="formBasicNombreE">
          <Form.Label>Nombre de la Empresa:</Form.Label>
          <Form.Control 
            required
            type="text" 
            placeholder="Registre el nombre de la empresa"
            name="empresa"
            onChange={handleChanges}
          />
        </Form.Group>
          <Form.Control.Feedback type="invalid">
            Por favor ingrese el nombre de la empresa
          </Form.Control.Feedback>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="12"  controlId="formBasicImpuesto">
          <Form.Label>Impuesto:</Form.Label>
          <Form.Control 
            required
            type="text" 
            placeholder="Registre el tipo de impuesto"
            name="nombre_impuesto"
            onChange={handleChanges} 
          />
        </Form.Group>
          <Form.Control.Feedback type="invalid">
            Por favor ingrese el tipo de impuesto
          </Form.Control.Feedback>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="12"  controlId="formBasicPorImpuesto">
          <Form.Label>Porcentaje impuesto:</Form.Label>
          <Form.Control 
            required
            type="text" 
            placeholder="Registre el porcentaje del impuesto" 
            name="porcentaje_impuesto"
            onChange={handleChanges}
          />
        </Form.Group>
          <Form.Control.Feedback type="invalid">
            Por favor ingrese el porcentaje del impuesto
          </Form.Control.Feedback>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="12"  controlId="formBasicSimboloMoneda">
          <Form.Label>Símbolo de la Moneda:</Form.Label>
          <Form.Control 
            required
            type="text" 
            placeholder="Registre el símbolo de la moneda" 
            name="simbolo_moneda"
            onChange={handleChanges}
          />
        </Form.Group>
          <Form.Control.Feedback type="invalid">
            Por favor ingrese el símbolo de la moneda
          </Form.Control.Feedback>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="12"  controlId="formBasicLogoE">
          <Form.Label>Logo:</Form.Label>
          <Form.Control 
            required
            // type="text" 
            type="file"
            placeholder="Cargue el logo de la empresa" 
            name="file"
            accept=".png, .jpg, .jpeg"
            onChange={(e)=>uploadImage(e)}
          />
        </Form.Group>
          <Form.Control.Feedback type="invalid">
            Por favor cargue el logo de la empresa
          </Form.Control.Feedback>
        </Row>
       
        {/* <Button variant="success" type="submit" onClick={(e)=>agregar(e)}> */}
        <Button variant="success" type="submit">
          Registrar
        </Button>
        {'   '}
        <Button variant="primary" href="/Global">
          Cancelar
        </Button> 
       
        {/* {
          estadovalidacion ? <h6 className="text-danger">Los campos deben estar llenos</h6>:null
        } */}
       
      </Form>
      </div>
    )
}

