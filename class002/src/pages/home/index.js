import { Badge, TabBar, Swiper, Toast } from 'antd-mobile'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'


import img1 from '../../assets/imgs/avatar.png'
import img2 from '../../assets/imgs/cardbag.png'
import img3 from '../../assets/imgs/qrcode.png'
import img4 from '../../assets/imgs/shoucang.png'

// import './index.css'
import styles from './index.module.css'

const Home = () => {

  const items = [img1, img2, img3, img4].map((item, index) => {
    return <Swiper.Item key={index}>
      <div className={styles.swiper_img} onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`)
      }}>
        <img src={item} />
      </div>

    </Swiper.Item>
  })

  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />
    },
    {
      key: 'todo',
      title: '待办',
      icon: <UnorderedListOutline />,
    },
    {
      key: 'message',
      title: '消息',
      icon: <MessageFill />,

    },
    {
      key: 'personalCenter',
      title: '我的',
      icon: <UserOutline />,
    },
  ]


  return (<div >


    <Swiper
      loop
      autoplay
      onIndexChange={i => {
        console.log(i, 'onIndexChange1')
      }}
    >
      {items}
    </Swiper>


    <div className={styles.tabbar}>
      <TabBar>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}

      </TabBar>
    </div>


  </div>)
}


export default Home