<y-scroll>

## Button 按钮
> 适用于多场景的按钮

### 默认

*Demo*

<y-row>
  <y-col :md="12">
    <y-button type="primary">Primary</y-button>
    <y-button type="secondary">Secondary</y-button>
    <y-button type="success">Success</y-button>
    <y-button type="danger">Danger</y-button>
    <y-button type="warning">Warning</y-button>
    <y-button type="info">Info</y-button>
    <y-button type="light">Light</y-button>
    <y-button type="dark">Dark</y-button>
    <y-button type="link">Link</y-button>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-button type="primary">Primary</y-button>
    <y-button type="secondary">Secondary</y-button>
    <y-button type="success">Success</y-button>
    <y-button type="danger">Danger</y-button>
    <y-button type="warning">Warning</y-button>
    <y-button type="info">Info</y-button>
    <y-button type="light">Light</y-button>
    <y-button type="dark">Dark</y-button>
    <y-button type="link">Link</y-button>
  </y-col>
</y-row>
```

### Outline

*Demo*

<y-row>
  <y-col :md="12">
    <y-button type="primary" plain>Primary</y-button>
    <y-button type="secondary" plain>Secondary</y-button>
    <y-button type="success" plain>Success</y-button>
    <y-button type="danger" plain>Danger</y-button>
    <y-button type="warning" plain>Warning</y-button>
    <y-button type="info" plain>Info</y-button>
    <y-button type="light" plain>Light</y-button>
    <y-button type="dark" plain>Dark</y-button>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-button type="primary" plain>Primary</y-button>
    <y-button type="secondary" plain>Secondary</y-button>
    <y-button type="success" plain>Success</y-button>
    <y-button type="danger" plain>Danger</y-button>
    <y-button type="warning" plain>Warning</y-button>
    <y-button type="info" plain>Info</y-button>
    <y-button type="light" plain>Light</y-button>
    <y-button type="dark" plain>Dark</y-button>
  </y-col>
</y-row>
```

### Circle

*Demo*

<y-row>
  <y-col :md="12">
    <y-button type="primary" circle icon="fa-plus"></y-button>
    <y-button type="secondary" circle icon="fa-minus"></y-button>
    <y-button type="success" circle icon="fa-lock"></y-button>
    <y-button type="danger" circle icon="fa-star"></y-button>
    <y-button type="warning" circle icon="fa-trash"></y-button>
    <y-button type="info" circle icon="fa-user-circle"></y-button>
    <y-button type="light" circle icon="fa-calendar"></y-button>
    <y-button type="dark" circle icon="fa-copy"></y-button>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-button type="primary" circle icon="fa-plus"></y-button>
    <y-button type="secondary" circle icon="fa-minus"></y-button>
    <y-button type="success" circle icon="fa-lock"></y-button>
    <y-button type="danger" circle icon="fa-star"></y-button>
    <y-button type="warning" circle icon="fa-trash"></y-button>
    <y-button type="info" circle icon="fa-user-circle"></y-button>
    <y-button type="light" circle icon="fa-calendar"></y-button>
    <y-button type="dark" circle icon="fa-copy"></y-button>
  </y-col>
</y-row>
```

### 禁用状态

*Demo*

<y-row>
  <y-col :md="12">
    <y-button type="primary" disabled>Primary</y-button>
    <y-button type="secondary" disabled>Secondary</y-button>
    <y-button type="success" disabled>Success</y-button>
    <y-button type="danger" disabled>Danger</y-button>
    <y-button type="warning" disabled>Warning</y-button>
    <y-button type="info" disabled>Info</y-button>
    <y-button type="light" disabled>Light</y-button>
    <y-button type="dark" disabled>Dark</y-button>
    <y-button type="link" disabled>Link</y-button>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-button type="primary" disabled>Primary</y-button>
    <y-button type="secondary" disabled>Secondary</y-button>
    <y-button type="success" disabled>Success</y-button>
    <y-button type="danger" disabled>Danger</y-button>
    <y-button type="warning" disabled>Warning</y-button>
    <y-button type="info" disabled>Info</y-button>
    <y-button type="light" disabled>Light</y-button>
    <y-button type="dark" disabled>Dark</y-button>
    <y-button type="link" disabled>Link</y-button>
  </y-col>
</y-row>
```

### 图标按钮

*Demo*

<y-row>
  <y-col :md="12">
    <y-button type="primary" icon="fa-plus"></y-button>
    <y-button type="secondary" icon="fa-minus"></y-button>
    <y-button type="success" icon="fa-lock"></y-button>
    <y-button type="danger" icon="fa-star"></y-button>
    <y-button type="warning" icon="fa-trash">Warning</y-button>
    <y-button type="info" icon="fa-user-circle">Info</y-button>
    <y-button type="light" icon="fa-calendar">Light</y-button>
    <y-button type="dark" icon="fa-copy">Dark</y-button>
    <y-button type="link" icon="fa-plus">Link</y-button>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-button type="primary" icon="fa-plus"></y-button>
    <y-button type="secondary" icon="fa-minus"></y-button>
    <y-button type="success" icon="fa-lock"></y-button>
    <y-button type="danger" icon="fa-star"></y-button>
    <y-button type="warning" icon="fa-trash">Warning</y-button>
    <y-button type="info" icon="fa-user-circle">Info</y-button>
    <y-button type="light" icon="fa-calendar">Light</y-button>
    <y-button type="dark" icon="fa-copy">Dark</y-button>
    <y-button type="link" icon="fa-plus">Link</y-button>
  </y-col>
</y-row>
```

### 尺寸

*Demo*

<y-row>
  <y-col :md="12">
    <y-button type="primary" size="lg">大按钮</y-button>
    <y-button type="primary">默认按钮</y-button>
    <y-button type="primary" size="sm">小按钮</y-button>
  </y-col>
</y-row>
<br/>
<y-row>
  <y-col :md="12">
    <y-button type="secondary" size="lg" block>大按钮</y-button>
    <y-button type="secondary" block>默认按钮</y-button>
    <y-button type="secondary" size="sm" block>小按钮</y-button>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-button type="primary" size="lg">大按钮</y-button>
    <y-button type="primary">默认按钮</y-button>
    <y-button type="primary" size="sm">小按钮</y-button>
  </y-col>
</y-row>
<y-row>
  <y-col :md="12">
    <y-button type="secondary" size="lg" block>大按钮</y-button>
    <y-button type="secondary" block>默认按钮</y-button>
    <y-button type="secondary" size="sm" block>小按钮</y-button>
  </y-col>
</y-row>
```

### Loading

*Demo*

<y-row>
  <y-col :md="12">
    <y-button type="primary" :loading="true">加载中</y-button>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-button type="primary" :loading="true">加载中</y-button>
  </y-col>
</y-row>
```

### 按钮组

*Demo*

<y-row>
  <y-col :md="12">
    <y-button-group>
      <y-button type="primary">Left</y-button>
      <y-button type="primary">Middle</y-button>
      <y-button type="primary">Right</y-button>
    </y-button-group>
  </y-col>
</y-row>

---

*Code*

```html
<y-row>
  <y-col :md="12">
    <y-button-group>
      <y-button type="primary">Left</y-button>
      <y-button type="primary">Middle</y-button>
      <y-button type="primary">Right</y-button>
    </y-button-group>
  </y-col>
</y-row>
```

</y-scroll>
