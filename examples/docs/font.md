<y-scroll>

## Font 字体
>统一字体规范，MacOS优先

### 字体预览

*中文*

<y-row>
  <y-col :md="4">
    <div class="demo-font-pf">前端开发 - PingFang SC</div>
  </y-col>
  <y-col :md="4">
    <div class="demo-font-hs">前端开发 - Hiragino Sans GB</div>
  </y-col>
  <y-col :md="4">
    <div class="demo-font-my">前端开发 - Microsoft YaHei</div>
  </y-col>
</y-row>
<br/>

*英文*

<y-row>
  <y-col :md="4">
    <div class="demo-font-hn">Yue ui - Helvetica Neue</div>
  </y-col>
  <y-col :md="4">
    <div class="demo-font-h">Yue ui - Helvetica</div>
  </y-col>
  <y-col :md="4">
    <div class="demo-font-a">Yue ui - Arial</div>
  </y-col>
</y-row>
<br/>

</y-scroll>

<style lang="less" scope>
  @import (reference) "../../src/theme/index.less";

  .demo-font {
    width: 100%;
    height: 120px;
    line-height: 120px;
    border: 1px solid @border-3;
    border-radius: 3px;
    color: @font-normal;
    font-size: 18px;
    text-align: center;
  }
  .demo-font-pf {
    .demo-font;
    font-family: "PingFang SC";
  }
  .demo-font-hs {
    .demo-font;
    font-family: "Hiragino Sans GB"
  }
  .demo-font-my {
    .demo-font;
    font-family: "Microsoft YaHei"
  }
  .demo-font-hn {
    .demo-font;
    font-family: "Helvetica Neue";
  }
  .demo-font-h {
    .demo-font;
    font-family: Helvetica;
  }
  .demo-font-a {
    .demo-font;
    font-family: Arial;
  }
</style>
