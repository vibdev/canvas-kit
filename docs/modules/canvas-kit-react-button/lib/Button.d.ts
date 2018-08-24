/// <reference types="react" />
import * as React from 'react';
import '@workday/canvas-kit-css-button/dist/canvas-kit-css-button.css';
import { ReactButton, ButtonTypes, ButtonSizes } from './types';
export interface ButtonProps {
    buttonType?: ButtonTypes;
    buttonSize?: ButtonSizes;
}
declare class Button extends React.Component<ReactButton & ButtonProps> {
    static Types: typeof ButtonTypes;
    static Sizes: typeof ButtonSizes;
    render(): JSX.Element;
}
export default Button;
