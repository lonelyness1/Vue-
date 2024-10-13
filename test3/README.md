# test3

### 组件

ParentComponent.vue

绑定子组件A和B，

可以传递信息给子组件和从子组件中改变值

当收到子组件的信息后展示

ChildComponentA.vue

给父组件发送信息

ChildComponentB.vue

调用父组件中函数改变父组件中的counter

### 路由

index.js

设置不用的path路径跳转到对应的界面 如登录，父组件，子组件A,子组件B界面

同时设置路由守卫检查页面的登录状态，若是没有登录会被路由守卫强制跳转到登录界面

### **当刚进入页面时导航进入登录界面**

![alt](https://uploadfiles.nowcoder.com/images/20241013/111160062_1728801294748/29A440C6DD4788666BAD963AD84098CC)

### **点击登录按钮模拟用户的登录，登录之后登录按钮变成登出按钮并导航至父组件页面，且父组件和子组件之间已有交流的值**

![alt](https://uploadfiles.nowcoder.com/images/20241013/111160062_1728801319688/B40E58EE4B958FF629714ACD24829224)

### **接着点击A组件中的按钮将信息发给父组件显示信息**

![alt](https://uploadfiles.nowcoder.com/images/20241013/111160062_1728801344388/D93703F5A2DE8AE384CC48BD6080049F)

### 然后点击B组件中的按钮调用父组件中的函数增加计数的值

![alt](https://uploadfiles.nowcoder.com/images/20241013/111160062_1728801401858/9F5B1F29B6434A7D2E8DEC57CD3B3295)

### 如果未点击登录就访问父组件，则会被路由守卫拦截

![alt](https://uploadfiles.nowcoder.com/images/20241013/111160062_1728800945661/AF32986DCCEDEFCF1B0B721822EF3948)

### 也可直接通过访问URL 进入子组件AB进行查看，当然这里的子组件由于没有被父组件绑定和使用 所以这里会展示的为空的页面，函数也无法正常调用。

![alt](https://uploadfiles.nowcoder.com/images/20241013/111160062_1728801474573/D2B5CA33BD970F64A6301FA75AE2EB22)

### 详细情况可以查看代码
