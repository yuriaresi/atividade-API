import {randomUUID} from "crypto"

export class Produto {
    public id: string;
    constructor(public descricao: string, public preco: number, public quantidadeEstoque: number, public tipoProduto: string, public disponivel?: boolean){
        this.id = randomUUID()
    }
}