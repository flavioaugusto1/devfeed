import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ userComment, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(userComment);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/flavioaugusto1.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Flávio Augusto</strong>
              <time
                title="23 de janeiro as 17:16h"
                dateTime="2023-01-2024 17:16:20"
              >
                A cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{userComment}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
