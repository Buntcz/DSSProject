import styles from '../../App.module.css'
import type { Todo } from '../../types/Todo'

export function RightSide(props: {todos: Todo[]}) {
    return(<div className={styles.rightSide}></div>)
}