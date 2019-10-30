import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import {classes, style} from "typestyle";

const pointer = style({
    cursor: 'pointer',
});

export interface Props {
    icon: IconProp;
    onClick?: (e: React.MouseEvent<any, MouseEvent>) => void;
    color?: string;
}

export type IconProp = IconProp;

export const Icon: FC<Props> = props => {
    const { icon, onClick, color } = props;

    return (
        <FontAwesomeIcon color={color} size="sm" icon={icon} onClick={onClick} className={classes(onClick && pointer)} />
    );
};
