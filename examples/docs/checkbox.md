<y-scroll>

## Checkbox 复选框
> 一组选项中进行多选

### 默认

*Demo*

<y-row>
  <y-col :md="12">
    <y-checkbox v-model="checkbox" label="1">选项1</y-checkbox>
    <label style="margin-left: 30px">checkbox值：{{ checkbox }}</label>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-checkbox v-model="checkbox" label="1">选项1</y-checkbox>
  </y-col>
</y-row>
```

### 禁用

*Demo*

<y-row>
  <y-col :md="12">
    <y-checkbox disabled v-model="checkbox1">选项1</y-checkbox>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-checkbox disabled v-model="checkbox1">选项1</y-checkbox>
  </y-col>
</y-row>
```

### 复选框组

*Demo*

<y-row>
  <y-col :md="12">
    <y-checkbox-group v-model="checkbox2" @change="handleChange">
      <y-checkbox label="A">A</y-checkbox>
      <y-checkbox label="B">B</y-checkbox>
      <y-checkbox label="C">C</y-checkbox>
    </y-checkbox-group>
    <label style="margin-left: 30px">checkbox2值：{{ checkbox2 }}</label>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-checkbox-group v-model="checkbox2" @change="handleChange">
      <y-checkbox label="A">A</y-checkbox>
      <y-checkbox label="B">B</y-checkbox>
      <y-checkbox label="C">C</y-checkbox>
    </y-checkbox-group>
  </y-col>
</y-row>
```

### 按钮类型

*Demo*

<y-row>
  <y-col :md="12">
    <y-checkbox-group button v-model="checkbox3" size="sm" type="primary">
      <y-checkbox label="One">One</y-checkbox>
      <y-checkbox label="Two">Two</y-checkbox>
      <y-checkbox label="Three">Three</y-checkbox>
    </y-checkbox-group>
    <label style="margin-left: 30px;margin-right: 30px">checkbox3值：{{ checkbox3 }}</label>
    <y-checkbox-group button v-model="checkbox3" size="sm" type="primary" plain>
      <y-checkbox label="One">One</y-checkbox>
      <y-checkbox label="Two">Two</y-checkbox>
      <y-checkbox label="Three">Three</y-checkbox>
    </y-checkbox-group>
  </y-col>
  <y-col :md="12" style="margin-top: 10px">
    <y-checkbox-group button v-model="checkbox3">
      <y-checkbox label="One">One</y-checkbox>
      <y-checkbox label="Two">Two</y-checkbox>
      <y-checkbox label="Three">Three</y-checkbox>
    </y-checkbox-group>
    <label style="margin-left: 30px;margin-right: 30px">checkbox3值：{{ checkbox3 }}</label>
    <y-checkbox-group button v-model="checkbox3" plain>
      <y-checkbox label="One">One</y-checkbox>
      <y-checkbox label="Two">Two</y-checkbox>
      <y-checkbox label="Three">Three</y-checkbox>
    </y-checkbox-group>
  </y-col>
  <y-col :md="12" style="margin-top: 10px">
    <y-checkbox-group button v-model="checkbox3" size="lg" type="success">
      <y-checkbox label="One">One</y-checkbox>
      <y-checkbox label="Two">Two</y-checkbox>
      <y-checkbox label="Three">Three</y-checkbox>
    </y-checkbox-group>
    <label style="margin-left: 30px;margin-right: 30px">checkbox3值：{{ checkbox3 }}</label>
    <y-checkbox-group button v-model="checkbox3" size="lg" type="success" plain>
      <y-checkbox label="One">One</y-checkbox>
      <y-checkbox label="Two">Two</y-checkbox>
      <y-checkbox label="Three">Three</y-checkbox>
    </y-checkbox-group>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-checkbox-group button v-model="checkbox3" size="sm" type="primary">
      <y-checkbox label="One">One</y-checkbox>
      <y-checkbox label="Two">Two</y-checkbox>
      <y-checkbox label="Three">Three</y-checkbox>
    </y-checkbox-group>
    <y-checkbox-group button v-model="checkbox3" size="sm" type="primary" plain>
      <y-checkbox label="One">One</y-checkbox>
      <y-checkbox label="Two">Two</y-checkbox>
      <y-checkbox label="Three">Three</y-checkbox>
    </y-checkbox-group>
  </y-col>
  <y-col :md="12" style="margin-top: 10px">
    <y-checkbox-group button v-model="checkbox3">
      <y-checkbox label="One">One</y-checkbox>
      <y-checkbox label="Two">Two</y-checkbox>
      <y-checkbox label="Three">Three</y-checkbox>
    </y-checkbox-group>
    <y-checkbox-group button v-model="checkbox3" plain>
      <y-checkbox label="One">One</y-checkbox>
      <y-checkbox label="Two">Two</y-checkbox>
      <y-checkbox label="Three">Three</y-checkbox>
    </y-checkbox-group>
  </y-col>
  <y-col :md="12" style="margin-top: 10px">
    <y-checkbox-group button v-model="checkbox3" size="lg" type="success">
      <y-checkbox label="One">One</y-checkbox>
      <y-checkbox label="Two">Two</y-checkbox>
      <y-checkbox label="Three">Three</y-checkbox>
    </y-checkbox-group>
    <y-checkbox-group button v-model="checkbox3" size="lg" type="success" plain>
      <y-checkbox label="One">One</y-checkbox>
      <y-checkbox label="Two">Two</y-checkbox>
      <y-checkbox label="Three">Three</y-checkbox>
    </y-checkbox-group>
  </y-col>
</y-row>
```

### 限制选择数量

*Demo*

<y-row>
  <y-col :md="12">
    <y-checkbox-group v-model="checkbox4" :min="1" :max="2">
      <y-checkbox v-for="item in checkbox4data" :label="item" :key="item">{{ item }}</y-checkbox>
    </y-checkbox-group>
    <label style="margin-left: 30px;">checkbox4值：{{ checkbox4 }}</label>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-checkbox-group v-model="checkbox4" :min="1" :max="2">
      <y-checkbox v-for="item in checkbox4data" :label="item" :key="item">{{ item }}</y-checkbox>
    </y-checkbox-group>
  </y-col>
</y-row>
```

*API*

### Checkbox Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | value | string/number/boolean | — | — |
| name | 原生name属性 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |


### Checkbox Events
| 参数      | 说明          | 回调参数      |
|---------- |-------------- |---------- |
| change | 绑定值变化时触发 | 更新后所有选中的值 |

### Checkbox-group Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| button | Checkbox以按钮形式展现 | boolean | — | false |
| size | 按钮形式的Checkbox尺寸 | string | sm/default/lg | default |
| type | 按钮形式的Checkbox颜色 | string | 参照Button组件 | secondary |
| plain | 按钮形式的Checkbox边框 | boolean | — | false |
| min | 可勾选的最小数量 | number | — | — |
| max | 可勾选的最大数量 | number | — | — |

</y-scroll>

<script>
  import Emitter from '@/mixins/emitter'

  export default {
    mixins: [
      Emitter
    ],
    data () {
      return {
        checkbox: true,
        checkbox1: false,
        checkbox2: ['A', 'C'],
        checkbox3: ['One', 'Two'],
        checkbox4: ['北京', '天津'],
        checkbox4data: ['北京', '上海', '广州', '深圳', '天津']
      }
    },
    methods: {
      handleChange (val) {

      }
    },
    mounted () {
      // this.dispatch('YScroll', 'refresh')
    }
  }
</script>

<style>

</style>
