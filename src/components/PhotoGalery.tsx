import {faChevronCircleLeft, faChevronCircleRight} from "@fortawesome/free-solid-svg-icons";
import {px} from "csx";
import React, {FC, useCallback, useState} from 'react';
import * as ReactDOM from 'react-dom';
import {style} from "typestyle";
import {mobile, notMobile} from "../config/MediaQueries";
import {cube, fixed} from "../config/StyleTools";
import {Icon} from "./Icon";

const imageStyle = style({
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
  maxWidth: '100%',
  maxHeight: '90vh',
});

const imageStepper = style(
    mobile({fontSize: '20px', width: '30px',}),
    notMobile({fontSize: '40px', width: '60px',}),
    {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  }
);

const imageHolder = style(
    mobile({width: 'calc(100vw - 60px)'}),
    notMobile({width: 'calc(100vw - 120px)'}),
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
);

const galery = style({
  display: 'flex',
  overflowX: 'scroll',
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

  const handlePrevImage = useCallback(
      (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.stopPropagation();
        setShown((shown === 0) ? images.length - 1 : shown - 1);
      },
      [shown, images],
  );

  const handleNextImage = useCallback(
      (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.stopPropagation();
        setShown((shown > images.length-2) ? 0 : shown + 1);
      },
      [shown, images],
  );

  return <>
        <div className={galery}>
            {images.map((image, idx) => (
                <img key={idx} src={image} alt={image} className={imageStyle} onClick={handleImageClick(idx)} />
            ))}
        </div>
      { ReactDOM.createPortal(<>
        <div className={show ? fullScreenShow : fullScreenHide} >
        </div>
        <div className={show ? fullScreenShowImage : fullScreenHideImage} onClick={handleFullSceenImageClick}>
          <div className={imageStepper}>
            <Icon icon={faChevronCircleLeft} onClick={handlePrevImage} />
          </div>
          <div className={imageHolder}>
            <img src={images[shown]} alt={images[shown]} className={fullScreenImage} onClick={handleFullSceenImageClick} />
          </div>
          <div className={imageStepper}>
            <Icon icon={faChevronCircleRight} onClick={handleNextImage} />
          </div>
        </div>
      </>, document.getElementById('modal') as Element) }
    </>
};
