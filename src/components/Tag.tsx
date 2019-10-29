import {rem} from "csx";
import React, { FC } from 'react';
import {classes, style} from "typestyle";

const tagStyle = style({
  display: 'inline-block',
  fontSize: rem(1),
  padding: rem(.5),
  borderRadius: rem(1),
  marginRight: rem(.5),
});

const tagLightStyle = style({
  backgroundColor: '#4c93a2',
});

const tagDarkStyle = style({
  backgroundColor: '#127fa2',
});

interface Props {
  name: string;
  dark?: boolean;
}

export const Tag: FC<Props> = props => {
    const { dark, name } = props;

    return <span className={classes(tagStyle, dark ? tagDarkStyle : tagLightStyle)}>{name}</span>;
};
