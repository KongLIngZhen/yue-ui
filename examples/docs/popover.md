<y-scroll>

## Popover 弹出框
>

### 默认

*Demo*

<y-row class="demo-popover">
  <y-col :md="12">
    <y-popover title="Top" content="this is a top popover" placement="top">
      <y-button type="primary">Top</y-button>
    </y-popover>
    <y-popover title="Right" content="this is a right popover" placement="right">
      <y-button type="primary">Right</y-button>
    </y-popover>
    <y-popover title="Bottom" content="this is a bottom popover" placement="bottom">
      <y-button type="primary">Bottom</y-button>
    </y-popover>
    <y-popover title="Left" content="this is a left popover" placement="left">
      <y-button type="primary">Left</y-button>
    </y-popover>
  </y-col>
</y-row>

---

*Code*

```html
<y-popover title="Top" content="this is a top popover" placement="top">
  <y-button type="primary">Top</y-button>
</y-popover>
<y-popover title="Right" content="this is a right popover" placement="right">
  <y-button type="primary">Right</y-button>
</y-popover>
<y-popover title="Bottom" content="this is a bottom popover" placement="bottom">
  <y-button type="primary">Bottom</y-button>
</y-popover>
<y-popover title="Left" content="this is a left popover" placement="left">
  <y-button type="primary">Left</y-button>
</y-popover>
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

</style>
