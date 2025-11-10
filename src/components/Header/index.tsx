import styles from "./styles.module.css"

type Props = React.ComponentProps<"header"> & {
    texto: string,
    texto2: string,
    src: string
}

export function Header({texto, texto2, src, ...rest}: Props) {
    return (
        <header className={styles.container} {...rest}>
            <div>
                <span><span>{texto}</span> {texto2}</span>

                <img src={src} alt="" />
            </div>
        </header>
    )
}

