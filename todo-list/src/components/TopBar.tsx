import styles from './TopBar.module.css';
import Rocket from '../assets/rocket.svg';

export function TopBar() {
  return (
    <div className={styles.topbar}>
      <img src={Rocket} alt="Imagem de um foguete" />
      <span className={styles.blueText}>to</span>
      <span className={styles.purpleDarkText}>do</span>
    </div>
  )
}