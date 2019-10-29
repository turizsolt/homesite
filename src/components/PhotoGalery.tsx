import {em, px} from "csx";
import React, {FC, MouseEventHandler, useCallback, useState} from 'react';
import * as ReactDOM from 'react-dom';
import {style} from "typestyle";
import {cube, fixed} from "../config/StyleTools";
import {Tag} from "./Tag";

const imageStyle = style({
  width: px(6 * cube),
  height: px(4 * cube),
  marginRight: px(.5 * cube),
  cursor: 'pointer',
});

const fullScreenShow = style(fixed,
    {
      zIndex: 5,
      background: 'black',
      opacity: 0.75,
      transition: '0.5s',
    }
);

const fullScreenHide = style(fixed,
    {
      zIndex: -1,
      background: 'black',
      opacity: 0,
      transition: '0.5s',
    }
);

const fullScreenShowImage = style(fixed,
    {
      zIndex: 6,
      opacity: 1,
      transition: '0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
);

const fullScreenHideImage = style(fixed,
    {
      zIndex: -1,
      opacity: 0,
      transition: '0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
);

const fullScreenImage = style({
  cursor: 'pointer',
  maxWidth: '90vw',
  maxHeight: '90vh',
});

interface Props {
    images: string[];
}

export const PhotoGalery: FC<Props> = props => {
    const { images } = props;

    const [shown, setShown] = useState(0);
    const [show, setShow] = useState(false);

    const handleImageClick = useCallback(
        (idx: number) => (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
            setShow(true);
            setShown(idx);
        },
        [],
    );

  const handleFullSceenImageClick = useCallback(
      (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        setShow(false);
      },
      [],
  );

    return <>
        <div style={{ display: 'flex', overflowX: 'scroll' }}>
            {images.map((image, idx) => (
                <img key={idx} src={image} alt={image} className={imageStyle} onClick={handleImageClick(idx)} />
            ))}
        </div>
      { ReactDOM.createPortal(<>
        <div className={show ? fullScreenShow : fullScreenHide}>
        </div>
        <div className={show ? fullScreenShowImage : fullScreenHideImage}>
          <img src={images[shown]} alt={images[shown]} className={fullScreenImage} onClick={handleFullSceenImageClick} />
        </div>
      </>, document.getElementById('modal') as Element) }
    </>
};
