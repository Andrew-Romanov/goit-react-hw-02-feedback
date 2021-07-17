import styles from './PageHeader.module.scss';

const PageHeader = props => {
  return <div className={styles.PageHeader}>{props.children}</div>;
};

export default PageHeader;
