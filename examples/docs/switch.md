<y-scroll>

## Switch 开关
> 用于状态切换的开关

### 默认

*Demo*

<y-row class="demo-switch">
  <y-col :md="12">
    <y-switch v-model="yswitch"></y-switch>
    <label style="margin-left: 30px">yswitch值：{{ yswitch }}</label>
  </y-col>
</y-row>

---

*Code*

```html
<y-switch v-model="yswitch"></y-switch>
```

### 扩展Value

*Demo*

<y-row class="demo-switch">
  <y-col :md="12">
    <y-switch
      v-model="yswitch2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-value="100"
      inactive-value="0"
    >
    </y-switch>
    <label style="margin-left: 30px">yswitch2值：{{ yswitch2 }}</label>
  </y-col>
</y-row>

---

*Code*

```html
<y-switch v-model="yswitch2" active-color="#13ce66" inactive-color="#ff4949" active-value="100" inactive-value="0"></y-switch>
```

### 禁用

*Demo*

<y-row class="demo-switch">
  <y-col :md="12">
    <y-switch v-model="yswitch3" disabled></y-switch>
    <label style="margin-left: 30px">yswitch3值：{{ yswitch3 }}</label>
  </y-col>
</y-row>

---

*Code*

```html
<y-switch v-model="yswitch3" disabled></y-switch>
```

</y-scroll>

<script>
  export default {
    data () {
      return {
        yswitch: false,
        yswitch2: '100',
        yswitch3: true
      }
    }
  }
</script>

<style scoped>

</style>
