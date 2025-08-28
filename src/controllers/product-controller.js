const productRepository = require('../repositories/product-repository');
const ProductRepositor = require('../repositories/product-repository')

class ProductController{
    async getAllProducts(req, res){
        try {
            const product = await ProductRepositor.findAll()
            res.status(200).json({
                success: true,
                data: products,
                message: 'produos listados'
            })
        } catch (error) {
            res.status(500).json(
                {
                    success: false,
                    message: 'erro ao buscar os produtos'
                }
            )
        }
    }

    async getProductById(req, res){
        try {
            const {id} = req.params;
            const product = await productRepository.findById(id)

            if(!product){
                return res.status(404).json({
                    success: false,
                    message:"Produto não encontrado!"
                })
            }

            res.status(200).json({
                success: true,
                data: product,
                message: 'Produto encontrado'
        })

        } catch (error) {
            res.status(500).json(
                {
                    success: false,
                    message: 'erro ao buscar os produtos',
                    error: error.message
                }
            )
        }
    }

    async createProduct(req, res){
        try {
            const projectData = req.body
            const newProduct = await productRepository.create(projectData)

            res.status(201).json({
                success: true,
                data: newProduct,
                message: "Produto criado com sucesso"
            })
        } catch (error) {
            
        }
    }

    async updateProduct(req, res){
        try {
            const {id} = req.params
            const productData = req.body
            const productUpdated = await ProductRepository.update(id, productData)

            if(!productUpdated){
                return res.status(404).json({
                    success: false,
                    message: "Produto não encontrado"
                })
            }

            res.status(200).json({
                success: true,
                message:"Atualizado com sucesso!"
            })
        } catch (error) {
            
        }
    }

    async deleteProduct(req, res){
        try{
            const {id} = req.params
            const deleteProduct = await productRepository.delete(id)
            if(!deletedProduct){
                return res.status(404).json({
                    success: false,
                    message:"Produto não encontrado"
                }
                )
            }   
            
            res.status(200).json({success:true})
        } catch (error){

        }
    }

}

module.exports =  new ProductController()