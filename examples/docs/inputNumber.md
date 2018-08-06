<div style="overflow: auto;height: 700px;padding: 12px;">

## Modal 模态框
>

### 默认

*Demo*

<y-row class="demo-modal">
  <y-col :md="12">
    <y-button type="primary" modal-target="modal1">Modal</y-button>
    <y-button type="success" @click="openModal">Open with Method</y-button>
    <y-modal
      ref="modal1"
      title="标题"
      modal="modal1"
      @show="handleShow"
      @shown="handleShown"
      @hide="handleHide"
      @hidden="handleHidden"
    >
      <h1>Hello</h1>
      <span slot="footer">
        <y-button type="secondary" data-dismiss="modal">Close</y-button>
        <y-button type="primary">Save</y-button>
      </span>
    </y-modal>
  </y-col>
</y-row>

---

*Code*

```html
<y-button type="primary" modal-target="modal1">Modal1</y-button>
<y-modal title="标题" modal="modal1">
  <h1>Hello Modal1</h1>
  <span slot="footer">
    <y-button type="secondary" data-dismiss="modal">Close</y-button>
    <y-button type="primary">Save</y-button>
  </span>
</y-modal>
```

### 尺寸

*Demo*

<y-row class="demo-modal">
  <y-col :md="3">
    <y-button type="primary" modal-target="largeModal">Large Modal</y-button>
    <y-modal title="标题" modal="largeModal" size="lg">
      <h1>Large Modal</h1>
      <span slot="footer">
        <y-button type="secondary" data-dismiss="modal">Close</y-button>
        <y-button type="primary">Save</y-button>
      </span>
    </y-modal>
  </y-col>
  <y-col :md="3">
    <y-button type="primary" modal-target="smallModal">Small Modal</y-button>
    <y-modal title="标题" modal="smallModal" size="sm">
      <h1>Small Modal</h1>
      <span slot="footer">
        <y-button type="secondary" data-dismiss="modal">Close</y-button>
        <y-button type="primary">Save</y-button>
      </span>
    </y-modal>
  </y-col>
</y-row>

---

*Code*

```html
<y-button type="primary" modal-target="largeModal">Large Modal</y-button>
<y-modal title="标题" modal="largeModal" size="lg">
  <h1>Large Modal</h1>
  <span slot="footer">
    <y-button type="secondary" data-dismiss="modal">Close</y-button>
    <y-button type="primary">Save</y-button>
  </span>
</y-modal>
<y-button type="primary" modal-target="smallModal">Small Modal</y-button>
<y-modal title="标题" modal="smallModal" size="sm">
  <h1>Small Modal</h1>
  <span slot="footer">
    <y-button type="secondary" data-dismiss="modal">Close</y-button>
    <y-button type="primary">Save</y-button>
  </span>
</y-modal>
```


</div>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      openModal () {
        this.$refs.modal1.show()
      },
      handleShow () {
        console.log('handleShow')
      },
      handleShow () {
        console.log('handleShow')
      },
      handleShown () {
        console.log('handleShown')
      },
      handleHide () {
        console.log('handleHide')
      },
      handleHidden () {
        console.log('handleHidden')
      }
    }
  }
</script>

<style scoped>
  .demo-modal {
    margin-bottom: 10px;
  }
</style>
