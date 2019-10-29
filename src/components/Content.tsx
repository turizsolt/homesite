import {em, px} from "csx";
import React, { FC } from 'react';
import {style} from "typestyle";
import {Project} from "./Project";

const contentStyle = style({
  flexGrow: 1,
  padding: em(2),
  color: 'white',
  fontSize: px(20),
  maxWidth: px(800),
  borderRight: '1px dashed #c7d9de',
});

const data = [
  {
    name: 'Die Fahrplan',
    image: 'fahrplan.png',
    description: 'Menetrend tervező- és optimalizáló játék, amelyben a legtöbb utast a leghatékonyabban kell elszállítsuk. De lehet akár az is, hogy három sorba törik be ez az egész...',
    techTags: ['3D', 'TypeScript', 'ES6', 'babylon.js'],
    skillTags: ['git/GitHub', 'CleanCode', 'SOLID', 'RandomBullshit'],
  },
  {
    name: 'Másik szoftver',
    image: 'fahrplan.png',
    description: 'Ide egy teljesen másik szoftver leírása fog kerülni, ami nem olyan, mint az egyik, hanem tökmás.',
    techTags: ['React', 'Redux', 'Saga', 'node.js', 'mongo', 'TypeScript', 'ES6'],
    skillTags: ['git/GitHub', 'CleanCode', 'SOLID', 'RandomBullshit'],
  },
  {
    name: 'Harmadik szoftver',
    image: 'fahrplan.png',
    description: 'Ide egy teljesen másik szoftver leírása fog kerülni, ami nem olyan, mint az egyik, hanem tökmás.',
    techTags: ['React', 'Redux', 'Saga', 'node.js', 'mongo', 'TypeScript', 'ES6'],
    skillTags: ['git/GitHub', 'CleanCode', 'SOLID', 'RandomBullshit'],
  },
];

export const Content: FC<{}> = () => {
  return <div className={contentStyle}>
    {data.map((elem, idx) => <Project key={idx} {...elem} />)}
  </div>;
};
