// mes = 'Mar'

// switch (mes) {
//   case 'Jan':
//     console.log('O mês de Janeiro tem 31 dias')
//     break
//   case 'Fev':
//     console.log('O mês de Fevereiro tem 28 dias')
//     break
//   case 'Mar':
//     console.log('O mês de Março tem 31 dias')
//     break
//   case 'Abr':
//     console.log('O mês de Abril tem 30 dias')
//     break
//   case 'Mai':
//     console.log('O mês de Maio tem 31 dias')
//     break
//   case 'Jun':
//     console.log('O mês de Junho tem 30 dias')
//     break
//   case 'Jul':
//     console.log('O mês de Julho tem 31 dias')
//     break
//   case 'Ago':
//     console.log('O mês de Agosto tem 31 dias')
//     break
//   case 'Set':
//     console.log('O mês de Setembro tem 30 dias')
//     break
//   case 'Out':
//     console.log('O mês de Outubro tem 31 dias')
//     break
//   case 'Nov':
//     console.log('O mês de Novembro tem 30 dias')
//     break
//   case 'Nov':
//     console.log('O mês de Dezembro tem 31 dias')
//     break
// }

const mes = [
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez',
]
const dia = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

for (let count = 0; count <= mes.length; count++) {
  console.log(`O mes ${mes[count]} tem ${dia[count]} dias`)
}
