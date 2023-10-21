## 1.  Class001 内容: 

主要内容： 前端的基础知识

### 1.1 盒子模型

CSS盒模型本质上是一个盒子，封装周围的HTML元素，

它包括：边距（margin），边框（border），填充（padding），和实际内容（content）

```html
<style>
	.box{
        margin: 30px;
        padding: 40px;
        height: 200px;
        width: 200px;
        border: 5px solid grey;
    
    }
</style>
<body>
	 <div class="box">盒子模型</div>
</body>
```



![img](https://pics0.baidu.com/feed/aa18972bd40735fa938ddf1d693fddb50e24088e.jpeg?token=561ee748b88e6be6d74981ad84099790)





#### 1.1.1  margin

外边距：定义元素与另外一个元素之间的距离。

```
margin-top:100px;
margin-bottom:100px;
margin-right:50px;
margin-left:50px;

可简写：
margin:25px 50px 75px 100px;
上:25px； 右: 50px; 下:75px; 左:100px
口令：上右下左，顺时针方向
```

#### 1.1.2  border

边框：定义元素的边框及其样式

```
 border-width: 属性为边框指定宽度。
 border-color：边框颜色
 border-style: 边框样式
 dotted: 定义一个点线边框
 dashed: 定义一个虚线边框
 solid: 定义实线边框

可简写,
border: 5px soid red 
边框大小5px, 实线、红色
```

#### 1.1.3 padding

内边距：定义：元素内部离边框的距离。

```
padding-top:25px;
padding-bottom:25px;
padding-right:50px;
padding-left:50px;



可简写：
2个值分别为 “上下” 和 “左右”
4个值分别 为“上右下左”

padding:25px 50px;
上下填充25px; 左右填充50px

padding:25px 50px 75px 100px;
上25；右50，下75，左100
口令：上右下左：顺时针方向
```



### 1.2 Flex布局

Flex, Flexible Box的缩写，意为弹性布局。display:flex

采用Flex布局的元素，称为Flex容器(flex container)，简称容器。

容器默认存在两根轴: 水平的**主轴(main axis)**和垂直的 **交叉轴**(cross axis)



![img](https://img-blog.csdnimg.cn/a07988d7b90b49c38999360a769d304a.png)



#### 

1.2.1 flex-direction属性: 决定主轴的方向，即项目的排列方向

默认值row

```
row:默认值，主轴为水平方向，起点在左端
row-reverse:主轴为水平方向，起点在右段
column:主轴为垂直方向，起点在上方
column-reverse:主轴为垂直方向，起点在下方
```

2. flex-wrap属性: 决定一条轴线排不下该如何换行

```
nowrap:默认值，不换行
wrap：换行，第一行在上方 
wrap-reverse：换行，第一行在下方 
```

3、justify-content属性： 定义了项目在主轴上(main axis)的对齐方式

默认值：flex-start

```
flex-start：默认值左对齐
flex-end：右对齐
center：居中
space-between：两端对齐，项目之间的间隔都相等
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍
space-evenly: 每个项目两侧的间隔相等，且项目之间的间隔和项目与边框的间隔相等
```

4、align-items属性： 定义项目在交叉轴上如何对齐 （元素只有一行的情况）

默认值：stretch

```
flex-start：交叉轴的起点对齐
flex-end：价差周的终点对齐
center：交叉轴的中点对齐
baseline：项目的第一行文字的基线对齐
stretch：默认值，如果项目未设置height,将占满整个容器的高度
```

5、 align-content属性：定义了多跟轴线的对齐方式，如果项目只有一根轴线，该属性不起作用 （元素多行的情况，单行情况下设置无效）

默认值：strech

```
flex-start：与交叉轴的起点对齐
flex-end：与交叉轴的终点对齐
center：与交叉轴的中点对齐
space-between：与检查周两端对齐，轴线之间的间隔平均分布
space-around，没跟轴线两侧的间隔都相等。所以，轴线之间的间隔与轴线与边框的的间隔大一倍
strech：默认值轴线占满整个交叉轴
space-evenly: 每个项目两侧的间隔相等，且项目之间的间隔和项目与边框的间隔相等
```

6、flex属性

```
flex: 多个元素按比例占比尺寸
```



7、example

```html

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Flex布局介绍</title>
    </link>
</head>

<style>
    #container{
        display: flex;
        width: 400px;
        height: 400px;
        background-color: bisque;
    }

    .item{
        height: 50px;
        width: 50px;
        background-color: rgb(228, 224, 224);
        border: 1px solid black;        
    }

</style>

<body>

    <div id="container">
        <div class="item block1">item1</div>
        <div class="item block2">item2</div>
        <div class="item block3">item3</div>
        <div class="item block4">item4</div>
    </div>

</body>
```



### 1.3 制作微信我的页面



## 2. Class002 内容:

主要内容： React 及 脚手架



#### 2.1 配合bilibili视频讲解React的基础知识 (重要‼️)

https://www.bilibili.com/video/BV1Z44y1K7Fj?p=3&vd_source=16c5afd96ce4d2246ec73f7ef1b8eb01



#### 2.2 react的脚手架

```
npx create-react-app react_demo(项目名)

1）删除多余的文件
2）npm run start  启动服务
```

#### 2.3 函数式组件

#### 2.4 箭头函数

### 2.5 把class001的内容改写成react的框架

​		

## 3. Class003内容：

#### 	3.1 下载第三方组件 ant-mobile

```shell
npm install --save antd-mobile
```

#### 	3.2 如何利用ant-mobile构建底部标签栏目

#### 	3.3 如何让页面之间的样式互相不干扰

```
1） 构建module样式： xxx.module.css 
2） 导入样式： import styles from '...'
3） className = {styles.样式名称}
4） 从前端页面查看样式名：被修改成 “页面_样式名_哈希码”， 确保独一无二 
```

#### 	3.4 作业：

​	利用ant design mobile组件库 的Form表单组件完成如下：

​				1）设计并完成登陆页面

​				2）设计并完成注册页面

​				3） 要求点击登陆和注册页面，能够拿到注册信息。

​	需要尝试自学，如何添加按钮的点击事件，
​	Form表单的内容如何获取等。









## 参考资料

### 1. 设计原型

https://www.figma.com/

### 2. 图标库 

https://www.iconfont.cn/

### 3. UI 组件库

网页： https://ant.design/

Mobile: https://mobile.ant.design/

### 4.React脚手架

https://create-react-app.dev/docs/getting-started

