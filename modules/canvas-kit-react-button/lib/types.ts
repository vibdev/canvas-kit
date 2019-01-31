/**
 * The different button sizes.
 */
export enum ButtonSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

// TODO (beta button): consolidate all these button types
/**
 * The different button types.
 */
export enum ButtonTypes {
  Primary = 'primary',
  Secondary = 'secondary',
  Delete = 'delete',
}

export enum BetaButtonTypes {
  Primary = 'betaPrimary',
  Secondary = 'betaSecondary',
  Delete = 'betaDelete',
  Highlight = 'highlight',
  OutlinePrimary = 'outlinePrimary',
  OutlineSecondary = 'outlineSecondary',
  OutlineInverse = 'outlineInverse',
}

export enum IconButtonTypes {
  Default = 'iconSecondary',
  IconPlain = 'iconPlain',
  IconPrimary = 'iconPrimary',
  IconPrimaryFilled = 'iconPrimaryFilled',
  IconInverse = 'iconInverse',
  IconInverseFilled = 'iconInverseFilled',
}

export enum IconButtonSizes {
  Small = 'small',
  Medium = 'medium',
}

/**
 * The different icon positions.
 */
export enum IconPositions {
  Left = 'iconPositionLeft',
  Right = 'iconPositionRight',
}

export enum TextButtonTypes {
  Default = 'text',
  Inverse = 'textInverse',
  AllCaps = 'textAllCaps',
  InverseAllCaps = 'textInverseAllCaps',
}

export type AllButtonTypes = ButtonTypes | BetaButtonTypes | TextButtonTypes | IconButtonTypes;
