# 文件结构说明

## 二次封装 canvas，利用二次封装 canvas 实现渲染表格

[draw](./draw/)文件夹中，`index.ts` 实现了对 `canvas` 的项目所需使用 api 的二次封装，**其中绘制线条处处理了奇数像素线条产生模糊的问题，通过在绘制时进行必要的像素偏移来实现。**；其中 `tableCanvas.ts`是对**渲染表格的逻辑的封装，在其中处理了 dpr 缩放问题。**

[redux](./redux/)中管理了全局 store，例如渲染层的可变配置，交互层的实时交互记录等，都在此记录。

[components](./components/)中管理了所有 DOM 组件，有交互相关的高亮边框组件，交互面板组件，线条伸缩控制条组件等。

[styled](./styled/)，管理了`styled-components`库所创建的`css-in-js`组件。

[tools](./tools/)，管理了一些和表格渲染相关的工具函数。

以及当前目录下的 ts 文件，主要是存放的是经过提取后的表格渲染的逻辑操作函数。