import express, { Request, Response } from "express";
import cors from 'cors';
import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { Produto } from "./models/produto.model";

const repository = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());


app.post("/usuario", async (req: Request, res: Response) => {

    try {
        //1- entrada

        const { nome, idade, email, senha, linkGitHub } = req.body


        //2- processamento

        if (!nome || !email || !senha) {
            return res.status(400).send({
                ok: false,
                message: 'Os campos obrigatorios nao foram informados.'
            })
        }
        await repository.usuario.create(
            {
                data: {
                    nome, idade, email, senha, linkGitHub
                }
            }
        )
        //3- saida

        return res.status(201).send({
            ok: true,
            message: 'Usuario criado com sucesso!',
            data:nome
        })


    } catch (error: any) {
       res.status(500).send( {
            ok: false,
            message: error.toString()
        })
    }

})


app.post("/fornecedor", async (req: Request, res: Response) => {

    try {
        console.log(req.body)
        console.log('aqui')
        await repository.fornecedor.create({ data: req.body });
        res.status(201).send({
            ok: true,
            message: 'Fornecedor criado com sucesso!',
            data: req.body.nome
        });
    } catch (error: any) {
        res.status(400).send(error.message ?? "Erro desconhecido");
    }
});


app.post("/loja", async (req: Request, res: Response) => {
    try {
        const { cnpj, nome, segmento, endereco, telefone, qtFiliais } = req.body;

        if (!cnpj || !nome || !endereco || !qtFiliais) {
            return res.status(400).send({
                ok: false,
                message: "Os campos obrigatorios nao foram informados"
            });
        }
        await repository.loja.create(
         {
            data: {
               cnpj, nome, segmento, endereco, telefone, qtFiliais
            }
         }

         )
         
         return res.status(200).send({
            ok: true,
            message: "Loja criada com sucesso"
            
         })

    } catch (error: any) {
        return res.status(500).send({
            ok: false,
            message: error.toString()
        })
    }
})

app.post("/produto", async (req: Request, res: Response) => {
   try {
      const {descricao, preco, quantidadeEstoque, tipoProduto, disponivel} = req.body
      if(!descricao || !preco || !quantidadeEstoque || !tipoProduto) return res.status(400).send({ok: false, message: "Preencha todos os campos!"})
      const produto = new Produto(descricao, preco, quantidadeEstoque, tipoProduto, disponivel)
   const produtoCriado = await repository.produto.create({data: produto})
   
   return res.status(201).send({ok: true, message: "Produto cadastrado com sucesso!", data: produtoCriado})
   } catch (error: any) {
      return res.status(500).send({ ok: false, message: error.toString() });
   }
})





app.listen(3333, () => {
    console.log("A API está rodando!- http://localhost:3333");
});