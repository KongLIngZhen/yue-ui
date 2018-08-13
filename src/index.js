
import Aside from './components/aside/index.js'
import Button from './components/button/index.js'
import ButtonGroup from './components/button-group/index.js'
import Checkbox from './components/checkbox/index.js'
import CheckboxGroup from './components/checkbox-group/index.js'
import Col from './components/col/index.js'
import Container from './components/container/index.js'
import Datepicker from './components/datepicker/index.js'
import DropdownList from './components/dropdown-list/index.js'
import Footer from './components/footer/index.js'
import Form from './components/form/index.js'
import FormItem from './components/form-item/index.js'
import Header from './components/header/index.js'
import Input from './components/input/index.js'
import Main from './components/main/index.js'
import Radio from './components/radio/index.js'
import RadioGroup from './components/radio-group/index.js'
import Row from './components/row/index.js'
import Scroll from './components/scroll/index.js'
import Section from './components/section/index.js'
import Select from './components/select/index.js'
import Switch from './components/switch/index.js'
import Table from './components/table/index.js'
import TableColumn from './components/table-column/index.js'
import Progress from './components/progress/index.js'
import Modal from './components/modal/index.js'
import Tooltip from './components/tooltip/index.js'
import Popover from './components/popover/index.js'
import Card from './components/card/index.js'
import Collapse from './components/collapse/index.js'
import Alert from './components/alert/index.js'
import Breadcrumb from './components/breadcrumb/index.js'
import BreadcrumbItem from './components/breadcrumb-item/index.js'
import Nav from './components/nav/index.js'
import NavItem from './components/nav-item/index.js'

const components = [
  Aside,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Container,
  Datepicker,
  DropdownList,
  Footer,
  Form,
  FormItem,
  Header,
  Input,
  Main,
  Radio,
  RadioGroup,
  Row,
  Scroll,
  Section,
  Select,
  Switch,
  Table,
  TableColumn,
  Progress,
  Modal,
  Tooltip,
  Popover,
  Card,
  Collapse,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Nav,
  NavItem
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Aside,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Container,
  Datepicker,
  DropdownList,
  Footer,
  Form,
  FormItem,
  Header,
  Input,
  Main,
  Radio,
  RadioGroup,
  Row,
  Scroll,
  Section,
  Select,
  Switch,
  Table,
  TableColumn,
  Progress,
  Modal,
  Tooltip,
  Popover,
  Card,
  Collapse,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Nav,
  NavItem
}
