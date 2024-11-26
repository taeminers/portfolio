interface SpaceProps {
  height?: number;
}

export const Space = ({ height }: SpaceProps) => {
  return <div style={{ height: height }} />;
};
