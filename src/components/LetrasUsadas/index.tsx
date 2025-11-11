import styles from './styles.module.css'

type Props = React.ComponentProps<"div"> & {
    letra: string;
}

export function LetrasUsadas({ letra }: Props) {
    return (
        <div className={styles.container}>
            <span>Letras usadas</span>

            <div>
                <div>
                    <span>{letra}</span>
                </div>

    
            </div>
        </div>
    )
}