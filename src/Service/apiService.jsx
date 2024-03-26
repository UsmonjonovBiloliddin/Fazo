import axios from "./api";

const PraductService = {
    getProduct: async(Product) => {
        const {data} = await axios.get(Product)
        return data
    },
    // createProduct: async(Product) => {
    //     const {data} = await axios.post(Product)
    //     return data
    // },
    // deleteProduct: async(Product) => {
    //     const {data} = await axios.post(Product)
    //     return data
    // },
}


export  default PraductService;