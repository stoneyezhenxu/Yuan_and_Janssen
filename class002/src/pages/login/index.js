
import { Form, Input } from 'antd-mobile'

import styles from './index.module.css'
const Login = () => {
  return (<div className={styles.form}>
    <Form layout='horizontal'>
      <Form.Item label='用户名' name='username'>
        <Input placeholder='请输入用户名' clearable />
      </Form.Item>
      <Form.Item label='密码' name='password'>
        <Input placeholder='请输入密码' clearable type='password' />
      </Form.Item>
    </Form>

  </div>)
}

export default Login