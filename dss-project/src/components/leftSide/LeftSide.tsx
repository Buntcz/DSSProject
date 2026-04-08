import styles from '../../App.module.css'
import type { Todo } from '../../types/Todo'

export function LeftSide(props: {todos: Todo[]}) {
    return (
        <div className={styles.leftSide}></div>
    )
}