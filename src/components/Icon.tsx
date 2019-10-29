import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

export interface Props {
    icon: IconProp;
    onClick?: () => void;
    color?: string;
}

export type IconProp = IconProp;

export const Icon: FC<Props> = props => {
    const { icon, onClick, color } = props;

    return (
        <FontAwesomeIcon color={color} size="sm" icon={icon} onClick={onClick} />
    );
};
