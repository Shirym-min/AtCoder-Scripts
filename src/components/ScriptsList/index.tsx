import listindex from "@/assets/scriptslist.json"
import styles from "./base.module.css"

type Language = "en" | "ja"

type ScriptItem = {
  id: number
  name: string
  description: string
  description_ja?: string
  url: string
  version: string
}

export default function ScriptsList({ lang }: { lang: Language }) {
  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <h2>{lang === "ja" ? "スクリプト一覧" : "Scripts"}</h2>
      </div>
      {listindex.map((script: ScriptItem) => {
        const description = lang === "ja" ? script.description_ja ?? script.description : script.description
        return (
          <a key={script.id} href={script.url} target="_blank" rel="noreferrer">
            <article className={styles.section}>
              <h3>{script.name}</h3>
              <p>{description}</p>
              <div>{script.version}</div>
            </article>
          </a>
        )
      })}
    </section>
  )
}

