import styles from "../page.module.css"
import Form from '../components/loginForm';

const LoginForm = () => {

  return (
      <div className={styles.all}>
        <div className={styles.header1}>
          <h2 className="text-6xl font-bold">Welcome to Paralia Ofrinio!</h2>
        </div>
        <Form/>
      </div>
    
  );
};

export default LoginForm;