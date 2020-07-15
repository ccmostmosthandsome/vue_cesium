/*
 * @Author: wangchaoxu
 * @Date: 2020-03-29 12:53:34
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-15 17:03:21
 * @Description:
 */
import Vue from 'vue'
import {
  Pagination,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Message,
  Avatar,
  Collapse,
  CollapseItem,
  Row,
  Col,
  Main,
  Header,
  Container,
  Upload,
  Cascader,
  MessageBox
} from 'element-ui'
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Slider)
Vue.use(Icon)
Vue.use(Avatar)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Main)
Vue.use(Header)
Vue.use(Container)
Vue.use(Upload)
Vue.use(Cascader)
Vue.prototype.$message = Message
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$confirm = MessageBox.confirm
