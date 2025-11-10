import styles from "./styles.module.css"

type Props = React.ComponentProps<"div"> & {
    texto: string,
    texto2: string,
    src: string
}

export function Tip({src, texto, texto2, ...rest}: Props) {
    return (
        <div className={styles.container} {...rest}>
            <img src={src} alt="" />

            <div>
                <span className={styles.span1}>{texto}</span>
                <span className={styles.span2}>{texto2}</span>   
            </div>
        </div>
    )
}