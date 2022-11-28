import styles from '../../styles/Home.module.css'

export default function Storage() {
  return (
    <main>
      <h2 className="text-4xl mb-8 mt-8 font-black">Storage</h2>
      <div className={styles.list}>
        <ul>
          <li>Potatoes</li>
          <li>Rice</li>
          <li>Celery</li>
          <li>Chilli</li>
          <li>Rice</li>
          <li>Celery</li>
          <li>Chilli</li>
        </ul>
      </div>
    </main>
  )
}
