let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }];

/**
 * Função principal para calcular e exibir as médias dos atletas.
 * @param {Array<object>} listaDeAtletas - O array de objetos de atletas.
 */
function processarAtletas(listaDeAtletas) {

  // Itera sobre cada atleta no array
  for (let i = 0; i < listaDeAtletas.length; i++) {

    let atleta = listaDeAtletas[i];
    let nome = atleta.nome;
    let notasOriginais = atleta.notas;

    // --- Processamento das Notas ---

    // 1. Criamos uma cópia das notas para não modificar o array original.
    // 2. Ordenamos a cópia em ordem crescente.
    let notasOrdenadas = [...notasOriginais].sort((a, b) => a - b);

    // 3. Usamos .slice(1, 4) para extrair as 3 notas do meio.
    let notasValidas = notasOrdenadas.slice(1, 4);

    // 4. Calculamos a soma das notas válidas usando .reduce()
    let somaDasNotas = notasValidas.reduce((total, nota) => total + nota, 0);

    // 5. Calculamos a média (dividindo pelo número de notas válidas)
    let mediaValida = somaDasNotas / notasValidas.length;

    // --- Apresentação dos Resultados ---

    console.log(`Atleta: ${nome}`);
    console.log(`Notas Obtidas: ${notasOriginais.join(',')}`);
    console.log(`Média Válida: ${mediaValida}`);

    // Adiciona uma linha em branco entre os atletas para legibilidade
    if (i < listaDeAtletas.length - 1) {
      console.log("");
    }
  }
}

// Executa a função principal com os dados dos atletas
processarAtletas(atletas); 
