const { Pet } = require('../models')
const { User } = require('../models')

class PetController {
    async create(request, response) {
        const {
            nome,
            raca,
            idade,
            peso,
            user_id
        } = request.body;

        try {
            const newPet = await Pet.create({
                nome,
                raca,
                idade,
                peso,
                user_id
            })

            return response.status(201).json({ id: newPet.id });
        } catch (error) {
            console.log(erro);
            return response.status(500).json({
                error: "Erro ao salvar pet:\n" + erro
            });
        }
    }

    async index(request, response) {
        const filter = request.query;
        try {

            await User.hasMany(Pet, { foreignKey: 'user_id' })
            await Pet.belongsTo(User, { foreignKey: 'user_id' })

            let whereIncludeParams = {}
            let whereParams = {}

            if (filter.cidade && filter.cidade != "") {
                const [city, state] = filter.cidade.split(", ")
                whereIncludeParams = { "cidade": city, "estado": state };
            } else if (filter.user_id && filter.user_id != "") {
                whereIncludeParams = { id: filter.user_id };
            }

            const pets = await Pet.findAll({
                where: whereParams,
                include: { model: User, attributes: ['cidade', 'estado', 'email'], where: whereIncludeParams }
            })

            return response.json(pets);

        } catch (error) {
            console.log(erro);
            return response.status(500).json({
                error: "Erro ao buscar pets:\n" + erro
            });
        }
    }

    async update(request, response) {
        const {
            id,
            nome,
            raca,
            idade,
            peso,
            user_id
        } = request.body;

        try {
            Pet.update({
                nome,
                raca,
                idade,
                peso,
                user_id
            }, {
                where: { id }
            })

            return response.status(200).send();
        } catch (error) {
            console.log(erro);
            return response.status(500).json({
                error: "Erro ao salvar pet:\n" + erro
            });
        }
    }

    async destroy(request, response) {
        const filter = request.query;
        try {
            Pet.destroy({
                where: { id: filter.id }
            })

            return response.status(200).send();
        } catch (error) {
            console.log(erro);
            return response.status(500).json({
                error: "Erro ao deletar pet:\n" + erro
            });
        }
    }
}

module.exports = new PetController();