<y-scroll>

## Select 选择器
> 下拉菜单展示并选择内容

### 默认

*Demo*

<y-row class="demo-select">
  <y-col :md="12">
    <y-select v-model="select" placeholder="请选择" :options="options"></y-select>
    <label style="margin-left: 30px">select值：{{ select }}</label>
  </y-col>
</y-row>

---

*Code*

```html
  <y-select v-model="select" placeholder="请选择" :options="options"></y-select>
```

### 禁用项

*Demo*

<y-row class="demo-select">
  <y-col :md="12">
    <y-select v-model="select2" placeholder="请选择" :options="options" optionsDisabled="disabled"></y-select>
    <label style="margin-left: 30px">select2值：{{ select2 }}</label>
  </y-col>
</y-row>

---

*Code*

```html
  <y-select v-model="select2" placeholder="请选择" :options="options" optionsDisabled="disabled"></y-select>
```

### 禁用

*Demo*

<y-row class="demo-select">
  <y-col :md="12">
    <y-select v-model="select3" placeholder="请选择" :options="options" disabled></y-select>
  </y-col>
</y-row>

---

*Code*

```html
  <y-select v-model="select3" placeholder="请选择" :options="options" disabled></y-select>
```

### 可清空

*Demo*

<y-row class="demo-select">
  <y-col :md="12">
    <y-select v-model="select4" placeholder="请选择" :options="options" clearable></y-select>
    <label style="margin-left: 30px">select4值：{{ select4 }}</label>
  </y-col>
</y-row>

---

*Code*

```html
  <y-select v-model="select4" placeholder="请选择" :options="options" clearable></y-select>
```

### 自定义模版

*Demo*

<y-row class="demo-select">
 <y-col :md="12">
   <y-select v-model="select5" placeholder="请选择">
     <y-select-option
       v-for="(item, index) in options"
       :key="index"
       :item="item"
       :disable="item.disabled"
     >
      {{ item.value + '---' + item.label }}
     </y-select-option>
   </y-select>
   <label style="margin-left: 30px">select5值：{{ select5 }}</label>
 </y-col>
</y-row>

---

*Code*

```html
<y-select v-model="select5" placeholder="请选择">
 <y-select-option
    v-for="(item, index) in options"
    :key="index"
    :item="item"
    :disable="item.disabled"
  >
   {{ item.value + '---' + item.label }}
 </y-select-option>
</y-select>
```

### 分组

*Demo*

<y-row class="demo-select">
  <y-col :md="12">
    <y-select v-model="select6" placeholder="请选择">
      <y-select-option-group
        v-for="(item, index) in options2"
        :key="index"
        :label="item.label"
      >
        <y-select-option
          v-for="(item, index) in item.options"
          :key="index"
          :item="item"
          :disable="item.disabled"
        >
          {{ item.label }}
        </y-select-option>
      </y-select-option-group>
    </y-select>
    <label style="margin-left: 30px">select5值：{{ select5 }}</label>
  </y-col>
</y-row>

---

*Code*

```html
<y-select v-model="select6" placeholder="请选择">
  <y-select-option-group
    v-for="(item, index) in options2"
    :key="index"
    :label="item.label"
  >
    <y-select-option
      v-for="(item, index) in item.options"
      :key="index"
      :item="item"
      :disable="item.disabled"
    >
      {{ item.label }}
    </y-select-option>
  </y-select-option-group>
</y-select>
```

### 尺寸

*Demo*

<y-row class="demo-select">
  <y-col :md="12">
    <y-select v-model="select7" placeholder="请选择" :options="options" size="sm"></y-select>
    <y-select v-model="select7" placeholder="请选择" :options="options" size="lg"></y-select>
    <label style="margin-left: 30px">select7值：{{ select7 }}</label>
  </y-col>
</y-row>

---

*Code*

```html
  <y-select v-model="select7" placeholder="请选择" :options="options" size="sm"></y-select>
  <y-select v-model="select7" placeholder="请选择" :options="options" size="lg"></y-select>
```


</y-scroll>

<script>
  export default {
    data () {
      return {
        options: [{
          value: '选项1',
          label: '钢铁侠'
        }, {
          value: '选项2',
          label: '美国队长'
        }, {
          value: '选项3',
          label: '雷神',
          disabled: true
        }, {
          value: '选项4',
          label: '绿巨人'
        }, {
          value: '选项5',
          label: '幻视'
        },{
          value: '选项6',
          label: '奇异博士'
        }, {
          value: '选项7',
          label: '鹰眼'
        }, {
          value: '选项8',
          label: '黑寡妇'
        }, {
          value: '选项9',
          label: '绯红女巫'
        }, {
          value: '选项10',
          label: '蜘蛛侠'
        }],
        options2: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        select: '选项1',
        select2: '选项2',
        select3: '选项3',
        select4: '选项4',
        select5: '选项5',
        select6: 'Beijing',
        select7: '选项7'
      }
    },
    methods: {

    },
    mounted () {

    }
  }
</script>

<style scoped>
  .demo-select .y-select {
    width: 200px;
    margin-right: 10px;
  }
</style>
