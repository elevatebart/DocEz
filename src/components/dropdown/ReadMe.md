This is how to use a dropdown

```jsx
import Vue from 'vue'
import BDropdownItem from './DropdownItem.vue'
Vue.component('BDropdownItem', BDropdownItem)

<BDropdown>
    <button class="button is-primary" slot="trigger">
        <span>Click me!</span>
    </button>
    <BDropdownItem>Item #1</BDropdownItem>
    <BDropdownItem>Item #2</BDropdownItem>
    <BDropdownItem>Item #3</BDropdownItem>
</BDropdown>
```