/// <reference types="react" />
import * as React from 'react';
import '@workday/canvas-kit-css-button/dist/canvas-kit-css-button.css';
import { ReactButton, ClassNameProperties } from './types';
declare class IconButton extends React.Component<ReactButton> {
    protected static classes: ClassNameProperties;
    render(): JSX.Element;
}
export default IconButton;
