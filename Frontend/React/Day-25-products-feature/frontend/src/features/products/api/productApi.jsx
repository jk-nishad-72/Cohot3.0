import { api } from "../../../config/api";




export const getProductsApi = async (search) => {

    //  console.log('product api triggered ->' ,search);

     let url = search ? `/products/search?q=${search}` : `/products?limit=100`
     
    try {
        let res = await api.get(url)
        return res.data.products 
    } catch (error) {
        console.log('Products api', error);
    }
    
}

export const getAllCotegories = async (params) => {

    try {

        let res = await api.get('products/categories')

        // console.log('Categories api', res.data);

        return res.data
        
    } catch (error) {

        console.log('Categories api', error);
    
    }
    
}

export const  getProductsByCategory = async (category) => {

    try {
        
        let res = await api.get(`/products/category/${category}`)
        return res.data

    } catch (error) {

        console.log('get Products By Category api ', error);
        
        
    }
    
}


