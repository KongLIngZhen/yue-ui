<y-scroll>

## Tooltip 文字提示
>

### 默认

*Demo*

<y-row class="demo-tooltip">
  <y-col :md="12">
    <y-tooltip title="Top" placement="top">
      <y-button type="primary">Top</y-button>
    </y-tooltip>
    <y-tooltip title="Right" placement="right">
      <y-button type="primary">Right</y-button>
    </y-tooltip>
    <y-tooltip title="Bottom" placement="bottom">
      <y-button type="primary">Bottom</y-button>
    </y-tooltip>
    <y-tooltip title="Left" placement="left">
      <y-button type="primary">Left</y-button>
    </y-tooltip>
  </y-col>
</y-row>

---

*Code*

```html
<y-tooltip title="Top" placement="top">
  <y-button type="primary">Top</y-button>
</y-tooltip>
<y-tooltip title="Right" placement="right">
  <y-button type="primary">Right</y-button>
</y-tooltip>
<y-tooltip title="Bottom" placement="bottom">
  <y-button type="primary">Bottom</y-button>
</y-tooltip>
<y-tooltip title="Left" placement="left">
  <y-button type="primary">Left</y-button>
</y-tooltip>
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
