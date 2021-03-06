let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

  function calcular (){
  console.log("Calculando...");

  let adultos  = inputAdultos.value;
  let criancas  = inputCriancas.value;
  let duracao  = inputDuracao.value;

  let qtdTotalBolo = (boloPP(duracao) * adultos) + (boloPP(duracao)/2 * criancas)
  let qtdTotalSalgado = (salgadoPP(duracao) * adultos) + (salgadoPP(duracao)/2 * criancas)
  let qtdTotalBebida = (bebidaPP(duracao) * adultos) + (bebidaPP(duracao)/2 * criancas)

  resultado.innerHTML = `<P> ${Math.ceil(qtdTotalBolo/1000)} kg de bolo</P>`;
  resultado.innerHTML += `<P> ${Math.ceil(qtdTotalSalgado/100)} de centos de salgado </P>`;
  resultado.innerHTML += `<P> ${Math.ceil(qtdTotalBebida/2000)} garrafas de bebida (2L) </P>`;
}

function boloPP(duracao){
  if (duracao >= 6){
    return 500;
  } else {
    return 300;
  }
}

function salgadoPP(duracao){
  if (duracao >= 6){
    return 50;
  } else {
    return 30;
  }
}

function bebidaPP(duracao){
  if (duracao >= 6){
    return 1500;
  } else {
    return 1000;
  }
}