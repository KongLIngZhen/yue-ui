<y-scroll>

## Progress 进度条
> 用于展示操作进度，告知用户当前状态和预期。

### 默认

*Demo*

<y-row class="demo-progress">
  <y-col :md="12">
    <y-progress :percentage="30"></y-progress>
  </y-col>
</y-row>
<y-row class="demo-progress">
  <y-col :md="12">
    <y-progress :percentage="50" :label="true"></y-progress>
  </y-col>
</y-row>
<y-row class="demo-progress">
  <y-col :md="12">
    <y-progress :percentage="100" :label="true"></y-progress>
  </y-col>
</y-row>

---

*Code*

```html
<y-progress :percentage="30"></y-progress>
<y-progress :percentage="50" :label="true"></y-progress>
```

### Height

*Demo*

<y-row class="demo-progress">
  <y-col :md="12">
    <y-progress :percentage="30" :height="1"></y-progress>
  </y-col>
</y-row>
<y-row class="demo-progress">
  <y-col :md="12">
    <y-progress :percentage="50" :height="40" :label="true"></y-progress>
  </y-col>
</y-row>

---

*Code*

```html
<y-progress :percentage="30" :height="1"></y-progress>
<y-progress :percentage="30" :height="40"></y-progress>
```

### 状态

*Demo*

<y-row class="demo-progress">
  <y-col :md="12">
    <y-progress :percentage="30" status="danger"></y-progress>
  </y-col>
</y-row>
<y-row class="demo-progress">
  <y-col :md="12">
    <y-progress :percentage="50" status="warning"></y-progress>
  </y-col>
</y-row>
<y-row class="demo-progress">
  <y-col :md="12">
    <y-progress :percentage="80" status="info"></y-progress>
  </y-col>
</y-row>
<y-row class="demo-progress">
  <y-col :md="12">
    <y-progress :percentage="100" status="success"></y-progress>
  </y-col>
</y-row>

---

*Code*

```html
<y-progress :percentage="30" status="danger"></y-progress>
<y-progress :percentage="50" status="warning"></y-progress>
<y-progress :percentage="80" status="info"></y-progress>
<y-progress :percentage="100" status="success"></y-progress>
```

### Striped

*Demo*

<y-row class="demo-progress">
  <y-col :md="12">
    <y-progress :percentage="30" status="danger" striped></y-progress>
  </y-col>
</y-row>
<y-row class="demo-progress">
  <y-col :md="12">
    <y-progress :percentage="50" status="warning" striped></y-progress>
  </y-col>
</y-row>
<y-row class="demo-progress">
  <y-col :md="12">
    <y-progress :percentage="70" striped></y-progress>
  </y-col>
</y-row>
<y-row class="demo-progress">
  <y-col :md="12">
    <y-progress :percentage="80" status="info" striped></y-progress>
  </y-col>
</y-row>
<y-row class="demo-progress">
  <y-col :md="12">
    <y-progress :percentage="100" status="success" striped></y-progress>
  </y-col>
</y-row>

---

*Code*

```html
<y-progress :percentage="30" striped></y-progress>
```

</y-scroll>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .demo-progress {
    margin-bottom: 10px;
  }
</style>
