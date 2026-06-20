import React from 'react'
import styles from './Loader.module.css';
import { BeatLoader} from "react-spinners";

const Loader = () => {
  return (
    <div className={styles.Loader}>
        <BeatLoader width="100px" height="100px" strokeWidth="3" color="#f35d42"/>
    </div>
  )
}

export default Loader