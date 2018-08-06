<y-scroll>

## Color 色彩
> 语义化标准色

### 主题色

*Demo*
<y-row>
  <div class="demo-theme">
    #26b99a
  </div>
</y-row>

---

### 辅助色

*Demo*

<y-row>
  <y-col :md="2">
    <div class="demo-primary">#007bff Primary</div>
  </y-col>
  <y-col :md="2">
    <div class="demo-secondary">#6c757d Secondary</div>
  </y-col>
  <y-col :md="2">
    <div class="demo-success">#28a745 Success</div>
  </y-col>
  <y-col :md="2">
    <div class="demo-danger">#dc3545 Danger</div>
  </y-col>
</y-row>
<y-row style="margin-top: 10px">
  <y-col :md="2">
    <div class="demo-warning">#ffc107 Warning</div>
  </y-col>
  <y-col :md="2">
    <div class="demo-info">#17a2b8 Info</div>
  </y-col>
  <y-col :md="2">
    <div class="demo-light">#f8f9fa Light</div>
  </y-col>
  <y-col :md="2">
    <div class="demo-dark">#343a40 Dark</div>
  </y-col>
</y-row>

---

### 中性色

*Demo*

<y-row>
  <y-col :md="2">
    <div class="demo-font-main">#303133 主要文字</div>
  </y-col>
  <y-col :md="2">
    <div class="demo-font-normal">#606266 常规文字</div>
  </y-col>
  <y-col :md="2">
    <div class="demo-font-minor">#909399 次要文字</div>
  </y-col>
  <y-col :md="2">
    <div class="demo-font-seize">#C0C4CC 占位文字</div>
  </y-col>
</y-row>
<y-row style="margin-top: 10px">
  <y-col :md="2">
    <div class="demo-border-1">#DCDFE6 一级边框</div>
  </y-col>
  <y-col :md="2">
    <div class="demo-border-2">#E4E7ED 二级边框</div>
  </y-col>
  <y-col :md="2">
    <div class="demo-border-3">#EBEEF5 三级边框</div>
  </y-col>
  <y-col :md="2">
    <div class="demo-border-4">#F2F6FC 四级边框</div>
  </y-col>
</y-row>

</y-scroll>

<style lang="less">
  @import (reference) "../../src/theme/index.less";

  .demo-color {
    width: 140px;
    height: 70px;
    text-align: center;
    line-height: 70px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
  .demo-theme {
    .demo-color;
    background: @theme;
  }
  .demo-primary {
    .demo-color;
    background: @primary;
  }
  .demo-secondary {
    .demo-color;
    background: @secondary;
  }
  .demo-success {
    .demo-color;
    background: @success;
  }
  .demo-danger {
    .demo-color;
    background: @danger;
  }
  .demo-warning {
    .demo-color;
    background: @warning;
  }
  .demo-info {
    .demo-color;
    background: @info;
  }
  .demo-light {
    .demo-color;
    background: @light;
  }
  .demo-dark {
    .demo-color;
    background: @dark;
  }
  .demo-font-main {
    .demo-color;
    background: #303133;
  }
  .demo-font-normal {
    .demo-color;
    background: #606266;
  }
  .demo-font-minor {
    .demo-color;
    background: #909399;
  }
  .demo-font-seize {
    .demo-color;
    background: #C0C4CC;
  }
  .demo-border-1 {
    .demo-color;
    background: #DCDFE6;
    color: @font-normal;
  }
  .demo-border-2 {
    .demo-color;
    background: #E4E7ED;
    color: @font-normal;
  }
  .demo-border-3 {
    .demo-color;
    background: #EBEEF5;
    color: @font-normal;
  }
  .demo-border-4 {
    .demo-color;
    background: #F2F6FC;
    color: @font-normal;
  }
</style>
