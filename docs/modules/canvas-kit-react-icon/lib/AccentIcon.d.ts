/// <reference types="react" />
import * as React from 'react';
import { CanvasAccentIcon } from '@workday/design-assets-types';
import { SpanProps } from './types';
export interface AccentIconStyles {
    color?: string;
    transparent?: boolean;
}
export interface AccentIconProps extends AccentIconStyles {
    icon: CanvasAccentIcon;
    size?: number;
}
export default class AccentIcon extends React.Component<SpanProps & AccentIconProps> {
    render(): JSX.Element;
}
