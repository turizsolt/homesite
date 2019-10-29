import {em, px} from "csx";
import React, { FC } from 'react';
import {style} from "typestyle";
import {cube} from "../config/StyleTools";
import {Tag} from "./Tag";

const imageStyle = style({
  width: px(6 * cube),
  height: px(4 * cube),
  marginRight: px(.5 * cube),
});

const dividerStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

const tagContainerStyle = style({
  marginTop: em(1),
});

interface Props {
  name: string;
  image: string;
  description: string;
  techTags: string[];
  skillTags: string[];
}

export const Project: FC<Props> = props => {
  const { name, image, description, techTags, skillTags } = props;

  return <div>
    <h1>{name}</h1>
    <div className={dividerStyle}>
      <div style={{ display: 'flex', overflowX: 'hidden' }}>
        <img src={image} alt={image} className={imageStyle} />
        <img src={image} alt={image} className={imageStyle} />
        <img src={image} alt={image} className={imageStyle} />
        <img src={image} alt={image} className={imageStyle} />
      </div>
      <div style={{ flexGrow: 1 }}>
        <section>
          {description}
        </section>
        <div className={tagContainerStyle}>
          {techTags.map((tag, idx) => <Tag key={idx} name={tag} />)}
        </div>
        <div className={tagContainerStyle}>
          {skillTags.map((tag, idx) => <Tag dark key={idx} name={tag} />)}
        </div>
      </div>
    </div>
  </div>;
};
