<y-scroll>

## Form 表单
> 由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据

### 默认

*Demo*

<y-row class="demo-form">
  <y-col :md="8">
    <y-form :model="form">
      <y-form-item label="阵营">
        <y-input v-model="form.name" placeholder="请输入内容"></y-input>
      </y-form-item>
      <y-form-item label="英雄">
        <y-select v-model="form.select" placeholder="请选择" :options="options"></y-select>
      </y-form-item>
      <y-form-item label="日期">
        <y-datepicker v-model="form.date"></y-datepicker>
      </y-form-item>
      <y-form-item label="启用">
        <y-switch v-model="form.switch"></y-switch>
      </y-form-item>
      <y-form-item label="战甲">
        <y-radio-group v-model="form.radio">
          <y-radio label="A">Mark1</y-radio>
          <y-radio label="B">Mark32罗密欧</y-radio>
          <y-radio label="C">Mark44反浩克装甲</y-radio>
        </y-radio-group>
      </y-form-item>
      <y-form-item label="武器">
        <y-checkbox-group v-model="form.checkbox">
          <y-checkbox label="A">激光</y-checkbox>
          <y-checkbox label="B">导弹</y-checkbox>
          <y-checkbox label="C">盾牌</y-checkbox>
        </y-checkbox-group>
      </y-form-item>
    </y-form>
  </y-col>
  <y-col :md="4">
    {{ form }}
  </y-col>
</y-row>

---

*Code*

```html
<y-form :model="form">
  <y-form-item label="阵营">
    <y-input v-model="form.name" placeholder="请输入内容"></y-input>
  </y-form-item>
  <y-form-item label="英雄">
    <y-select v-model="form.select" placeholder="请选择" :options="options"></y-select>
  </y-form-item>
  <y-form-item label="日期">
    <y-datepicker v-model="form.date"></y-datepicker>
  </y-form-item>
  <y-form-item label="启用">
    <y-switch v-model="form.switch"></y-switch>
  </y-form-item>
  <y-form-item label="战甲">
    <y-radio-group v-model="form.radio">
      <y-radio label="A">Mark1</y-radio>
      <y-radio label="B">Mark32罗密欧</y-radio>
      <y-radio label="C">Mark44反浩克装甲</y-radio>
    </y-radio-group>
  </y-form-item>
  <y-form-item label="武器">
    <y-checkbox-group v-model="form.checkbox">
      <y-checkbox label="A">激光</y-checkbox>
      <y-checkbox label="B">导弹</y-checkbox>
      <y-checkbox label="C">盾牌</y-checkbox>
    </y-checkbox-group>
  </y-form-item>
</y-form>
```

### 尺寸

*Demo*

<y-row class="demo-form">
  <y-col :md="12">
    <y-form :model="form" size="sm">
      <y-form-item label="阵营">
        <y-input v-model="form.name" placeholder="请输入内容"></y-input>
      </y-form-item>
      <y-form-item label="英雄">
        <y-select v-model="form.select" placeholder="请选择" :options="options"></y-select>
      </y-form-item>
      <y-form-item label="日期">
        <y-datepicker v-model="form.date"></y-datepicker>
      </y-form-item>
    </y-form>
  </y-col>
</y-row>

---

*Code*

```html
<y-form :model="form" size="sm">
  <y-form-item label="阵营">
    <y-input v-model="form.name" placeholder="请输入内容"></y-input>
  </y-form-item>
  <y-form-item label="英雄">
    <y-select v-model="form.select" placeholder="请选择" :options="options"></y-select>
  </y-form-item>
  <y-form-item label="日期">
    <y-datepicker v-model="form.date"></y-datepicker>
  </y-form-item>
</y-form>
```

### 行内表单

*Demo*

<y-row class="demo-form">
  <y-col :md="12">
    <y-form :model="form" inline>
      <y-form-item label="阵营">
        <y-input v-model="form.name" placeholder="请输入内容"></y-input>
      </y-form-item>
      <y-form-item label="英雄">
        <y-select v-model="form.select" placeholder="请选择" :options="options"></y-select>
      </y-form-item>
      <y-form-item style="padding-left: 80px">
        <y-button type="primary">保存</y-button>
        <y-button type="secondary">重置</y-button>
      </y-form-item>
    </y-form>
  </y-col>
</y-row>

---

*Code*

```html
<y-form :model="form" inline>
  <y-form-item label="阵营">
    <y-input v-model="form.name" placeholder="请输入内容"></y-input>
  </y-form-item>
  <y-form-item label="英雄">
    <y-select v-model="form.select" placeholder="请选择" :options="options"></y-select>
  </y-form-item>
  <y-form-item style="padding-left: 80px">
    <y-button type="primary">保存</y-button>
    <y-button type="secondary">重置</y-button>
  </y-form-item>
</y-form>
```

### 表单校验

*Demo*

<y-row class="demo-form">
  <y-col :md="12">
    <y-form :model="form" :rules="rules" ref="ruleForm">
      <y-form-item label="阵营" prop="name">
        <y-input v-model="form.name" placeholder="请输入内容"></y-input>
      </y-form-item>
      <y-form-item label="英雄" prop="select">
        <y-select v-model="form.select" placeholder="请选择" :options="options"></y-select>
      </y-form-item>
      <y-form-item label="日期" prop="date">
        <y-datepicker v-model="form.date"></y-datepicker>
      </y-form-item>
      <y-form-item label="启用" prop="switch">
        <y-switch v-model="form.switch"></y-switch>
      </y-form-item>
      <y-form-item label="战甲" prop="radio">
        <y-radio-group v-model="form.radio">
          <y-radio label="A">Mark1</y-radio>
          <y-radio label="B">Mark32罗密欧</y-radio>
          <y-radio label="C">Mark44反浩克装甲</y-radio>
        </y-radio-group>
      </y-form-item>
      <y-form-item label="武器" prop="checkbox">
        <y-checkbox-group v-model="form.checkbox">
          <y-checkbox label="A">激光</y-checkbox>
          <y-checkbox label="B">导弹</y-checkbox>
          <y-checkbox label="C">盾牌</y-checkbox>
        </y-checkbox-group>
      </y-form-item>
      <y-form-item style="padding-left: 80px">
        <y-button type="primary" @click="submitForm('ruleForm')">保存</y-button>
        <y-button type="secondary" @click="resetForm('ruleForm')">重置</y-button>
      </y-form-item>
    </y-form>
  </y-col>
</y-row>

---

*Code*

```html
<y-form :model="form" :rules="rules" ref="ruleForm">
  <y-form-item label="阵营" prop="name">
    <y-input v-model="form.name" placeholder="请输入内容"></y-input>
  </y-form-item>
  <y-form-item label="英雄" prop="select">
    <y-select v-model="form.select" placeholder="请选择" :options="options"></y-select>
  </y-form-item>
  <y-form-item label="日期" prop="date">
    <y-datepicker v-model="form.date"></y-datepicker>
  </y-form-item>
  <y-form-item label="启用" prop="switch">
    <y-switch v-model="form.switch"></y-switch>
  </y-form-item>
  <y-form-item label="战甲" prop="radio">
    <y-radio-group v-model="form.radio">
      <y-radio label="A">Mark1</y-radio>
      <y-radio label="B">Mark32罗密欧</y-radio>
      <y-radio label="C">Mark44反浩克装甲</y-radio>
    </y-radio-group>
  </y-form-item>
  <y-form-item label="武器" prop="checkbox">
    <y-checkbox-group v-model="form.checkbox">
      <y-checkbox label="A">激光</y-checkbox>
      <y-checkbox label="B">导弹</y-checkbox>
      <y-checkbox label="C">盾牌</y-checkbox>
    </y-checkbox-group>
  </y-form-item>
  <y-form-item>
    <y-button type="primary" @click="submitForm('ruleForm')">保存</y-button>
    <y-button type="secondary" @click="resetForm('ruleForm')">重置</y-button>
  </y-form-item>
</y-form>
```









</y-scroll>

<script>
  export default {
    data () {
      return {
        form: {
          name: '漫威',
          select: '选项1',
          date: '2018/06/30',
          switch: true,
          radio: 'A',
          checkbox: []
        },
        options: [
          {
            value: '选项1',
            label: '钢铁侠'
          },
          {
            value: '选项2',
            label: '美国队长'
          },
          {
            value: '选项3',
            label: '雷神',
            disabled: true
          },
          {
            value: '选项4',
            label: '绿巨人'
          },
          {
            value: '选项5',
            label: '幻视'
          }
        ],
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          select: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          date: [
            { required: true, message: '请选择日期', trigger: 'change' }
          ],
          switch: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          radio: [
            { required: true, message: '请填写', trigger: 'blur' }
          ],
          checkbox: [
            { type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }
          ]
        },
        labelPosition: 'left'
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style scoped>

</style>
