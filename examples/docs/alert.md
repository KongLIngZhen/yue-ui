<y-scroll>

## Alert 提示框
> Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

### 默认

*Demo*

<y-row class="demo-alert">
  <y-col :md="12">
    <y-alert type="primary" title="this is a primary alert !"></y-alert>
    <y-alert type="secondary" title="this is a secondary alert !"></y-alert>
    <y-alert type="success" title="this is a success alert !"></y-alert>
    <y-alert type="danger" title="this is a danger alert !"></y-alert>
    <y-alert type="warning" title="this is a warning alert !"></y-alert>
    <y-alert type="info" title="this is a info alert !"></y-alert>
    <y-alert type="light" title="this is a light alert !"></y-alert>
    <y-alert type="dark" title="this is a warning alert !"></y-alert>
  </y-col>
</y-row>

---

*Code*

```html
<y-alert type="primary" title="this is a primary alert !"></y-alert>
<y-alert type="secondary" title="this is a secondary alert !"></y-alert>
<y-alert type="success" title="this is a success alert !"></y-alert>
<y-alert type="danger" title="this is a danger alert !"></y-alert>
<y-alert type="warning" title="this is a warning alert !"></y-alert>
<y-alert type="info" title="this is a info alert !"></y-alert>
<y-alert type="light" title="this is a light alert !"></y-alert>
<y-alert type="dark" title="this is a warning alert !"></y-alert>
```

### 插槽

*Demo*

<y-row class="demo-alert">
  <y-col :md="12">
    <y-alert type="success">
      <h4 class="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr>
      <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </y-alert>
  </y-col>
</y-row>

---

*Code*

```html
<y-alert type="success">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</y-alert>
```

### 可关闭

*Demo*

<y-row class="demo-alert">
  <y-col :md="12">
    <y-alert type="primary" title="this is a primary alert !" closable></y-alert>
    <y-alert type="danger" closable>
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    </y-alert>
  </y-col>
</y-row>

---

*Code*

```html
<y-alert type="primary" title="this is a primary alert !" isClose></y-alert>
<y-alert type="danger" isClose>
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
</y-alert>
```

### Methods

*Demo*

<y-row class="demo-alert">
  <y-col :md="12">
    <y-button type="primary" size="sm" @click="handleClose">close</y-button>
    <y-button type="primary" size="sm" @click="handleAlert">alert</y-button>
    <y-alert ref="alertDemo" type="warning" title="this is a warning alert !" style="margin-top: 10px"></y-alert>
  </y-col>
</y-row>

---

*Code*

```html
export default {
  methods: {
    handleClose () {
      this.$refs.alertDemo.close()
    },
    handleAlert () {
      this.$refs.alertDemo.alert()
    }
  }
}
<y-button type="primary" size="sm" @click="handleClose">close</y-button>
<y-button type="primary" size="sm" @click="handleAlert">alert</y-button>
<y-alert ref="alertDemo" type="warning" title="this is a warning alert !"></y-alert>
```

*icon*

<y-row class="demo-alert">
  <y-col :md="12">
    <y-alert type="primary" title="this is a primary alert !" icon></y-alert>
    <y-alert type="secondary" title="this is a secondary alert !" icon></y-alert>
    <y-alert type="success" title="this is a success alert !" icon></y-alert>
    <y-alert type="danger" title="this is a danger alert !" icon></y-alert>
    <y-alert type="warning" title="this is a warning alert !" icon></y-alert>
    <y-alert type="info" title="this is a info alert !" icon></y-alert>
    <y-alert type="light" title="this is a light alert !" icon></y-alert>
    <y-alert type="dark" title="this is a warning alert !" icon></y-alert>
  </y-col>
</y-row>

---

*Code*

```html
<y-alert type="primary" title="this is a primary alert !" icon></y-alert>
<y-alert type="secondary" title="this is a secondary alert !" icon></y-alert>
<y-alert type="success" title="this is a success alert !" icon></y-alert>
<y-alert type="danger" title="this is a danger alert !" icon></y-alert>
<y-alert type="warning" title="this is a warning alert !" icon></y-alert>
<y-alert type="info" title="this is a info alert !" icon></y-alert>
<y-alert type="light" title="this is a light alert !" icon></y-alert>
<y-alert type="dark" title="this is a warning alert !" icon></y-alert>
```

*API*

### Alert Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题，必选参数 | string | — | — |
| type | 主题 | string | primary/secondary/success/danger... | — |
| closable | 是否可关闭 | boolean | — | false |
| icon | 是否显示图标 | boolean | — | false |

### Alert Methods
| 参数      | 说明          | 回调参数      |
|---------- |-------------- |---------- |
| alert | 显示alert | — |
| close | 关闭alert | — |

</y-scroll>

<script>
  export default {
    methods: {
      handleClose () {
        this.$refs.alertDemo.close()
      },
      handleAlert () {
        this.$refs.alertDemo.alert()
      }
    }
  }
</script>
