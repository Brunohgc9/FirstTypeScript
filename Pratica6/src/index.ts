import { input } from "@inquirer/prompts"

(async () =>{

    let nome = await input({message: "Me diga seu nome: "})
    let idade = await input({message: "Me diga sua idade: "})
    let cargo = await input({message: "Me diga qual cargo almeja: "})
    let empresa = await input({message: "Me diga em qual empresa: "})

    console.log(`Meu nome é ${nome} e tenho ${idade} anos. Gostaria de exercer \no cargo de ${cargo} na empresa ${empresa}`)

})()
