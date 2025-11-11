import styles from './styles.module.css'

type Props = React.ComponentProps<"div"> & {
    palpite: number
}

export function Palpite({ palpite }: Props) {
    return (
        <div className={styles.container}>
            <span>Palpite</span>

            <div>
                <div>
                    <span>{palpite}</span>
                </div>

                <button>Confirmar</button>
            </div>
        </div>
    )
}