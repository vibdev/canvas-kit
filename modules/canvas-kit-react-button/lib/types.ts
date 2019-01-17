/**
 * The different button sizes.
 */
export enum ButtonSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

/**
 * The different button types.
 */
export enum ButtonTypes {
  Primary = 'primary',
  Secondary = 'secondary',
  Delete = 'delete',
  Highlight = 'highlight',
  OutlineBlue = 'outlineBlue',
  OutlineDark = 'outlineDark',
  OutlineWhite = 'outlineWhite',
  UdePrimary = 'udePrimary',
  UdeSecondary = 'udeSecondary',
  UdeDelete = 'udeDelete',
}

export enum TextButtonTypes {
  Default = 'text',
  Dark = 'textDark',
  AllCaps = 'textAllCaps',
  DarkAllCaps = 'textDarkAllCaps',
}

export type AllButtonTypes = ButtonTypes | TextButtonTypes;

/**
 * The different icon positions.
 */
export enum IconPositions {
  Left = 'iconPositionLeft',
  Right = 'iconPositionRight',
}
