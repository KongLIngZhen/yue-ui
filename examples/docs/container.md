<y-scroll>

## Container 布局
> H5标签布局容器

### 常见布局

*Demo*

<y-section class="demo-container">
  <y-header>Header</y-header>
  <y-section>
    <y-aside>aside</y-aside>
    <y-main>main</y-main>
  </y-section>
  <y-footer>Footer</y-footer>
</y-section>

---

*Code*

```html
<y-section>
  <y-header>Header</y-header>
  <y-section>
    <y-aside>aside</y-aside>
    <y-main>main</y-main>
  </y-section>
  <y-footer>Footer</y-footer>
</y-section>
```

---

*API*

### Section Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | 弹性盒元素方向 | string | vertical/horizontal | — |

### Header Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | 底栏高度 | string | — | 60px |

</y-scroll>

<style>
  .demo-container {

  }
  .demo-container header {
    background-color: #26b99a;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    line-height: 60px
  }
  .demo-container aside {
    background-color: #546080;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    line-height: 200px
  }
  .demo-container main {
    padding: 0px;
    background-color: #eeeeee;
    box-sizing: border-box;
    text-align: center;
    color: #333;
    line-height: 200px
  }
  .demo-container footer {
    padding: 0px;
    background-color: #353a3c;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    line-height: 60px;
  }
</style>
