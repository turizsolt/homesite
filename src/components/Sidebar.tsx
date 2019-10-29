import {percent, px} from "csx";
import React, {FC} from 'react';
import {style} from "typestyle";
import {cube} from "../config/StyleTools";
import {SidebarItem} from "./SidebarItem";

const sidebarStyle = style({
  backgroundColor: '#4e9aa8',
  color: 'white',
  width: px(12 * cube),
  height: percent(100),
  transition: '0.5s',
  overflowX: 'hidden',
  fontSize: px(cube),
});

interface Props {
  open: boolean;
}

export const Sidebar: FC<Props> = props => {
  const { open } = props;

  return <div className={sidebarStyle}>
      <SidebarItem open={open} name="Sidebar" />
      <SidebarItem open={open} name="Menu item" />
      <SidebarItem open={open} name="Another menu" />
      <SidebarItem open={open} name="Noch einmal" />
  </div>
};
