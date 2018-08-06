<y-scroll>

## Layout 布局
> 内置 [Bootstrap4](https://github.com/twbs/bootstrap) 网格系统布局

### 基础布局

*Demo*

<y-container class="demo-layout">
  <y-row>
    <y-col :md="12">col-md-12</y-col>
  </y-row>
  <y-row>
    <y-col :md="6">col-md-6</y-col>
    <y-col :md="6">col-md-6</y-col>
  </y-row>
  <y-row>
    <y-col :md="4">col-md-4</y-col>
    <y-col :md="4">col-md-4</y-col>
    <y-col :md="4">col-md-4</y-col>
  </y-row>
  <y-row>
    <y-col :md="3">col-md-3</y-col>
    <y-col :md="3">col-md-3</y-col>
    <y-col :md="3">col-md-3</y-col>
    <y-col :md="3">col-md-3</y-col>
  </y-row>
  <y-row>
    <y-col :md="2">col-md-2</y-col>
    <y-col :md="2">col-md-2</y-col>
    <y-col :md="2">col-md-2</y-col>
    <y-col :md="2">col-md-2</y-col>
    <y-col :md="2">col-md-2</y-col>
    <y-col :md="2">col-md-2</y-col>
  </y-row>
</y-container>

---

*Code*

```html
<y-container>
  <y-row>
    <y-col :md="12">col-md-12</y-col>
  </y-row>
  <y-row>
    <y-col :md="6">col-md-6</y-col>
    <y-col :md="6">col-md-6</y-col>
  </y-row>
  <y-row>
    <y-col :md="4">col-md-4</y-col>
    <y-col :md="4">col-md-4</y-col>
    <y-col :md="4">col-md-4</y-col>
  </y-row>
  <y-row>
    <y-col :md="3">col-md-3</y-col>
    <y-col :md="3">col-md-3</y-col>
    <y-col :md="3">col-md-3</y-col>
    <y-col :md="3">col-md-3</y-col>
  </y-row>
  <y-row>
    <y-col :md="2">col-md-2</y-col>
    <y-col :md="2">col-md-2</y-col>
    <y-col :md="2">col-md-2</y-col>
    <y-col :md="2">col-md-2</y-col>
    <y-col :md="2">col-md-2</y-col>
    <y-col :md="2">col-md-2</y-col>
  </y-row>
</y-container>
```

---

*API*
### Container Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| fluid | 全宽度 | boolean | — | true |

### Col Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| xs | `<480px` 特小屏 | number/object (例如： {span: 4, offset: 4}) | — | — |
| sm | `≥480px` 小屏 | number/object (例如： {span: 4, offset: 4}) | — | — |
| md | `≥720px` 中屏 | number/object (例如： {span: 4, offset: 4}) | — | — |
| lg | `≥992px` 大屏 | number/object (例如： {span: 4, offset: 4}) | — | — |
| xl | `≥1200px` 特大屏 | number/object (例如： {span: 4, offset: 4}) | — | — |

</y-scroll>

<style>
  .demo-layout div div {
    padding: 5px;
    border: 1px solid #fff;
    margin: 3px 0;
    background-color: #26b99a;
    box-sizing: border-box;
    text-align: center;
    color: #333;
  }
</style>
