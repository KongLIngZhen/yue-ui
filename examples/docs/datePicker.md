<y-scroll>

## DatePicker 日期时间选择器
> 用于选择日期时间

### 默认

*Demo*

<y-row class="demo-datepicker">
  <y-col :md="12">
    <y-datepicker v-model="datepicker"></y-datepicker>
    <label style="margin-left: 30px">datepicker值：{{ datepicker }}</label>
  </y-col>
</y-row>

---

*Code*

```html
<y-datepicker v-model="datepicker"></y-datepicker>
```

</y-scroll>

<script>
  export default {
    data () {
      return {
        datepicker: '2017/03/15'
      }
    }
  }
</script>

<style scoped>

</style>
