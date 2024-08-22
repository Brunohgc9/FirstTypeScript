"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@inquirer/prompts");
(() => __awaiter(void 0, void 0, void 0, function* () {
    let nome = yield (0, prompts_1.input)({ message: "Me diga seu nome: " });
    let idade = yield (0, prompts_1.input)({ message: "Me diga sua idade: " });
    let cargo = yield (0, prompts_1.input)({ message: "Me diga qual cargo almeja: " });
    let empresa = yield (0, prompts_1.input)({ message: "Me diga em qual empresa: " });
    console.log(`Meu nome é ${nome} e tenho ${idade} anos. Gostaria de exercer \n o cargo de ${cargo} na empresa ${empresa}`);
}))();
