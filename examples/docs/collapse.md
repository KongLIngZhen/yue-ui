<y-scroll>

## Collapse 折叠面板
> 通过折叠面板收纳内容区域。

### 默认

*Demo*

<y-row class="demo-collapse">
  <y-col :md="12">
    <y-collapse id="collapseExample">
      <y-collapse-item title="Collapsible Group Item #1" name="1" show>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
      </y-collapse-item>
      <y-collapse-item title="Collapsible Group Item #2" name="2">
        3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
      </y-collapse-item>
      <y-collapse-item title="Collapsible Group Item #3" name="3">
        Food truck quinoa nesciunt laborum eiusmod.
      </y-collapse-item>
    </y-collapse>
  </y-col>
</y-row>

---

*Code*

```html
<y-collapse id="collapseExample">
  <y-collapse-item title="Collapsible Group Item #1" name="1" show>
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
  </y-collapse-item>
  <y-collapse-item title="Collapsible Group Item #2" name="2">
    3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
  </y-collapse-item>
  <y-collapse-item title="Collapsible Group Item #3" name="3">
    Food truck quinoa nesciunt laborum eiusmod.
  </y-collapse-item>
</y-collapse>
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
