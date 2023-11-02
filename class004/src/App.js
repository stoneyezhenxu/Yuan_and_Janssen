
import './App.css'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"


import Home from './pages/Home'
import Me from './pages/Me'
import News from './pages/News'
import MainPage from './pages/MainPage'



class MyFirst extends React.Component {
  // 定义数据
  state = {
    count: 0,
    sayhi: 'hello',
    language: ['java', 'python', 'c++']
  }
  clickHandler = () => {
    console.log(`按钮被点击了！${this.state.count}`)
    // this.state.count += 1
    this.setState(
      {
        count: this.state.count + 1,
        sayhi: 'I am new',
        language: [`java ${this.state.count}`, 'python', 'c++']
      }
    )

  }

  render () {
    console.log("我是render函数")
    return (
      <div>
        <div>我是类组建MyFrist</div>
        <div>
          {this.state.language.map((item, index) => {
            return <div key={index}>{item}</div>
          })}
        </div>

        <h1>{this.state.count} </h1>
        <button onClick={this.clickHandler}> 按钮+1 </button>
      </div>

    )
  }
}



const MySecond = () => {
  const [count, setCount] = useState({ count_value: 8 })
  const clickHandler = () => {
    console.log('clickHandler is pressed')
    setCount({
      count_value: count.count_value + 1
    })
  }

  console.log(`MySecond 函数组建被调用了 ${count}！`)

  return (<div>
    <h2> {count.count_value}</h2>
    <button onClick={clickHandler}> 按钮+1 </button>
  </div>)
}



const MyRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />}>
          <Route path='/main/home' element={<Home />} />
          <Route path="/main/me" element={<Me />} />
          <Route path="/main/news" element={<News />} />
        </Route>


        <Route path="/mySecond" element={<MySecond />} />


      </Routes>
    </BrowserRouter>
  )

}


function App () {
  return (
    <div>
      <MyRouter />
    </div>
  )
}

export default App
