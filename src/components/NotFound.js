import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return <div className={styles.wrapper}>
    <p className={styles.text}>No data can be found for this time, but here are some swimming chicks.</p>
    <StaticImage
      src="../images/tidbits/chicks.png"
      alt="Data not found"
      className={styles.chicks}
      width={800}
      placeholder="tracedSVG"
    />
  </div>
}

export default NotFound;