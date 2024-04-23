import type { NextPage } from "next";
import styles from "./index.module.css";

const MaskGroup: NextPage = () => {
  return (
    <div className={styles.maskGroup}>
      <img className={styles.unionIcon} alt="" src="/union.svg" />
    </div>
  );
};

export default MaskGroup;
