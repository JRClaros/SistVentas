import axios from 'axios'

export const cloudynary = async (formData) => {

    return await axios.post("https://api.cloudinary.com/v1_1/sistventasweb/upload", formData)
    
}