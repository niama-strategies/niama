<FormControl {errors} {label} {name} class="w-full {cEl}">
  <div class="relative w-full flex items-center">
    <Icon class="absolute z-10 left-2 w-5 h-5 text-surface-300" />
    <input {name} type="email" bind:value placeholder={placeholder ?? label ?? name} class="pl-8 py-2.5 text-sm {cInput}" />
  </div>
</FormControl>

<script lang="ts">
  import type {Opt} from '@niama/core';
  import Icon from '~icons/heroicons/envelope-solid';
  import FormControl from './form.control.svelte';

  // PROPS =================================================================================================================================
  let cEl = '';
  export {cEl as class};
  export let cInput = '';
  export let form: any;
  export let init = false;
  export let label: Opt<string> = undefined;
  export let name: string;
  export let placeholder: Opt<string> = undefined;

  // VARS ==================================================================================================================================
  let value = init ? form?.values?.[name] ?? '' : '';
  $: errors = form?.data?.fieldErrors?.[name] ?? [];
</script>
