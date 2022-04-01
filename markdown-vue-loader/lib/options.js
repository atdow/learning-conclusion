"use strict";
/**
 * markdone-vue-loader convert sample
 *
 * srouce code：
 *
 * some markdown content...
 * :::${containerName: demo} some code descriptions
 *  ``` vue
 *      vue demo code
 *  ```
 * :::
 * some markdown content...
 *
 * ===> convert result
 *
 * <template>
 *  <div class="${templateClass}">
 *      some markdown content ...
 *      <div class="${demoWrapperClass}">
 *           <slot name="${beforeDemoSlotName}"></slot>
 *               vue demo code render result
 *           <slot name="${afterDemoSlotName}"></slot>
 *      </div>
 *
 *      <div class="${descClass}">
 *           <slot name="${beforeDescSlotName}"></slot>
 *               some code descriptions
 *          <slot name="${afterDescSlotName}"></slot>
 *      </div>
 *
 *      <div class="${highlightClass}">
 *           <slot name="${beforeCodeSlotName}"></slot>
 *           <prev><code class="html" v-pre >
 *               source vue demo code
 *           </code></prev>
 *           <slot name="${afterCodeSlotName}"></slot>
 *      </div>
 *      some markdown content ...
 *  </div>
 * </template>
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=options.js.map