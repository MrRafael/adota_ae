const { User } = require('../models')

class CityController {
    async index(request, response) {
        try {
            const cidades = await User.findAll({
                attributes: ['cidade', 'estado'],
                group:['cidade', 'estado']
            })

            return response.json(cidades);
        } catch (error) {
            console.log(erro);
            return response.status(500).json({
                error: "Erro ao salvar usuario:\n" + erro
            });
        }
    }
}

module.exports = new CityController();