# VERT - Design System 

Biblioteca de componentes baseada no [Design System](https://design.vert-capital.com/) da VERT.

## COMO USAR

### Step 1
Instalar biblioteca

```bash
npm i --save @vert-frame-core/design-system
```

### Step 2
Para importar estilo adicionar no arquivo main.ts

```typescript
import '@vert-frame-core/design-system/dist/style.css';
```

### Step 3
Importar os componentes

```html
<template>
    <v-button status="primary" size="lg" @click="onHandleClick">
      Exemplo
    </v-button>
</template>
<script lang=ts>
import { VButton } from '@vert-frame-core/design-system';
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    VButton
  },
  setup() {
    function onHandleClick() {
      console.log('click');
    }

    return { onHandleClick }
  }
});
</script>
```
