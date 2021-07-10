import {
  ElButton,
  ElButtonGroup,
  ElCard,
  ElCol,
  ElContainer,
  ElAside,
  ElFooter,
  ElHeader,
  ElIcon,
  ElForm,
  ElFormItem,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElPageHeader,
  ElRow,
  ElSubmenu,
  ElPopper,

  // plugins
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
} from 'element-plus'
const components = [
  ElButton,
  ElButtonGroup,
  ElCard,
  ElCol,
  ElContainer,
  ElAside,
  ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElPageHeader,
  ElRow,
  ElSubmenu,
  ElPopper
]
const plugins = [
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
]
// import 'element-plus/lib/theme-chalk/index.css'; // import all styles
// If you want to use the .scss style file, you need to import the base.scss file
// base only, component-specific styles are imported on demand
import 'element-plus/packages/theme-chalk/src/base.scss' 


/*
This is done when the main element library is imported
*/
function initElement (app) {
  // register global components & services
  components.forEach(component => {
    app.component(component.name, component)
  })
  plugins.forEach(plugin => {
    app.use(plugin)
  })
}

export default initElement

