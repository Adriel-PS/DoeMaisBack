import { Sequelize } from 'sequelize';
import db from '../db.js';

const nome1 = "adriel";
const nome2 = "adriel2";
const nome3 = "adriel3";

const email1 = "adriel@taqe.com.br";
const email2 = "texte.0072002@gmail.com";
const email3 = "73522@fmu.edu.br"

//tras
function findAll(req,res){
    UserRepository.findAll().then((result) => res.json(result));
}

function findUser(req,res){
    UserRepository.findByPk(req.params.id)
    .then( (result) => res.json(result))
}

//cria
function addUser(req,res){
    UserRepository.create({
        nome: nome1,
        email: email1
    }).then( (result) => res.json(result))
};

