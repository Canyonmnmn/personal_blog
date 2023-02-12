---
title: 给flex项目设定flex:1真的可以做到均分么？
date: 2022-10-23
tags: [Web开发,css, 文章分享]
categories: [文章分享, Web开发]
---



##### 	在本篇笔记开始之前，先提出这样2个问题，**flex项目的大小是由谁决定？**给flex项目都设置flex：1真的可以做到均分吗？

---



​	在使用FlexBox布局中，显性的给flex项目设尺寸大小，但是这样其实并不能最后框定项目的最终大小。它还受**flex容器的尺寸**，**flex项目的flex-grow**，**flex项目的flex-shrink**，以及假定的**flex-basis大小**（这点后面讨论，什么是假定的flex-basis大小）影响。

#### 	回顾一下flex-basis的作用：

​	flex-basis属性会在空间分配发生之前，对flex项目的尺寸大小进行初始化操作。简单点来说，就是在容器剩余空间和不足空间分配发生之前初始化flex项目尺寸。	

​	flex-basis可以设置的值和css中的width属性一样：

* 默认值：**auto**，根据内容来计算。
* 固定值：<**length**>,数值加上固定单位的长度值（100px）
* 相对值：<**length**-**percentage**>,(100vw)
* 动态计算值：**calc**()
* 内在尺寸：**min-content，max-content，fit-content**

#### 	Flex-basis的计算

​	在开头提及到，影响flex项目尺寸大小的有4个因素，将它划分成俩个计算过程

* flex项目尺寸大小的属性权重计算
* flex容器空间（多余或不足空间），**flex-grow 、flex-shink** 以及**初始化 flex-basis 相关参数计算后的 flex-basis 值**。

​	这里主要讨论的是第一个计算过程，第二个计算过程只是根据比例分配或者缩小空间的计算。

​	在第一个计算过程中，当flex项目同时出现flex-basis，width，min-width或者max-width时，究竟是何者决定着计算后的flex-basis大小。

   事实上，flex布局模块初始化flex项目的尺寸时，存在一个公式

  >##### flex-basis > width > content
  >
  >**如果 Flex 项目未显式指定** **`flex-basis`** **属性的值，那么** **`flex-basis`** **将回退到****`width`** **属性；如果 Flex 项目同时都未显式指定** **`flex-basis`** **和** **`width`** **属性的值，那么****`flex-basis`** **将回退到基于 Flex 项目的内容计算宽度** 。

#### 第一个计算过程得到的flex-basis就是前面所说的假定flex-basis的值。

---

​	关于flex-basis的总结就先到这，平时写样式时，经常用到的一个属性**flex**。

​	回顾下flex的属性值，它比较特殊，可以指定1个值/2个值/3个值

* flex为单值

  * 一个**无单位**数值，会被当成flex-grow属性的值

    ```css
    .item{
      flex:1;
      
      /* 等同于*/
      flex-grow:1;
      flex-grow:1;
      flex-basis:0%;
    }
    ```

  * 一个有效长度值，比如flex：30vw

    ```css
    .item {
      flex: 30vw;
        
      /* 等同于 */
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 30vw;
    }
    ```

* flex为双值，前者为flex-grow，后者有俩种情况

  * 一个无单位的数值（`<number>`），它会被当作 `flex-shrink` 属性的值；

  * 一个有效的长度值（`<length-percentage>`），它会被当作 `flex-basis` 属性的值。

    ```css
    .item {
      flex: 1 2;
      
      /* 等同于 */
      flex-grow: 1;
      flex-shrink: 2;
      flex-basis: 0%;
    }
    ​
    .item {
      flex: 2 30vw;
      
      /* 等同于 */
      flex-grow: 2;
      flex-shrink: 1;
      flex-basis: 30vw;
    }
    ```

* flex为三值，就是flex-grow，flex-shrink，flex-basis的值

​	关于flex有一个误区，在一些教学视频中，告诉我们如果需要在一个容器内，每个flex项目的宽度（或高度）相等，就是所谓的均分，只需要在项目上设置flex：1。其实并非如此，如果第一个flex项目内容比其他flex项目略宽一点的话，就达不到均分效果。

​	![flex1](/Users/canyon/project/typora代码截图/flex1.jpeg)

​	如果要实现均分，可以设置min-width为0，不过这是什么原理呢？

​    以下省略计算过程....

​	简要总结，在第一个计算过程后得出的初始化flex-basis，这个初始化flex-basis进入到第二个计算过程中，作为一个参数，它影响着第二次计算出来的flex-basis的值。

​	我们只需要知道，当我们设置flex：1时候，flex-basis被显性的设置成了0%。它在公式中是一个减数。当减数为0的时候，其实就是它不再影响着初始化flex-basis的计算了。

最后经过俩次计算，就得到了一个纯洁无暇的flex-basis值，注意这个值还不是最后的值。

还需要和width以及content比较...

##### 	回到准则：flex-basis > width > content，设置min-width是为了让这个比较始终是flex-basis胜出。

---

