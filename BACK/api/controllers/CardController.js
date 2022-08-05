const database = require('../models') 
const jwt = require('jsonwebtoken')
require("dotenv-safe").config();

class CardController {
    static async listarCards(req,res){
        try{
            const resultadoCards = await database.cardKanban.findAll()
            return res.status(200).json(resultadoCards)
        }catch (error){
            return res.status(500).json(error.message)
        }
        
    }

    static async criarCard(req,res){
        const novoCard = req.body
        try{
            const novoCardCriado = await database.cardKanban.create(novoCard)
            return res.status(200).json(novoCardCriado)

        } catch (error){
            return res.status(500).json(error.message)
        }

    }

    static async atualizarCard(req,res){
        const {id} = req.params 
        const infoCard = req.body
        try{
            await database.cardKanban.update(infoCard, { where: { id: Number(id)}})
            const cardAtualizado = await database.cardKanban.findOne({ where: { id: Number(id)}})
            return res.status(200).json(cardAtualizado)
        }catch (error){
            return res.status(500).json(error.message)
        }

    }

    static async deletarCard(req,res){
        const {id} = req.params 
        try{
            await database.cardKanban.destroy({ where: { id: Number(id)}})
            const resultadoCards = await database.cardKanban.findAll()
            return res.status(200).json(resultadoCards)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static realizarLogin(req, res){
        const { login, senha } = req.body;
        if (login === process.env.LOGIN && senha === process.env.PASSWORD) {
            const id = 1; 
            const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: 600 });
            return res.json({ auth: true, token: token });
          }          
          res.status(500).json({message: 'Login inválido!'});
      }

    static verificaJWT(req, res, next){
        const token = req.headers['x-access-token'];
        if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
        
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
          if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
          
          req.userId = decoded.id;
          next();
        });
    }
    
        
    


}

module.exports = CardController