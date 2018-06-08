import CanvasIcon, { IconTypes } from '@workday/icon-utils/types/icon'

export function validateIconType(icon: CanvasIcon, expectedType: IconTypes) {
  if (icon.type !== expectedType) {
    throw `${icon.name}: Icon type "${icon.type}" does not match expected type "${expectedType}"`
  }
}
