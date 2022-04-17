const { response } = require('express');
const { Global } = require ("../db");

async function createConfGral(req, res=response){
    try {
        const{ empresa, nombre_impuesto, porcentaje_impuesto, simbolo_moneda, logo} = req.body
       
        const global = await Global.findOne({
            where:{
                empresa : empresa
            }
        })

        if(global){
            return res.status(401).json({
                ok:false,
                msg: `Ya existe esta empresa: ${empresa}`
            })
        } else{

        var globalCreate =  await Global.create({
            empresa: empresa,
            nombre_impuesto: nombre_impuesto, 
            porcentaje_impuesto: porcentaje_impuesto, 
            simbolo_moneda: simbolo_moneda, 
            logo: logo
        });
        }

       res.status(201).send({
           ok: true,
           globalCreate
           
        });
  
    } catch (error) {
        res.json('Error en el Catch.');
        console.log(error);
    }
}


async function getAllGlobals (req, res) {
    try {   
        const getGlobals = await Global.findAll();
        res.status(200).json(getGlobals);

    } catch (error) {
        console.log(error);
        res.json("No existe información de Datos Generales");
    }   
};

async function getAllGlobalsById (req, res) {
    const { id }=req.params
    try {   
        const getGlobalsById = await Global.findOne({
            where: { idglobal: id }
        });
        res.status(200).json(getGlobalsById);

    } catch (error) {
        console.log(error);
        res.json("No existe información de Datos Generales");
    }   
};

async function updateGlobal(req, res){
    const {id} = req.params
    let {empresa, nombreImpuesto, porcentajeImpuesto, simboloMoneda, logo} = req.body;
    try {   
        await Global.update({
            empresa : empresa, 
            nombre_impuesto : nombreImpuesto, 
            porcentaje_impuesto : porcentajeImpuesto, 
            simbolo_moneda : simboloMoneda, 
            logo : logo
        },
            {where: 
            {idglobal: id}
        });
        res.status(200).json("Empresa Global fue actualizado existosamente!!!");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

async function deleteGlobal (req, res) {
    let {id} = req.params;
    try {   
        await Global.destroy({
            where: {
                idglobal: id
            }
        });
        res.status(200).json("Empresa fue eliminado exitosamente!!!");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {
    createConfGral,
    getAllGlobals,
    getAllGlobalsById,
    updateGlobal,
    deleteGlobal
}