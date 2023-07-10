import { LocalGithubUser } from "types";
import styles from "./UserState.module.scss";

export interface UserStateProps
  extends Pick<LocalGithubUser, "repos" | "followers" | "following"> {}

export const UserState = ({ followers, following, repos }: UserStateProps) => (
  <div className={styles.userStat}>
    <div className={styles.info}>
      <div className={styles.infoTitle}>Repos</div>
      <div className={styles.infoNumber}>{repos}</div>

      <div className={styles.infoTitle}>Following</div>
      <div className={styles.infoNumber}>{following}</div>

      <div className={styles.infoTitle}>Followers</div>
      <div className={styles.infoNumber}>{followers}</div>
    </div>
  </div>
);
