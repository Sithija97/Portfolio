type IProps = {
  src?: string;
  styles?: string;
};

export const Avatar = ({ src, styles = "" }: IProps) => {
  return <img src={src} alt="profile image" className={styles} />;
};
