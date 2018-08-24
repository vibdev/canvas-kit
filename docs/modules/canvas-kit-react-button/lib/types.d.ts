/// <reference types="react" />
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
export interface ClassNameProperties {
    [key: string]: boolean;
}
export declare enum ButtonTypes {
    Primary = 0,
    Secondary = 1,
    Delete = 2,
}
export declare enum ButtonSizes {
    Small = 0,
    Medium = 1,
    Large = 2,
}
export declare type ReactButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
