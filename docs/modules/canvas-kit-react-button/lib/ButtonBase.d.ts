/// <reference types="react" />
import * as React from 'react';
import '@workday/canvas-kit-css-button/dist/canvas-kit-css-button.css';
import { ReactButton, ClassNameProperties } from './types';
export interface ButtonBaseProps {
    btnClasses?: ClassNameProperties;
    btnProps?: ReactButton;
}
declare class ButtonBase extends React.Component<ButtonBaseProps> {
    protected static classes: ClassNameProperties;
    render(): JSX.Element;
}
export default ButtonBase;
