import styles from './styles.module.css';

type Props = React.ComponentProps<"div"> & {
    letra: string,
}

export function Word({letra, ...rest}: Props) {

    return (
        <div className={styles.container} {...rest}>
            <div>
                <span>{letra}</span>
            </div>

            <div>
                <span>{letra}</span>
            </div>

            <div>
                <span>{letra}</span>
            </div>

            <div>
                <span>{letra}</span>
            </div>

            <div>
                <span>{letra}</span>
            </div>
            
        </div>
    )

}