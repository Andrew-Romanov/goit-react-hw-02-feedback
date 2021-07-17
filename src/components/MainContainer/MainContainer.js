import styles from './MainContainer.module.scss';
// import './MainContainer.css';

const MainContainer = props => {
  return (
    // <div className="MainContainer">{props.children}</div>
    <div className={styles.MainContainer}>{props.children}</div>
  );
};

export default MainContainer;
