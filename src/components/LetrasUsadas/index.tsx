import styles from './styles.module.css'

type Props = React.ComponentProps<"div"> & {
    letras: string[];
    letrasCorretas: string[];
}

export function LetrasUsadas({ letras, letrasCorretas }: Props) {
    return (
        <div className={styles.container}>
            <span>Letras usadas</span>
            <div className={styles.letrasBox}>
                {letras.map((l, i) => (
                    <span
                        key={l + i}
                        className={letrasCorretas.includes(l) ? styles.correta : styles.errada}
                    >
                        {l}
                    </span>
                ))}
            </div>
        </div>
    );
}