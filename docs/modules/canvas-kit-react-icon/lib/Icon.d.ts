/// <reference types="react" />
import * as React from 'react';
import { CSSProperties } from '@workday/canvas-kit-react-core';
import { CanvasIcon, CanvasIconTypes } from '@workday/design-assets-types';
import { SpanProps } from './types';
export declare type CSSPropertiesFunction = (...args: any[]) => CSSProperties;
export interface IconProps {
    icon: CanvasIcon;
    styles: CSSProperties | CSSPropertiesFunction;
    size?: number;
    elemProps?: SpanProps;
    type: CanvasIconTypes;
}
export default class Icon extends React.Component<IconProps> {
    render(): JSX.Element | null;
}
