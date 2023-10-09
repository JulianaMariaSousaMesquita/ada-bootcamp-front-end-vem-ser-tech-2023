// Enunciado
// Remover Feedbacks Duplicados
// Um consultor de marketing sugeriu que uma empresa coletasse feedbacks de seus usuários.
// Após o fim da coleta eles perceberam que vários usuários reportaram as mesmas sugestões.
// Segue o modelo coletado:
// const feedbacks = [
//   "Melhorar responsividade do site",
//   "Erros confusos",
//   "Os botões são intuitivos",
//   "Erros confusos",
// ];
// Para resolver esse problema, crie uma função chamada removerFeedbacksDuplicados que deve:
// Receber um array de string.
// Retornar esse array sem valores duplicados.

export function removerFeedbacksDuplicados(feedbacks) {
    const set = new Set(feedbacks);
    const arraySemDuplicatas = Array.from(set);
    return arraySemDuplicatas;
}