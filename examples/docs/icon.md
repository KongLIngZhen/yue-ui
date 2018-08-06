<y-scroll>

## Icon 图标
>内置 [Font Awesome 5](https://github.com/FortAwesome/Font-Awesome) Webfont 合集

### 图标示例

*Demo*

<y-row>
  <y-col :md="2">
    <div class="demo-icon">
      <i class="fa fa-plus"></i>
    </div>
  </y-col>
  <y-col :md="2">
    <div class="demo-icon">
      <i class="fa fa-minus"></i>
    </div>
  </y-col>
  <y-col :md="2">
    <div class="demo-icon">
      <i class="fa fa-lock"></i>
    </div>
  </y-col>
  <y-col :md="2">
    <div class="demo-icon">
      <i class="fa fa-star"></i>
    </div>
  </y-col>
  <y-col :md="2">
    <div class="demo-icon">
      <i class="fa fa-trash"></i>
    </div>
  </y-col>
  <y-col :md="2">
    <div class="demo-icon">
      <i class="fa fa-user-circle"></i>
    </div>
  </y-col>
</y-row>
<y-row style="margin-top: 10px">
  <y-col :md="2">
    <div class="demo-icon">
      <i class="fa fa-bug"></i>
    </div>
  </y-col>
  <y-col :md="2">
    <div class="demo-icon">
      <i class="fa fa-calendar"></i>
    </div>
  </y-col>
  <y-col :md="2">
    <div class="demo-icon">
      <i class="fa fa-copy"></i>
    </div>
  </y-col>
  <y-col :md="2">
    <div class="demo-icon">
      <i class="fa fa-save"></i>
    </div>
  </y-col>
  <y-col :md="2">
    <div class="demo-icon">
      <i class="fa fa-search"></i>
    </div>
  </y-col>
  <y-col :md="2">
    <div class="demo-icon">
      <i class="fa fa-folder"></i>
    </div>
  </y-col>
</y-row>
<br/>

*Code*

```html
<i class="fa fa-google"></i>
<i class="fa fa-google-fa-lg"></i>
<i class="fa fa-google-fa-2x"></i>
<i class="fa fa-google-fa-3x"></i>
<i class="fa fa-google-retro fa-4x"></i>
<i class="fa fa-google-retro fa-5x"></i>
```

</y-scroll>

<style lang="less" scope>
  @import (reference) "../../src/theme/index.less";

  .demo-icon {
    width: 100%;
    height: 120px;
    line-height: 120px;
    border: 1px solid @border-3;
    border-radius: 3px;
    color: @font-normal;
    font-size: 18px;
    text-align: center;
  }
</style>
