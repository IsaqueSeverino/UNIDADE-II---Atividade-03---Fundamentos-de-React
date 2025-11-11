import styles from './styles.module.css';

type Props = React.ComponentProps<"div"> & {
    letra: string[],
}

export function Word({ letra, ...rest }: Props) {
    return (
        <div className={styles.container} {...rest}>
            {letra.map((l, i) => (
                <div key={i}>
                    <span>{l}</span>
                </div>
            ))}
        </div>
    );
}