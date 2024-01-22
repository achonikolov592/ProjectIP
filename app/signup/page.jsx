import React from 'react'
import styles from "../page.module.css"
import Form from '../components/loginForm';
const SignUp = () => {
  return (
    <div>
        <div className={styles.all}>
        <div className={styles.header1}>
          <h2 className="text-6xl font-bold">Welcome to Paralia Ofrinio!</h2>
        </div>
        <Form/>
      </div>
    </div>
  )
}

export default SignUp