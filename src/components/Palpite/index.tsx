import styles from './styles.module.css'

type Props = React.ComponentProps<"div"> & {
    palpite: number
    reiniciar?: () => void
}

export function Palpite({ palpite, reiniciar, ...rest }: Props) {
    return (
        <div className={styles.container} {...rest}>
            <span>Palpite</span>

            <div>
                <div>
                    <span>{palpite}</span>
                </div>

                <button onClick={reiniciar}>Confirmar</button>
            </div>
        </div>
    )
}