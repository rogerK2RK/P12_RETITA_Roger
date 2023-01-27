import React from 'react';
import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import User from '../../assets/icons/user.svg';

/**
 * return box of all the users
 * @returns 
 */
function Home() {
  return (
    <div className={styles["Users-box"]}>
      <Link to="/user/12" className={styles["one-users"]}><img alt='icone-user' className={styles["icon-user"]} src={User}/><p>User 12</p></Link>
      <Link to="/user/18" className={styles["one-users"]}><img alt='icone-user' className={styles["icon-user"]} src={User}/><p>User 18</p></Link>
    </div>

  );
}

export default Home ;





