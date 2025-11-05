import Icon from "./Icon";
import HomeOutline from "./home/HomeOutline";
import HomeSolid from "./home/HomeSolid";
import HomeMini from "./home/HomeMini";
import YouTubeOutline from "./youtube/YouTubeOutline";
import InstagramOutline from "./instagram/InstagramOutline";
import TwitterOutline from "./twitter/TwitterOutline";
import GitHubOutline from "./github/GitHubOutline";
import FacebookOutline from "./facebook/FacebookOutline";
import LinkedInOutline from "./linkedin/LinkedInOutline";
import { Archive, ArchiveArrow } from "./archive";

export {
  Icon,
  HomeOutline,
  HomeSolid,
  HomeMini,
  YouTubeOutline,
  InstagramOutline,
  TwitterOutline,
  GitHubOutline,
  FacebookOutline,
  LinkedInOutline,
  ArchiveArrow,
  Archive,
};

// Grouped icons with variants — preview app reads this structure
export const icons = [
  {
    name: "Home",
    variants: [
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
    ],
  },
  {
    name: "YouTube",
    variants: [
      {
        variant: "outline",
        slug: "youtube",
        Component: YouTubeOutline,
        componentName: "YouTubeOutline",
      },
    ],
  },
  {
    name: "Instagram",
    variants: [
      {
        variant: "outline",
        slug: "instagram",
        Component: InstagramOutline,
        componentName: "InstagramOutline",
      },
    ],
  },
  {
    name: "Twitter",
    variants: [
      {
        variant: "outline",
        slug: "twitter",
        Component: TwitterOutline,
        componentName: "TwitterOutline",
      },
    ],
  },
  {
    name: "GitHub",
    variants: [
      {
        variant: "outline",
        slug: "github",
        Component: GitHubOutline,
        componentName: "GitHubOutline",
      },
    ],
  },
  {
    name: "Facebook",
    variants: [
      {
        variant: "outline",
        slug: "facebook",
        Component: FacebookOutline,
        componentName: "FacebookOutline",
      },
    ],
  },
  {
    name: "LinkedIn",
    variants: [
      {
        variant: "outline",
        slug: "linkedin",
        Component: LinkedInOutline,
        componentName: "LinkedInOutline",
      },
    ],
  },
  {
    name: "ArchiveArrow",
    variants: [
      {
        variant: "outline",
        slug: "ArchiveArrow",
        Component: ArchiveArrow,
        componentName: "ArchiveArrow",
      },
    ],
  },
  {
    name: "Archive",
    variants: [
      {
        variant: "outline",
        slug: "Archive",
        Component: Archive,
        componentName: "Archive",
      },
    ],
  },
];

export default {
  Icon,
  HomeOutline,
  HomeSolid,
  HomeMini,
  YouTubeOutline,
  InstagramOutline,
  TwitterOutline,
  GitHubOutline,
  FacebookOutline,
  LinkedInOutline,
  ArchiveArrow,
  Archive,
};
