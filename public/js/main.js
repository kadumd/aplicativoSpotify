import Model from "./model.js";
import CriarCards from "./criarCards.js";
import MudancaDeAba from "./abas.js";
import Controller from "./controller.js";
import Pesquisa from "./pesquisa.js";

const model = new Model()
const criarCards = new CriarCards()
const mudancaDeAba = new MudancaDeAba()
const controller = new Controller(model, criarCards)
const pesquisa = new Pesquisa(criarCards)