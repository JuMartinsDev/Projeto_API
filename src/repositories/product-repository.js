const Product = require('../models/product'); // importando a model do produto

class ProductRepository {
    //buscar todos - asycn faz uma conexao assincrona com o banco - aguarda a conexao com o db e o rsultado
    async findAll() {
        //buscar todos os produtos ativos
        //{active: true} : é um filtro 
        return await Product.find({ active: true });
    }

    //buscar por id
    async findById(id) {
        return await Product.findById(id);
    }

    //criar
    async create(productData) {
        //criando uma instancia para persistir os dados no mongo
        const product = new Product(productData);
        return await product.save();
    }

    //atualizar
    async update(id, productData) {
        return await Product.findByIdAndUpdate(
            id, 
            productData, 
            { new: true, runValidators: true }
        );
    }

    //delete
    async delete(id) {
        return await Product.findByIdAndUpdate(
            id, 
            { active: false }, 
            { new: true }
        );
    }

    async findByCategory(category) {
        return await Product.find({ 
            category: category, 
            active: true 
        });
    }
}

module.exports = new ProductRepository();