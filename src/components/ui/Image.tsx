interface IProps {
  imageUrl: string;
  imageAlt: string;
  className?: string;
  style?: React.CSSProperties;
}
const Image = ({ imageUrl, imageAlt, className, style }: IProps) => {
  return (
    <>
      <img src={imageUrl} alt={imageAlt} className={className} style={style} />
    </>
  );
};
export default Image;
