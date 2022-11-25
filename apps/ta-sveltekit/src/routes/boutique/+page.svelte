<ProductItems border="top" items={products} class="pb-24" />

<script lang="ts">
  import {ProductItems} from '$lib/components';
  import type {PageData} from './$types';

  // PROPS =================================================================================================================================
  export let data: PageData;

  // VARS ==================================================================================================================================
  $: ({products} = data);

  // DEBUG =================================================================================================================================
  let debug = false;
  $: if (debug) console.debug('SHOP PAGE', data);
</script>
