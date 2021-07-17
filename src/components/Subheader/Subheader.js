import styles from './Subheader.module.scss';

const Subheader = props => {
  return <div className={styles.Subheader}>{props.children}</div>;
};

export default Subheader;
