/*
 * @Author: wangchaoxu
 * @Date: 2020-03-29 12:53:34
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-16 15:15:25
 * @Description:
 */
import Vue from 'vue';
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
  MessageBox,
  Loading
} from 'element-ui';
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import VueRouter from 'vue-router';
Vue.component(CollapseTransition.name, CollapseTransition);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Avatar);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Main);
Vue.use(Header);
Vue.use(Container);
Vue.use(Upload);
Vue.use(Cascader);
Vue.use(Loading.directive);
Vue.prototype.$message = Message;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$confirm = MessageBox.confirm;
//this.loading.open(); this.loading.close();
Vue.prototype.$loading = {
  loading: null,
  open() {
    this.loading = Loading.service({
      // 声明一个loading对象
      lock: true, // 是否锁屏
      text: '正在加载...', // 加载动画的文字
      spinner: 'el-icon-loading', // 引入的loading图标
      background: 'rgba(0, 0, 0, 0.5)', // 背景颜色
      target: '.sub-main', // 需要遮罩的区域
      body: true,
      customClass: 'mask' // 遮罩层新增类名
    });
    setTimeout(() => {
      // 设定定时器，超时5S后自动关闭遮罩层，避免请求失败时，遮罩层一直存在的问题
      this.loading.close(); // 关闭遮罩层
    }, 5000);
  },
  close() {
    this.loading.close();
  }
};
