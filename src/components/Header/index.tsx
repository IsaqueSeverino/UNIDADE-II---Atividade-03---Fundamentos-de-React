import styles from "./styles.module.css"

type Props = React.ComponentProps<"header"> & {
    texto: number,
    texto2: string,
    src: string,
    reiniciar?: () => void
}

export function Header({texto, texto2, src, reiniciar, ...rest}: Props) {
    return (
        <header className={styles.container} {...rest}>
            <div>
                <span><span>{texto}</span> {texto2}</span>

                <img src={src} alt="" onClick={reiniciar}/>
            </div>
        </header>
    )
}

