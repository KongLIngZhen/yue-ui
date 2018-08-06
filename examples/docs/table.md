<y-scroll>

## Table 表格
> 用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 默认

*Demo*

<y-row class="demo-form">
  <y-col :md="12">
    <y-table :data="tableData">
      <y-table-column prop="name" label="姓名" width="180"></y-table-column>
      <y-table-column prop="address" label="地址" width="280"></y-table-column>
      <y-table-column prop="date" label="日期" width="180"></y-table-column>
    </y-table>
  </y-col>
</y-row>

---

*Code*

```html
<y-table :data="tableData">
  <y-table-column prop="name" label="姓名" width="180"></y-table-column>
  <y-table-column prop="address" label="地址" width="280"></y-table-column>
  <y-table-column prop="date" label="日期" width="180"></y-table-column>
</y-table>
```

### 条纹

*Demo*

 <y-row class="demo-form">
   <y-col :md="12">
     <y-table :data="tableData" striped>
       <y-table-column prop="name" label="姓名" width="180"></y-table-column>
       <y-table-column prop="address" label="地址" width="280"></y-table-column>
       <y-table-column prop="date" label="日期" width="180"></y-table-column>
     </y-table>
   </y-col>
 </y-row>

---

*Code*

```html
<y-table :data="tableData" striped>
  <y-table-column prop="name" label="姓名" width="180"></y-table-column>
  <y-table-column prop="address" label="地址" width="280"></y-table-column>
  <y-table-column prop="date" label="日期" width="180"></y-table-column>
</y-table>
```

### 边框

*Demo*

 <y-row class="demo-form">
   <y-col :md="12">
     <y-table :data="tableData" border>
       <y-table-column prop="name" label="姓名" width="180"></y-table-column>
       <y-table-column prop="address" label="地址" width="280"></y-table-column>
       <y-table-column prop="date" label="日期" width="180"></y-table-column>
     </y-table>
   </y-col>
 </y-row>

---

*Code*

```html
<y-table :data="tableData" border>
  <y-table-column prop="name" label="姓名" width="180"></y-table-column>
  <y-table-column prop="address" label="地址" width="280"></y-table-column>
  <y-table-column prop="date" label="日期" width="180"></y-table-column>
</y-table>
```

### 行样式

*Demo*

 <y-row class="demo-form">
   <y-col :md="12">
     <y-table :data="tableData" :tr-class="trClass">
       <y-table-column prop="name" label="姓名" width="180"></y-table-column>
       <y-table-column prop="address" label="地址" width="280"></y-table-column>
       <y-table-column prop="date" label="日期" width="180"></y-table-column>
     </y-table>
   </y-col>
 </y-row>

---

*Code*

```html
<y-table :data="tableData" :tr-class="trClass">
  <y-table-column prop="name" label="姓名" width="180"></y-table-column>
  <y-table-column prop="address" label="地址" width="280"></y-table-column>
  <y-table-column prop="date" label="日期" width="180"></y-table-column>
</y-table>
```

### Invert

*Demo*

 <y-row class="demo-form">
   <y-col :md="12">
     <y-table :data="tableData" dark>
       <y-table-column prop="name" label="姓名" width="180"></y-table-column>
       <y-table-column prop="address" label="地址" width="280"></y-table-column>
       <y-table-column prop="date" label="日期" width="180"></y-table-column>
     </y-table>
   </y-col>
 </y-row>

---

*Code*

```html
<y-table :data="tableData" dark>
  <y-table-column prop="name" label="姓名" width="180"></y-table-column>
  <y-table-column prop="address" label="地址" width="280"></y-table-column>
  <y-table-column prop="date" label="日期" width="180"></y-table-column>
</y-table>
```

### 表头样式

*Demo*

 <y-row class="demo-form">
   <y-col :md="12">
     <y-table :data="tableData" thead-class="light">
       <y-table-column prop="name" label="姓名" width="180"></y-table-column>
       <y-table-column prop="address" label="地址" width="280"></y-table-column>
       <y-table-column prop="date" label="日期" width="180"></y-table-column>
     </y-table>
     <y-table :data="tableData" thead-class="dark">
       <y-table-column prop="name" label="姓名" width="180"></y-table-column>
       <y-table-column prop="address" label="地址" width="280"></y-table-column>
       <y-table-column prop="date" label="日期" width="180"></y-table-column>
     </y-table>
   </y-col>
 </y-row>

---

*Code*

```html
<y-table :data="tableData" thead-class="light">
  <y-table-column prop="name" label="姓名" width="180"></y-table-column>
  <y-table-column prop="address" label="地址" width="280"></y-table-column>
  <y-table-column prop="date" label="日期" width="180"></y-table-column>
</y-table>
<y-table :data="tableData" thead-class="dark">
  <y-table-column prop="name" label="姓名" width="180"></y-table-column>
  <y-table-column prop="address" label="地址" width="280"></y-table-column>
  <y-table-column prop="date" label="日期" width="180"></y-table-column>
</y-table>
```

### Hover

*Demo*

 <y-row class="demo-form">
   <y-col :md="12">
     <y-table :data="tableData" hover>
       <y-table-column prop="name" label="姓名" width="180"></y-table-column>
       <y-table-column prop="address" label="地址" width="280"></y-table-column>
       <y-table-column prop="date" label="日期" width="180"></y-table-column>
     </y-table>
   </y-col>
 </y-row>

---

*Code*

```html
<y-table :data="tableData" hover>
  <y-table-column prop="name" label="姓名" width="180"></y-table-column>
  <y-table-column prop="address" label="地址" width="280"></y-table-column>
  <y-table-column prop="date" label="日期" width="180"></y-table-column>
</y-table>
```

### 尺寸

*Demo*

 <y-row class="demo-form">
   <y-col :md="12">
     <y-table :data="tableData" small>
       <y-table-column prop="name" label="姓名" width="180"></y-table-column>
       <y-table-column prop="address" label="地址" width="280"></y-table-column>
       <y-table-column prop="date" label="日期" width="180"></y-table-column>
     </y-table>
   </y-col>
 </y-row>

---

*Code*

```html
<y-table :data="tableData" small>
  <y-table-column prop="name" label="姓名" width="180"></y-table-column>
  <y-table-column prop="address" label="地址" width="280"></y-table-column>
  <y-table-column prop="date" label="日期" width="180"></y-table-column>
</y-table>
```

### 响应式

*Demo*

 <y-row class="demo-form">
   <y-col :md="12">
     <y-table :data="tableData" responsive>
       <y-table-column prop="name" label="姓名" width="180"></y-table-column>
       <y-table-column prop="address" label="地址" width="280"></y-table-column>
       <y-table-column prop="date" label="日期" width="180"></y-table-column>
     </y-table>
   </y-col>
 </y-row>

---

*Code*

```html
<y-table :data="tableData" small>
  <y-table-column prop="name" label="姓名" width="180"></y-table-column>
  <y-table-column prop="address" label="地址" width="280"></y-table-column>
  <y-table-column prop="date" label="日期" width="180"></y-table-column>
</y-table>
```

### 高度

*Demo*

 <y-row class="demo-form">
   <y-col :md="12">
     <y-table :data="tableData" max-height="200">
       <y-table-column prop="name" label="姓名" width="180"></y-table-column>
       <y-table-column prop="address" label="地址" width="280"></y-table-column>
       <y-table-column prop="date" label="日期" width="180"></y-table-column>
     </y-table>
   </y-col>
 </y-row>

---

*Code*

```html
<y-table :data="tableData" max-height="200">
  <y-table-column prop="name" label="姓名" width="180"></y-table-column>
  <y-table-column prop="address" label="地址" width="280"></y-table-column>
  <y-table-column prop="date" label="日期" width="180"></y-table-column>
</y-table>
```

### 单选

*Demo*

<y-row class="demo-form">
  <y-col :md="12">
    <y-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange">
      <y-table-column prop="name" label="姓名" width="180"></y-table-column>
      <y-table-column prop="address" label="地址" width="280"></y-table-column>
      <y-table-column prop="date" label="日期" width="180"></y-table-column>
    </y-table>
    <y-button @click="setCurrent(3)" type="primary">点击选中第4行</y-button>
    {{ currentRow }}
  </y-col>
</y-row>

---

*Code*

```html
<y-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange">
  <y-table-column prop="name" label="姓名" width="180"></y-table-column>
  <y-table-column prop="address" label="地址" width="280"></y-table-column>
  <y-table-column prop="date" label="日期" width="180"></y-table-column>
</y-table>
<y-button @click="setCurrent(3)" type="primary">点击选中第4行</y-button>
```

### 多选

*Demo*

<y-row class="demo-form">
  <y-col :md="12">
    <y-table :data="tableData" multiple @current-select="handleCurrentSelect" @selection-change="handleSelectionChange">
      <y-table-column prop="name" label="姓名" width="180"></y-table-column>
      <y-table-column prop="address" label="地址" width="280"></y-table-column>
      <y-table-column prop="date" label="日期" width="180"></y-table-column>
    </y-table>
    currentSelect: {{ currentSelect }} <br/>
    multipleSelection: {{ multipleSelection }}
  </y-col>
</y-row>

---

*Code*

```html
<y-table :data="tableData" multiple @current-select="handleCurrentSelect" @selection-change="handleSelectionChange">
  <y-table-column prop="name" label="姓名" width="180"></y-table-column>
  <y-table-column prop="address" label="地址" width="280"></y-table-column>
  <y-table-column prop="date" label="日期" width="180"></y-table-column>
</y-table>
```


</y-scroll>

<script>
  export default {
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '灭霸',
          address: '土星卫星-泰坦星'
        }, {
          date: '2016-05-04',
          name: '美国队长',
          address: '洛杉矶'
        }, {
          date: '2016-05-01',
          name: '星爵',
          address: '美国-科罗拉多州'
        }, {
          date: '2016-05-03',
          name: '洛基',
          address: '阿斯加德'
        }],
        currentRow: null,
        currentSelect: null,
        multipleSelection: []
      }
    },
    methods: {
      trClass (item, index) {
        if (index % 2 === 0) {
          return 'table-success'
        } else {
          return 'table-danger'
        }
      },
      handleCurrentChange (index, val) {
        console.log(index)
        console.log(val)
        this.currentRow = val
      },
      setCurrent (row) {
        this.$refs.singleTable.setCurrentRow(row)
      },
      handleCurrentSelect (index, val) {
        this.currentSelect = val
      },
      handleSelectionChange (val) {
        console.log(val)
        this.multipleSelection = val
      }
    }
  }
</script>

<style scoped>

</style>
