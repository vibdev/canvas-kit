/// <reference types="react" />
import * as React from 'react';
import { CanvasSystemIcon } from '@workday/design-assets-types';
import { SpanProps } from './types';
export interface SystemIconStyles {
    accent?: string;
    accentHover?: string;
    background?: string;
    backgroundHover?: string;
    color?: string;
    colorHover?: string;
    fill?: string;
    fillHover?: string;
}
export interface SystemIconProps extends SystemIconStyles {
    icon: CanvasSystemIcon;
    size?: number;
}
export default class SystemIcon extends React.Component<SpanProps & SystemIconProps> {
    render(): JSX.Element;
}
