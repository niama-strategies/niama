<FormControl {errors} {label} {name} class="w-full {cEl}">
  <textarea {name} bind:value {rows} placeholder={placeholder ?? label ?? name} class={cInput} />
</FormControl>

<script lang="ts">
  import type {Opt} from '@niama/core';
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
	export let rows = 6;

  // VARS ==================================================================================================================================
  let value = init ? form?.values?.[name] ?? '' : '';
  $: errors = form?.data?.fieldErrors?.[name] ?? [];
</script>
