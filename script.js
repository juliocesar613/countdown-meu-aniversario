const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
let finalHoras;
const lancamento = "13 june 2023";


function countDown(){
  const dataLance = new Date(lancamento);
  const hoje = new Date();
  const segTotal = (dataLance - hoje) / 1000;
  const finalDias = Math.floor(segTotal / 60 / 60 / 24)
  finalHoras = Math.floor(segTotal / 60 / 60) % 24;
  const finalMinutos = Math.floor(segTotal / 60 ) % 60;
  const finalSegundos = Math.floor(segTotal) % 60;
  const finalHorasFormatado = formatoTempo(finalHoras);
const finalMinutosFormatado = formatoTempo(finalMinutos);
const finalSegundosFormatado = formatoTempo(finalSegundos);

dia.innerHTML = finalDias;
hora.innerHTML = finalHorasFormatado;
minuto.innerHTML = finalMinutosFormatado;
segundos.innerHTML = finalSegundosFormatado;
}


function formatoTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo.toString();
}
countDown();
setInterval(countDown, 1000);