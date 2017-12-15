const colors = {
  cinnamon600: '#a31c12',
  cinnamon500: '#de2e21',
  cinnamon400: '#ff5447',
  cinnamon300: '#ff867d',
  cinnamon200: '#fcc2bd',
  cinnamon100: '#ffeeed',
  peach600: '#b53414',
  peach500: '#de4721',
  peach400: '#ff643d',
  peach300: '#ff957a',
  peach200: '#ffc2b3',
  peach100: '#fff3f0',
  chiliMango600: '#bd4b00',
  chiliMango500: '#e86915',
  chiliMango400: '#ff8b3d',
  chiliMango300: '#ffab73',
  chiliMango200: '#ffc8a3',
  chiliMango100: '#fff3eb',
  cantaloupe600: '#bf6c00',
  cantaloupe500: '#f28900',
  cantaloupe400: '#ffa126',
  cantaloupe300: '#ffbc63',
  cantaloupe200: '#fcd49f',
  cantaloupe100: '#fff3e3',
  sourLemon600: '#b38900',
  sourLemon500: '#e6b000',
  sourLemon400: '#f7c41b',
  sourLemon300: '#ffdb63',
  sourLemon200: '#ffe89c',
  sourLemon100: '#fff9e6',
  juicyPear600: '#687818',
  juicyPear500: '#8ea619',
  juicyPear400: '#a8c225',
  juicyPear300: '#c4de40',
  juicyPear200: '#e2f291',
  juicyPear100: '#f7fae6',
  kiwi600: '#437826',
  kiwi500: '#569633',
  kiwi400: '#71c246',
  kiwi300: '#8ae05c',
  kiwi200: '#b5f593',
  kiwi100: '#eefce6',
  greenApple600: '#217a37',
  greenApple500: '#329c4c',
  greenApple400: '#43c463',
  greenApple300: '#5fe380',
  greenApple200: '#abf5be',
  greenApple100: '#ebfff0',
  watermelon600: '#00573e',
  watermelon500: '#0c7a5b',
  watermelon400: '#12a67c',
  watermelon300: '#65ccaf',
  watermelon200: '#b7edde',
  watermelon100: '#ebfcf7',
  jewel600: '#166973',
  jewel500: '#1b818c',
  jewel400: '#1ea4b3',
  jewel300: '#45c8d6',
  jewel200: '#acebf2',
  jewel100: '#ebfdff',
  toothpaste600: '#0e718f',
  toothpaste500: '#028fba',
  toothpaste400: '#0da9d9',
  toothpaste300: '#27c5f5',
  toothpaste200: '#a6eaff',
  toothpaste100: '#e8faff',
  blueberry600: '#004487',
  blueberry500: '#005dba',
  blueberry400: '#0b77e3',
  blueberry300: '#409fff',
  blueberry200: '#a6d2ff',
  blueberry100: '#e6f2ff',
  plum600: '#264b7a',
  plum500: '#3266ab',
  plum400: '#3881e0',
  plum300: '#529bfa',
  plum200: '#a6ccff',
  plum100: '#e6f1ff',
  berrySmoothie600: '#3b4987',
  berrySmoothie500: '#4b5eb3',
  berrySmoothie400: '#5e77e6',
  berrySmoothie300: '#7891ff',
  berrySmoothie200: '#bdc9ff',
  berrySmoothie100: '#e8ecff',
  blackberry600: '#2f2d91',
  blackberry500: '#423fcc',
  blackberry400: '#5c5ae6',
  blackberry300: '#8483e6',
  blackberry200: '#c3c2ff',
  blackberry100: '#f0f0ff',
  islandPunch600: '#513882',
  islandPunch500: '#6445a1',
  islandPunch400: '#8660d1',
  islandPunch300: '#a88ae6',
  islandPunch200: '#d2befa',
  islandPunch100: '#f5f0ff',
  grapeSoda600: '#7c3882',
  grapeSoda500: '#97499e',
  grapeSoda400: '#c860d1',
  grapeSoda300: '#de8ae6',
  grapeSoda200: '#fabfff',
  grapeSoda100: '#fdebff',
  pomegranate600: '#99003b',
  pomegranate500: '#c70650',
  pomegranate400: '#f21167',
  pomegranate300: '#ff5c9a',
  pomegranate200: '#ffbdd6',
  pomegranate100: '#ffebf2',
  fruitPunch600: '#b82828',
  fruitPunch500: '#e02f2f',
  fruitPunch400: '#ff4c4c',
  fruitPunch300: '#ff7e7e',
  fruitPunch200: '#ffbdbd',
  fruitPunch100: '#ffeded',
  rootBeer600: '#664d42',
  rootBeer500: '#8c7266',
  rootBeer400: '#ba9a8c',
  rootBeer300: '#dbbbad',
  rootBeer200: '#ebd7ce',
  rootBeer100: '#faf3f0',
  toastedMarshmallow600: '#8c6000',
  toastedMarshmallow500: '#b37f10',
  toastedMarshmallow400: '#cc9e3b',
  toastedMarshmallow300: '#e6bf6c',
  toastedMarshmallow200: '#ebd6a9',
  toastedMarshmallow100: '#fcf5e6',
  coconut600: '#8f8687',
  coconut500: '#9e9595',
  coconut400: '#b3abac',
  coconut300: '#d1cbcb',
  coconut200: '#e3dedf',
  coconut100: '#f0edee',
  cappuccino600: '#242020',
  cappuccino500: '#362f30',
  cappuccino400: '#4a4242',
  cappuccino300: '#5e5757',
  cappuccino200: '#706869',
  cappuccino100: '#7a7374',
  soap600: '#b3bec4',
  soap500: '#cad3d9',
  soap400: '#dae1e6',
  soap300: '#e6ebed',
  soap200: '#edf1f2',
  soap100: '#f5f8fa',
  licorice600: '#2b3a45',
  licorice500: '#3f4e59',
  licorice400: '#53636e',
  licorice300: '#6a7a85',
  licorice200: '#86959e',
  licorice100: '#9ea9b0',
  frenchVanilla600: '#8f8f8f',
  frenchVanilla500: '#a6a6a6',
  frenchVanilla400: '#bdbdbd',
  frenchVanilla300: '#d4d4d4',
  frenchVanilla200: '#ebebeb',
  frenchVanilla100: '#ffffff',
  blackPepper600: '#000000',
  blackPepper500: '#1f1f1f',
  blackPepper400: '#333333',
  blackPepper300: '#4a4a4a',
  blackPepper200: '#616161',
  blackPepper100: '#787878',
}

const gradients = {
  cinnamon: `linear-gradient(to bottom right,${colors.cinnamon500},${colors.cinnamon400})`,
  peach: `linear-gradient(to bottom right,${colors.peach500},${colors.peach400})`,
  chiliMango: `linear-gradient(to bottom right,${colors.chiliMango500},${colors.chiliMango400})`,
  cantaloupe: `linear-gradient(to bottom right,${colors.cantaloupe500},${colors.cantaloupe400})`,
  sourLemon: `linear-gradient(to bottom right,${colors.sourLemon500},${colors.sourLemon400})`,
  juicyPear: `linear-gradient(to bottom right,${colors.juicyPear500},${colors.juicyPear400})`,
  kiwi: `linear-gradient(to bottom right,${colors.kiwi500},${colors.kiwi400})`,
  greenApple: `linear-gradient(to bottom right,${colors.greenApple500},${colors.greenApple400})`,
  watermelon: `linear-gradient(to bottom right,${colors.watermelon500},${colors.watermelon400})`,
  jewel: `linear-gradient(to bottom right,${colors.jewel500},${colors.jewel400})`,
  toothpaste: `linear-gradient(to bottom right,${colors.toothpaste500},${colors.toothpaste400})`,
  blueberry: `linear-gradient(to bottom right,${colors.blueberry500},${colors.blueberry400})`,
  plum: `linear-gradient(to bottom right,${colors.plum500},${colors.plum400})`,
  berrySmoothie: `linear-gradient(to bottom right,${colors.berrySmoothie500},${colors.berrySmoothie400})`,
  blackberry: `linear-gradient(to bottom right,${colors.blackberry500},${colors.blackberry400})`,
  islandPunch: `linear-gradient(to bottom right,${colors.islandPunch500},${colors.islandPunch400})`,
  grapeSoda: `linear-gradient(to bottom right,${colors.grapeSoda500},${colors.grapeSoda400})`,
  pomegranate: `linear-gradient(to bottom right,${colors.pomegranate500},${colors.pomegranate400})`,
  fruitPunch: `linear-gradient(to bottom right,${colors.fruitPunch500},${colors.fruitPunch400})`,
  rootBeer: `linear-gradient(to bottom right,${colors.rootBeer600},${colors.rootBeer500})`,
  toastedMarshmallow: `linear-gradient(to bottom right,${colors.toastedMarshmallow500},${colors.toastedMarshmallow400})`,
  cappuccino: `linear-gradient(to bottom right,${colors.cappuccino400},${colors.cappuccino300})`,
  licorice: `linear-gradient(to bottom right,${colors.licorice500},${colors.licorice400})`,
  blackPepper: `linear-gradient(to bottom right,${colors.blackPepper400},${colors.blackPepper300})`,
}

const primary = {
  background: `${colors.soap100}`,
  headers: `${colors.blackPepper100}`,
  dataViz: `${colors.blackPepper100}`,
  label: `${colors.blackPepper100}`,
  body: `${colors.blackPepper400}`,
  bodySecondary: `${colors.licorice100}`,
  hint: `${colors.licorice100}`,
  iconStandard: `${colors.licorice100}`,
  iconDisabled: `${colors.soap200}`,
  iconHover: `${colors.licorice500}`,
  button: `${colors.soap200}`,
  buttonText: `${colors.blackPepper100}`,
  selectHighlight: `${colors.blueberry200}`,
  link: `${colors.blueberry500}`,
  green: `${colors.greenApple500}`,
  orange: `${colors.cantaloupe500}`,
  red: `${colors.peach500}`,
  active: `${colors.blueberry500}`,
  success: `${colors.greenApple400}`,
  warning: `${colors.cantaloupe400}`,
  error: `${colors.cinnamon500}`,
}

export default Object.assign(colors, {
  gradients,
  primary,
})
