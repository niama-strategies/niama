<div class="w-full {cEl}">
  {#if label}<label for={name} class="mb-1">{label}</label>{/if}
  <slot />
  <label for={name}>{errors.join('\n')}</label>
</div>

<script lang="ts">
  import type {Opt} from '@niama/core';

  // PROPS =================================================================================================================================
  let cEl: string;
  export {cEl as class};
  export let errors: string[];
  export let label: Opt<string>;
  export let name: string;
</script>
