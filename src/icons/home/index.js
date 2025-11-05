import HomeOutline from "./HomeOutline";
import HomeSolid from "./HomeSolid";
import HomeMini from "./HomeMini";

export { HomeOutline, HomeSolid, HomeMini };

export const variants = [
  {
    variant: "outline",
    slug: "home-outline",
    Component: HomeOutline,
    componentName: "HomeOutline",
  },
  {
    variant: "solid",
    slug: "home-solid",
    Component: HomeSolid,
    componentName: "HomeSolid",
  },
  {
    variant: "mini",
    slug: "home-mini",
    Component: HomeMini,
    componentName: "HomeMini",
  },
];

export default { HomeOutline, HomeSolid, HomeMini };
