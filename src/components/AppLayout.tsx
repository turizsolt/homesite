import {percent, px} from "csx";
import React, {FC, useCallback, useState} from 'react';
import {classes, media, style} from "typestyle";
import {mobile, notMobile} from "../config/MediaQueries";
import {cube, fixed} from "../config/StyleTools";
import {Content} from "./Content";
import {Icon} from "./Icon";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Sidebar} from "./Sidebar";

const appLayoutStyle = style(fixed, {
    display: 'flex',
    fontFamily: 'Ubuntu, sans-serif',
});

const headerBar = style(
    fixed,
    mobile({
        width: percent(100),
    }),
    notMobile({
        width: px (12 * cube),
    }),
    {
        display: 'flex',
        backgroundColor: '#456789',
        color: 'white',
        height: px(2 * cube),
        lineHeight: px(2 * cube),
        fontSize: px(cube),
        zIndex: 2,
        transition: '0.5s',
    },
);

const sideMenu = style(fixed, {
    top: px(2 * cube),
    zIndex: 2,
    transition: '0.5s',
    overflow: 'hidden',
});

const sideMenuShow = style({ width: px (12 * cube)});
const sideMenuHide = style(
    mobile({ width: 0 }),
    notMobile({ width: px (12 * cube)})
);

const menuOutClickShow = style(fixed, {
    top: px(2 * cube),
    opacity: 0,
    zIndex: 1,
    display: 'block',
});
const menuOutClickHide = style({
    display: 'none',
});

const content = style(
    fixed,
    mobile({
        top: px(2 * cube),
        left: 0,
    }),
    notMobile({
        top: 0,
        left: px (12 * cube),
    }),
    {
        backgroundColor: '#51a0af',
        overflowY: 'scroll',
        transition: '0.5s',
    }
);

const iconContainer = style({
    width: px(2 * cube),
    height: px(2 * cube),
    textAlign: 'center',
    '$nest': {
        '&:hover': {
            backgroundColor: '#649ead',
            borderRadius: px(cube),
            cursor: 'pointer',
        },
    },
});

const reallySmall = style(
    fixed,
    media({minWidth: 300}, {display: 'none'}),
    media({maxWidth: 299}, {display: 'flex'}),
    {
        zIndex: 100,
        backgroundColor: '#b5d7e4',
        color: '#127fa2',
        justifyContent: 'center',
        alignItems: 'center',
    }
);

const reallySmallInner = style({
    textAlign: 'center',
});

export const AppLayout: FC<{}> = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleToggleSideMenu = useCallback(
      () => {
          setShowMenu(!showMenu);
      },
      [showMenu],
    );

    const handleCloseSideMenu = useCallback(
        () => {
            setShowMenu(false);
        },
        [],
    );

    return <div className={appLayoutStyle}>
        <div className={headerBar}>
            <div className={iconContainer}>
            <Icon onClick={handleToggleSideMenu} icon={faBars} />
            </div>
            <div>This is my HomeSite...</div>
        </div>
        <div className={classes(sideMenu, showMenu ? sideMenuShow : sideMenuHide)}>
            <Sidebar open={showMenu} />
        </div>
        <div className={showMenu ? menuOutClickShow : menuOutClickHide} onClick={handleCloseSideMenu} />
        <div className={content}>
            <Content/>
            { /*
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sagittis leo, vitae ultrices quam. Donec sodales sollicitudin neque et fringilla. Donec sollicitudin augue nisl, pharetra iaculis felis consectetur vel. Vivamus dui purus, volutpat auctor orci maximus, vehicula fermentum enim. Cras lobortis scelerisque elementum. Sed ultrices, ante a tincidunt iaculis, purus lectus malesuada orci, sit amet bibendum ante massa vestibulum orci. Duis tincidunt id quam ac dignissim. Cras euismod feugiat risus, vitae commodo nibh pretium id.
            Vestibulum nec tortor commodo, convallis eros non, egestas purus. Suspendisse potenti. In semper consectetur velit nec varius. Nullam imperdiet malesuada luctus. Aenean vel egestas odio. Sed dignissim orci ac sapien volutpat, vitae consequat urna fermentum. Maecenas ac dictum massa. Nulla quis ligula odio. Quisque tempus tellus eget mi porta, vitae eleifend sapien dapibus. Maecenas ac sapien quis nisl viverra dictum. Proin volutpat diam mauris, accumsan vehicula augue porta nec. Aenean ut venenatis elit. Sed dignissim non justo sit amet gravida.
            Vestibulum non lobortis ipsum. Quisque quis tortor vel odio gravida condimentum non maximus tortor. Proin ultricies orci ac leo pellentesque, sed pulvinar velit pulvinar. Nam egestas auctor imperdiet. Vivamus nec elit eu nisi sodales pulvinar id non ante. Nulla orci orci, egestas quis sem at, porta eleifend justo. Aliquam nunc turpis, laoreet ac elementum nec, fringilla nec mi. Sed varius lectus sit amet ante consequat, a porta justo tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eu enim aliquam elit tristique tristique. Donec eu metus nulla.
            Integer ultrices quis lacus quis sagittis. Morbi orci augue, porttitor luctus purus sit amet, tristique ultricies mi. Morbi tempus metus ut luctus iaculis. Aliquam erat volutpat. Pellentesque tellus magna, vestibulum vitae turpis non, luctus dignissim felis. Pellentesque pellentesque tempor tellus et tempus. Morbi blandit ultricies quam, in finibus mi ullamcorper in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales turpis vel pellentesque varius. Aenean ut tincidunt risus. Integer in tincidunt magna. Praesent feugiat facilisis leo, sit amet tristique nunc varius nec.
            Vivamus in felis pulvinar dui elementum tincidunt vel eget orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque convallis porta lacus, quis venenatis lorem molestie ac. Nulla efficitur nisi enim, ut accumsan leo bibendum sit amet. Etiam luctus erat at venenatis suscipit. Donec facilisis sed arcu ac tincidunt. Donec sit amet libero in leo mattis interdum non porttitor mi. Quisque malesuada gravida ultrices.
            */ }
        </div>
        <div className={reallySmall}>
            <div className={reallySmallInner}>
                Please increase window size to see content.
            </div>
        </div>
    </div>;
};
