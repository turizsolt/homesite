import {media} from "typestyle";
import {CSSProperties} from "typestyle/lib/types";
import {cube} from "./StyleTools";

const mobileWidth = 40 * cube;
const tabletWidth = 60 * cube;

export const mobile = (props: CSSProperties) => media({maxWidth: mobileWidth}, props);
export const notMobile = (props: CSSProperties) => media({minWidth: mobileWidth}, props);

export const tablet = (props: CSSProperties) => media({minWidth: mobileWidth - 1, maxWidth: tabletWidth}, props);
export const notTablet = (props: CSSProperties):CSSProperties[] => (
    [
        media({maxWidth: mobileWidth - 1}, props),
        media({minWidth: tabletWidth}, props),
    ]
);

export const desktop = (props: CSSProperties) => media({minWidth: tabletWidth - 1}, props);
export const notDesktop = (props: CSSProperties) => media({maxWidth: tabletWidth - 1}, props);

/* Usage:

const mobileStyle = style(
    {},
    mobile({display: 'block'}),
    notMobile({display: 'none'}),
);

const tabletStyle = style(
    {},
    tablet({display: 'block', backgroundColor: 'blue'}),
    ...notTablet({display: 'none'})
);

const desktopStyle = style(
    {},
    desktop({display: 'block'}),
    notDesktop( {display: 'none'}),
);

const divStyle = style(
    {width: percent(100)},
);
 */
