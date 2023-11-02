import { Outlet, useNavigate } from "react-router-dom"


import styles from './index.module.css'

const MainPage = () => {

  const navigate = useNavigate()

  return (<div>

    <div className={styles.top}>我是Mainpage页</div>

    <Outlet />
    <div className={styles.bottomNva}>
      <button onClick={() => {
        console.log('点击了me')
        navigate('/main/me')
      }}>Me </button>
      <button onClick={() => {
        console.log('点击了Home')
        navigate('/main/home')
      }}>Home </button>
      <button onClick={() => {
        console.log('点击了news')
        navigate('/main/news')
      }}>News </button>
    </div>
  </div>)
}


export default MainPage