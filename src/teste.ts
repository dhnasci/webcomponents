type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
}

function ligarPara(heroi: Hero) {
    console.log("ligando para:" + heroi.telefone);
}

function ligarParaString(heroi: Hero):string {
    return "ligando para:" + heroi.telefone;
}

ligarPara({
    nome: 'Felipe',
    vulgo:'Capitão América',
    telefone: '11 3483-3777'
})

ligarParaString({
    nome: 'Felipe',
    vulgo:'Capitão América',
    telefone: '11 3483-3777'
});