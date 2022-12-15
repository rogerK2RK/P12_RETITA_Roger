import React from "react";
import styles from "./styles.module.css"
import { Link } from "react-router-dom";

function ErrorPage() {
    return(
        <div className={styles["error-content"]}>
            <h2 className={styles["errorNumber"]}>404</h2>
            <p className={styles["errorMessage"]}>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to={"/"} className={styles["link-to-home"]}>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default ErrorPage ;