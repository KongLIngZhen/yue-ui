<y-scroll>

## Breadcrumb 提示框
> Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.

### 默认

*Demo*

<y-row class="demo-alert">
  <y-col :md="12">
    <y-breadcrumb>
      <y-breadcrumb-item><a href="#">Home</a></y-breadcrumb-item>
      <y-breadcrumb-item>Library</y-breadcrumb-item>
      <y-breadcrumb-item>Data</y-breadcrumb-item>
    </y-breadcrumb>
  </y-col>
</y-row>

---

*Code*

```html
<y-breadcrumb>
  <y-breadcrumb-item><a href="#">Home</a></y-breadcrumb-item>
  <y-breadcrumb-item>Library</y-breadcrumb-item>
  <y-breadcrumb-item>Data</y-breadcrumb-item>
</y-breadcrumb>
```

### 分隔符

*Demo*

<y-row class="demo-alert">
  <y-col :md="12">
    <y-breadcrumb separator=">">
      <y-breadcrumb-item><a href="#">Home</a></y-breadcrumb-item>
      <y-breadcrumb-item>Library</y-breadcrumb-item>
      <y-breadcrumb-item>Data</y-breadcrumb-item>
    </y-breadcrumb>
  </y-col>
</y-row>

---

*Code*

```html
<y-breadcrumb separator=">">
  <y-breadcrumb-item><a href="#">Home</a></y-breadcrumb-item>
  <y-breadcrumb-item>Library</y-breadcrumb-item>
  <y-breadcrumb-item>Data</y-breadcrumb-item>
</y-breadcrumb>
```


*API*

### Breadcrumb Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符 | string | — | / |

</y-scroll>

