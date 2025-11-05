import Archive from "./Archive";
import ArchiveArrow from "./ArchiveArrow";

export { ArchiveArrow, Archive };

export const variants = [
  {
    variant: "outline",
    slug: "ArchiveArrow",
    Component: ArchiveArrow,
    componentName: "ArchiveArrow",
  },
  {
    variant: "outline",
    slug: "Archive",
    Component: Archive,
    componentName: "Archive",
  },
];

export default { ArchiveArrow, Archive };
