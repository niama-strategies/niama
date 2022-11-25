{#if title}<div class="mb-8 relative inline-flex {cEl}">
    <Stain class="absolute left-0 w-full h-full {cStain}" />
    <h4 class="relative inline-flex font-heading uppercase {cTitle}">{title}</h4>
  </div>{/if}

<script lang="ts">
  import type {Opt} from '@niama/core';
  import Stain from './ui.title.stain.svelte';

  // PROPS =================================================================================================================================
  let cEl = '';
  export {cEl as class};
  export let cStain = '-top-1 text-primary-500/50';
  export let cTitle = 'py-2 px-6 text-3xl';
  export let title: Opt<string>;
</script>
