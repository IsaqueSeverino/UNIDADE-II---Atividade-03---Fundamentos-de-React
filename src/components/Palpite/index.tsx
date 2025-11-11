import styles from './styles.module.css'

type Props = React.ComponentProps<"div"> & {
    palpite: string,
    setPalpite: (v: string) => void,
    adicionarLetra?: () => void
    disabled?: boolean
}

export function Palpite({ palpite, adicionarLetra, disabled, setPalpite, ...rest }: Props) {
    return (
        <div className={styles.container} {...rest}>
            <span>Palpite</span>

            <div>
                <input
                    className={styles.input}
                    type="text"
                    maxLength={1}
                    value={palpite}
                    onChange={e => setPalpite(e.target.value.toUpperCase().replace(/[^A-ZÀ-ÿ]/, ""))}
                    disabled={disabled}
                    placeholder=""
                />

                <button className={styles.button} onClick={adicionarLetra} disabled={disabled || !palpite}>Confirmar</button>
            </div>
        </div>
    )
}