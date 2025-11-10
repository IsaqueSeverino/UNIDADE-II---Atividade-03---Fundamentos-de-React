import styles from "./styles.module.css"

type Props = React.ComponentProps<"img"> & {
    src: string
}

export function Logo({ src, ...rest}: Props) {
    return (
        <div className={styles.container} {...rest}>
            <img src={src} alt="" />
        </div>
    )
}

