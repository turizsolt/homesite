import {em} from "csx";
import React, { FC } from 'react';
import {style} from "typestyle";
import {PhotoGalery} from "./PhotoGalery";
import {Tag} from "./Tag";

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
      <PhotoGalery images={[image, image, image, image]} />
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
