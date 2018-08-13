<y-scroll>

## Nav 导航
> Documentation and examples for how to use Bootstrap’s included navigation components.

<router-view></router-view>

### 默认

*Demo*

<y-row class="demo-nav">
  <y-col :md="12">
    <y-nav>
      <y-nav-item active>Home</y-nav-item>
      <y-nav-item>Price</y-nav-item>
      <y-nav-item disabled>About</y-nav-item>
    </y-nav>
  </y-col>
</y-row>

---

*Code*

```html
<y-nav>
  <y-nav-item active>Home</y-nav-item>
  <y-nav-item>Price</y-nav-item>
  <y-nav-item disabled>About</y-nav-item>
</y-nav>
```

### Nav标签

*Demo*

<y-row class="demo-nav">
  <y-col :md="12">
    <y-nav tag="nav">
      <y-nav-item active>Home</y-nav-item>
      <y-nav-item>Price</y-nav-item>
      <y-nav-item disabled>About</y-nav-item>
    </y-nav>
  </y-col>
</y-row>

---

*Code*

```html
<y-nav tag="nav">
  <y-nav-item active>Home</y-nav-item>
  <y-nav-item>Price</y-nav-item>
  <y-nav-item disabled>About</y-nav-item>
</y-nav>
```

### Justify

*Demo*

<y-row class="demo-nav">
  <y-col :md="12">
    <y-nav justify="center">
      <y-nav-item active>Home</y-nav-item>
      <y-nav-item>Price</y-nav-item>
      <y-nav-item disabled>About</y-nav-item>
    </y-nav>
    <y-nav justify="end">
      <y-nav-item active>Home</y-nav-item>
      <y-nav-item>Price</y-nav-item>
      <y-nav-item disabled>About</y-nav-item>
    </y-nav>
  </y-col>
</y-row>

---

*Code*

```html
<y-nav justify="center">
  <y-nav-item active>Home</y-nav-item>
  <y-nav-item>Price</y-nav-item>
  <y-nav-item disabled>About</y-nav-item>
</y-nav>
<y-nav justify="end">
  <y-nav-item active>Home</y-nav-item>
  <y-nav-item>Price</y-nav-item>
  <y-nav-item disabled>About</y-nav-item>
</y-nav>
```

### Vertical

*Demo*

<y-row class="demo-nav">
  <y-col :md="12">
    <y-nav vertical>
      <y-nav-item active>Home</y-nav-item>
      <y-nav-item>Price</y-nav-item>
      <y-nav-item disabled>About</y-nav-item>
    </y-nav>
  </y-col>
</y-row>

---

*Code*

```html
<y-nav vertical>
  <y-nav-item active>Home</y-nav-item>
  <y-nav-item>Price</y-nav-item>
  <y-nav-item disabled>About</y-nav-item>
</y-nav>
```

### Pills

*Demo*

<y-row class="demo-nav">
  <y-col :md="12">
    <y-nav pills>
      <y-nav-item active>Home</y-nav-item>
      <y-nav-item>Price</y-nav-item>
      <y-nav-item disabled>About</y-nav-item>
    </y-nav>
  </y-col>
</y-row>

---

*Code*

```html
<y-nav pills>
  <y-nav-item active>Home</y-nav-item>
  <y-nav-item>Price</y-nav-item>
  <y-nav-item disabled>About</y-nav-item>
</y-nav>
```

### Fill and justify

*Demo*

<y-row class="demo-nav">
  <y-col :md="12">
    <y-nav pills fill>
      <y-nav-item active>Home</y-nav-item>
      <y-nav-item>Price</y-nav-item>
      <y-nav-item disabled>About</y-nav-item>
    </y-nav>
  </y-col>
</y-row>

---

*Code*

```html
<y-nav pills fill>
  <y-nav-item active>Home</y-nav-item>
  <y-nav-item>Price</y-nav-item>
  <y-nav-item disabled>About</y-nav-item>
</y-nav>
```

*API*

### Nav Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| tag | 导航标签 | string | ul/nav | ul |
| justify | 导航对齐 | string | center/end | — |
| vertical | 是否垂直 | boolean | — | false |
| pills | 胶囊导航 | boolean | — | false |
| fill | 导航填充 | boolean | — | false |

### NavItem Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| active | 当前活动标签 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |

</y-scroll>

