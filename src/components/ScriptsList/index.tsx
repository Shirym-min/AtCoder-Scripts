import listindex from "@/assets/scriptslist.json"
import styles from "./base.module.css"

export default function ScriptsList() {
  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <h2>Script List</h2>

      </div>
      {listindex.map((script) => (
        <a href={script.url} target="_blank" rel="noreferrer">
          <article key={script.id} className={styles.section}>
            <h3>{script.name}</h3>
            <p>{script.description}</p>

            {script.version}

          </article>
        </a>
      ))}
    </section>
  )
}
