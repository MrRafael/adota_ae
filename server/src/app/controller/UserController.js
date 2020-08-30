const { User } = require('../models')

class UserController {
    async create(request, response) {
        const {
            nome,
            email,
            password,
            estado,
            cidade,
            rua,
            numero
        } = request.body;

        try {

            const user = await User.findOne({
                where: { email }
            })

            if (user) {
                return response.status(422).json({ message: 'Email ja cadastrado' })
            }

            User.create({
                nome,
                email,
                password,
                estado,
                cidade,
                rua,
                numero
            })

            return response.status(201).send();
        } catch (error) {
            console.log(erro);
            return response.status(500).json({
                error: "Erro ao salvar usuario:\n" + erro
            });
        }
    }
}

module.exports = new UserController();