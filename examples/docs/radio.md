<y-scroll>

## Radion 单选框
> 一组选项中进行单选

### 默认

*Demo*

<y-row>
  <y-col :md="12">
    <y-radio v-model="radio" label="1">选项1</y-radio>
    <y-radio v-model="radio" label="2">选项2</y-radio>
    <label style="margin-left: 30px">radio值：{{ radio }}</label>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-radio v-model="radio" label="1">选项1</y-radio>
    <y-radio v-model="radio" label="2">选项2</y-radio>
  </y-col>
</y-row>
```

### 禁用

*Demo*

<y-row>
  <y-col :md="12">
    <y-radio disabled v-model="radio1" label="1">选项1</y-radio>
    <y-radio disabled v-model="radio1" label="2">选项2</y-radio>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-radio disabled v-model="radio1" label="1">选项1</y-radio>
    <y-radio disabled v-model="radio1" label="2">选项2</y-radio>
  </y-col>
</y-row>
```

### 单选框组

*Demo*

<y-row>
  <y-col :md="12">
    <y-radio-group v-model="radio2" @change="handleChange">
      <y-radio label="A">A</y-radio>
      <y-radio label="B">B</y-radio>
      <y-radio label="C">C</y-radio>
    </y-radio-group>
    <label style="margin-left: 30px">radio2Change：{{ radio2Change }}</label>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-radio-group v-model="radio2" @change="handleChange">
      <y-radio label="A">A</y-radio>
      <y-radio label="B">B</y-radio>
      <y-radio label="C">C</y-radio>
    </y-radio-group>
    <label>radio2Change：{{ radio2Change }}</label>
  </y-col>
</y-row>
```

### 按钮类型

*Demo*

<y-row>
  <y-col :md="12">
    <y-radio-group button v-model="radio3" size="sm" type="primary">
      <y-radio label="One">One</y-radio>
      <y-radio label="Two">Two</y-radio>
      <y-radio label="Three">Three</y-radio>
    </y-radio-group>
    <label style="margin-left: 30px;margin-right: 30px">radio3值：{{ radio3 }}</label>
    <y-radio-group button v-model="radio3" size="sm" type="primary" plain>
      <y-radio label="One">One</y-radio>
      <y-radio label="Two">Two</y-radio>
      <y-radio label="Three">Three</y-radio>
    </y-radio-group>
  </y-col>
  <y-col :md="12" style="margin-top: 10px">
    <y-radio-group button v-model="radio3">
      <y-radio label="One">One</y-radio>
      <y-radio label="Two">Two</y-radio>
      <y-radio label="Three">Three</y-radio>
    </y-radio-group>
    <label style="margin-left: 30px;margin-right: 30px">radio3值：{{ radio3 }}</label>
    <y-radio-group button v-model="radio3" plain>
      <y-radio label="One">One</y-radio>
      <y-radio label="Two">Two</y-radio>
      <y-radio label="Three">Three</y-radio>
    </y-radio-group>
  </y-col>
  <y-col :md="12" style="margin-top: 10px">
    <y-radio-group button v-model="radio3" size="lg" type="success">
      <y-radio label="One">One</y-radio>
      <y-radio label="Two">Two</y-radio>
      <y-radio label="Three">Three</y-radio>
    </y-radio-group>
    <label style="margin-left: 30px;margin-right: 30px">radio3值：{{ radio3 }}</label>
    <y-radio-group button v-model="radio3" size="lg" type="success" plain>
      <y-radio label="One">One</y-radio>
      <y-radio label="Two">Two</y-radio>
      <y-radio label="Three">Three</y-radio>
    </y-radio-group>
  </y-col>
</y-row>

---

*Code*

```html
<y-col :md="12">
  <y-radio-group button v-model="radio3" size="sm" type="primary">
    <y-radio label="One">One</y-radio>
    <y-radio label="Two">Two</y-radio>
    <y-radio label="Three">Three</y-radio>
  </y-radio-group>
  <y-radio-group button v-model="radio3" size="sm" type="primary" plain>
    <y-radio label="One">One</y-radio>
    <y-radio label="Two">Two</y-radio>
    <y-radio label="Three">Three</y-radio>
  </y-radio-group>
</y-col>
<y-col :md="12">
  <y-radio-group button v-model="radio3">
    <y-radio label="One">One</y-radio>
    <y-radio label="Two">Two</y-radio>
    <y-radio label="Three">Three</y-radio>
  </y-radio-group>
  <y-radio-group button v-model="radio3" plain>
    <y-radio label="One">One</y-radio>
    <y-radio label="Two">Two</y-radio>
    <y-radio label="Three">Three</y-radio>
  </y-radio-group>
</y-col>
<y-col :md="12">
  <y-radio-group button v-model="radio3" size="lg" type="success">
    <y-radio label="One">One</y-radio>
    <y-radio label="Two">Two</y-radio>
    <y-radio label="Three">Three</y-radio>
  </y-radio-group>
  <y-radio-group button v-model="radio3" size="lg" type="success" plain>
    <y-radio label="One">One</y-radio>
    <y-radio label="Two">Two</y-radio>
    <y-radio label="Three">Three</y-radio>
  </y-radio-group>
</y-col>
```

*API*

### Radio Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | value | string/number/boolean | — | — |
| name | 原生name属性 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |


### Radio Events
| 参数      | 说明          | 回调参数      |
|---------- |-------------- |---------- |
| change | 绑定值变化时触发 | 选中的Radio label |

### Radio-group Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| button | Radio以按钮形式展现 | boolean | — | false |
| size | 按钮形式的Radio尺寸 | string | sm/default/lg | default |
| type | 按钮形式的Radio颜色 | string | 参照Button组件 | secondary |
| plain | 按钮形式的Radio边框 | boolean | — | false |

</y-scroll>


<script>
  import Emitter from '@/mixins/emitter'

  export default {
    mixins: [
      Emitter
    ],
    data () {
      return {
        radio: '1',
        radio1: '2',
        radio2: 'B',
        radio2Change: '',
        radio3: 'One'
      }
    },
    methods: {
      handleChange (val) {
        this.radio2Change = val
      }
    },
    mounted () {
      // this.dispatch('YScroll', 'refresh')
    }
  }
</script>

<style>

</style>
