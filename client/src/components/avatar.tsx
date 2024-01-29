type IProps = {
  src?: string;
  styles?: string;
};

export const Avatar = ({ src = "", styles = "" }: IProps) => {
  console.log(src);
  return <img src={src} alt="profile image" className={styles} />;
};
