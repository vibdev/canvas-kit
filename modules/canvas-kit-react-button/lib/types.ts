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
  OutlinePrimary = 'outlinePrimary',
  OutlineSecondary = 'outlineSecondary',
  OutlineInverse = 'outlineInverse',
  BetaPrimary = 'betaPrimary',
  BetaSecondary = 'betaSecondary',
  BetaDelete = 'betaDelete',
}

export enum TextButtonTypes {
  Default = 'text',
  Inverse = 'textInverse',
  AllCaps = 'textAllCaps',
  InverseAllCaps = 'textInverseAllCaps',
}

export type AllButtonTypes = ButtonTypes | TextButtonTypes;

/**
 * The different icon positions.
 */
export enum IconPositions {
  Left = 'iconPositionLeft',
  Right = 'iconPositionRight',
}
