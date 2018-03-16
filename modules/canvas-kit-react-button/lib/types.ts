import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export interface ClassNameProperties {
  [key: string]: boolean
}

export enum ButtonTypes {
  Primary,
  Secondary,
  Delete,
}

export enum ButtonSizes {
  Small,
  Medium,
  Large,
}

export type ReactButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
