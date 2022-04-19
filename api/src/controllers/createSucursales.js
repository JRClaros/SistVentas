const { response } = require('express')
const { Sucursal } = require('../db')

async function createSucursales(req, res=response){
    try {
        const { razon_social, tipo_documento, num_documento, direccion, telefono, email, representante, logo, estado } = req.body

        const sucursal = await Sucursal.findOne({
            where:{
                razon_social : razon_social
            }
        })

        if (sucursal){
            return res.status(401).json({
                ok:false,
                msg:`Ya existe esta sucursal: ${razon_social}`
            })
        }else{
            var sucursalCreacte = await Sucursal.create({
                razon_social:razon_social,
                tipo_documento: tipo_documento,
                num_documento:num_documento,
                direccion:direccion,
                telefono:telefono,
                email:email,
                representante:representante,
                logo: logo,
                estado: estado
            })
            res.status(201).send({
                ok:true,
                sucursalCreacte
            })
        }

    } catch (error) {
        res.json('Error en el catch')
        console.log(error)
    }
}

async function getAllSucursales(req,res){
    try {
        const getSucursales= await Sucursal.findAll()
        res.status(200).json(getSucursales)
        
    } catch (error) {
        console.log(error)
        res.json("No existe información de Sucursales")
    }
}

async function getAllSucursalesById(req,res){
    const { id } = req.params
    try {
        const getSucursalesById = await Sucursal.findOne({
            where:{
                idsucursal : id
            }
        });
        res.status(200).json(getSucursalesById)
        
    } catch (error) {
        console.log(error)
        res.json("No existe información de ese Sucursal")
    }
}

async function updateSucursales(req, res){
    const { id } = req.params
    let { razon_social, tipo_documento, num_documento, direccion, telefono, email, representante, logo, estado } = req.body
    try {
        await Sucursal.update({
            razon_social: razon_social,
            tipo_documento: tipo_documento,
            num_documento: num_documento,
            direccion: direccion,
            telefono: telefono,
            email: email,
            representante: representante,
            logo: logo,
            estado: estado
        },
        {
            where:{
                idsucursal: id
            }
        }
        );
        res.status(200).json("Sucursal fue actualizado exitosamente !!!")

    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

module.exports={
    createSucursales,
    getAllSucursales,
    getAllSucursalesById,
    updateSucursales
}