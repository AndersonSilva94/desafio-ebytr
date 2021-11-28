const semana = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
];

const mes = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];

const getDate = () => {
  const now = new Date();
  const textDate = `${semana[now.getDay()]}, ${now.getDate()} de ${mes[now.getMonth()]} de ${now.getFullYear()}`;
  return textDate;
};

module.exports = getDate;
