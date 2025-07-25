

function horarioAtual(){
    const agora = new Date();
    return agora.toLocaleTimeString();
}

export function obterHoraAtual() {
    return horarioAtual();
}

export function obterDataAtual() {
    const dataAtual = new Date();
    return dataAtual.toLocaleDateString();
}


