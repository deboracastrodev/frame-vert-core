import VTable from '@/components/table/VTable.vue'
import VButton from './components/button/VButton.vue'

export default {
  install: (app: any, options: any): void => {
    app.component('VTable', VTable)
    app.component('VButton', VButton)
  }
}

export { VTable, VButton }