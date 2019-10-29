import {px} from "csx";
import React, {FC} from 'react';
import {classes, style} from "typestyle";
import {mobile, notMobile} from "../config/MediaQueries";
import {cube} from "../config/StyleTools";

const menuStyle = style({
  width: px(12 * cube),
  transition: '0.5s',
  paddingTop: px(.5 * cube),
  paddingBottom: px(.5 * cube),
  paddingLeft: px(cube),
  paddingRight: px(cube),
  '$nest': {
    '&:hover': {
      backgroundColor: '#649ead',
      cursor: 'pointer',
    },
  },
});

const menuOpenStyle = style({
  opacity: 1,
});

const menuClosedStyle = style(
    mobile({opacity: 0}),
    notMobile({opacity: 1}),
);

interface Props {
  open: boolean;
  name: string;
}

export const SidebarItem: FC<Props> = props => {
  const { open, name } = props;

  return <div className={classes(menuStyle, open ? menuOpenStyle : menuClosedStyle)}>{name}</div>;
};
