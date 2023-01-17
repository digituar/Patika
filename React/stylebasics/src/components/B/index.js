import styles from './styles.module.css'

console.log("B", styles);

function index() {
  return (
    <div className={styles.title}>B</div>
  )
}

export default index