/// <reference types="react" />
import * as React from 'react';
import { BrandingColors } from '@workday/canvas-kit-react-core';
import { CanvasAppletIcon } from '@workday/design-assets-types';
import { SpanProps } from './types';
export interface AppletIconStyles {
    color?: BrandingColors;
}
export interface AppletIconProps extends AppletIconStyles {
    icon: CanvasAppletIcon;
    size?: number;
}
export default class AppletIcon extends React.Component<SpanProps & AppletIconProps> {
    static Colors: typeof BrandingColors;
    render(): JSX.Element;
}
