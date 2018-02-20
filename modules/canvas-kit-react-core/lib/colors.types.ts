export interface CanvasExtendedColorPalette {
  cinnamon600: string
  cinnamon500: string
  cinnamon400: string
  cinnamon300: string
  cinnamon200: string
  cinnamon100: string
  peach600: string
  peach500: string
  peach400: string
  peach300: string
  peach200: string
  peach100: string
  chiliMango600: string
  chiliMango500: string
  chiliMango400: string
  chiliMango300: string
  chiliMango200: string
  chiliMango100: string
  cantaloupe600: string
  cantaloupe500: string
  cantaloupe400: string
  cantaloupe300: string
  cantaloupe200: string
  cantaloupe100: string
  sourLemon600: string
  sourLemon500: string
  sourLemon400: string
  sourLemon300: string
  sourLemon200: string
  sourLemon100: string
  juicyPear600: string
  juicyPear500: string
  juicyPear400: string
  juicyPear300: string
  juicyPear200: string
  juicyPear100: string
  kiwi600: string
  kiwi500: string
  kiwi400: string
  kiwi300: string
  kiwi200: string
  kiwi100: string
  greenApple600: string
  greenApple500: string
  greenApple400: string
  greenApple300: string
  greenApple200: string
  greenApple100: string
  watermelon600: string
  watermelon500: string
  watermelon400: string
  watermelon300: string
  watermelon200: string
  watermelon100: string
  jewel600: string
  jewel500: string
  jewel400: string
  jewel300: string
  jewel200: string
  jewel100: string
  toothpaste600: string
  toothpaste500: string
  toothpaste400: string
  toothpaste300: string
  toothpaste200: string
  toothpaste100: string
  blueberry600: string
  blueberry500: string
  blueberry400: string
  blueberry300: string
  blueberry200: string
  blueberry100: string
  plum600: string
  plum500: string
  plum400: string
  plum300: string
  plum200: string
  plum100: string
  berrySmoothie600: string
  berrySmoothie500: string
  berrySmoothie400: string
  berrySmoothie300: string
  berrySmoothie200: string
  berrySmoothie100: string
  blackberry600: string
  blackberry500: string
  blackberry400: string
  blackberry300: string
  blackberry200: string
  blackberry100: string
  islandPunch600: string
  islandPunch500: string
  islandPunch400: string
  islandPunch300: string
  islandPunch200: string
  islandPunch100: string
  grapeSoda600: string
  grapeSoda500: string
  grapeSoda400: string
  grapeSoda300: string
  grapeSoda200: string
  grapeSoda100: string
  pomegranate600: string
  pomegranate500: string
  pomegranate400: string
  pomegranate300: string
  pomegranate200: string
  pomegranate100: string
  fruitPunch600: string
  fruitPunch500: string
  fruitPunch400: string
  fruitPunch300: string
  fruitPunch200: string
  fruitPunch100: string
  rootBeer600: string
  rootBeer500: string
  rootBeer400: string
  rootBeer300: string
  rootBeer200: string
  rootBeer100: string
  toastedMarshmallow600: string
  toastedMarshmallow500: string
  toastedMarshmallow400: string
  toastedMarshmallow300: string
  toastedMarshmallow200: string
  toastedMarshmallow100: string
  coconut600: string
  coconut500: string
  coconut400: string
  coconut300: string
  coconut200: string
  coconut100: string
  cappuccino600: string
  cappuccino500: string
  cappuccino400: string
  cappuccino300: string
  cappuccino200: string
  cappuccino100: string
  soap600: string
  soap500: string
  soap400: string
  soap300: string
  soap200: string
  soap100: string
  licorice600: string
  licorice500: string
  licorice400: string
  licorice300: string
  licorice200: string
  licorice100: string
  frenchVanilla600: string
  frenchVanilla500: string
  frenchVanilla400: string
  frenchVanilla300: string
  frenchVanilla200: string
  frenchVanilla100: string
  blackPepper600: string
  blackPepper500: string
  blackPepper400: string
  blackPepper300: string
  blackPepper200: string
  blackPepper100: string
}

export interface CanvasGradients {
  cinnamon: string
  peach: string
  chiliMango: string
  cantaloupe: string
  sourLemon: string
  juicyPear: string
  kiwi: string
  greenApple: string
  watermelon: string
  jewel: string
  toothpaste: string
  blueberry: string
  plum: string
  berrySmoothie: string
  blackberry: string
  islandPunch: string
  grapeSoda: string
  pomegranate: string
  fruitPunch: string
  rootBeer: string
  toastedMarshmallow: string
  cappuccino: string
  licorice: string
  blackPepper: string
}

export interface CanvasPrimaryPalette {
  background: string
  headers: string
  dataViz: string
  label: string
  body: string
  bodySecondary: string
  hint: string
  iconStandard: string
  iconDisabled: string
  iconHover: string
  button: string
  buttonText: string
  selectHighlight: string
  link: string
  green: string
  orange: string
  red: string
  active: string
  success: string
  warning: string
  error: string
}

export type CanvasColors = CanvasExtendedColorPalette & {
  gradients: CanvasGradients
  primary: CanvasPrimaryPalette
}

export enum BrandingColors {
  Cinnamon = 'cinnamon',
  Peach = 'peach',
  ChiliMango = 'chiliMango',
  Cantaloupe = 'cantaloupe',
  SourLemon = 'sourLemon',
  JuicyPear = 'juicyPear',
  Kiwi = 'kiwi',
  GreenApple = 'greenApple',
  Watermelon = 'watermelon',
  Jewel = 'jewel',
  Toothpaste = 'toothpaste',
  Blueberry = 'blueberry',
  Plum = 'plum',
  BerrySmoothie = 'berrySmoothie',
  Blackberry = 'blackberry',
  IslandPunch = 'islandPunch',
  GrapeSoda = 'grapeSoda',
  Pomegranate = 'pomegranate',
  FruitPunch = 'fruitPunch',
  RootBeer = 'rootBeer',
  ToastedMarshmallow = 'toastedMarshmallow',
  Cappuccino = 'cappuccino',
  Licorice = 'licorice',
  BlackPepper = 'blackPepper',
}
