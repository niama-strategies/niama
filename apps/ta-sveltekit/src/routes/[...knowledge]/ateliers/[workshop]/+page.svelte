<WorkshopEntry entry={workshop}></WorkshopEntry>

<script lang="ts">
	import {WorkshopEntry} from '$lib/components';
	import type {PageData} from './$types';

	// PROPS =================================================================================================================================
  export let data: PageData;

  // VARS ==================================================================================================================================
  $: ({workshop} = data);

  // DEBUG =================================================================================================================================
  let debug = false;
  $: if (debug) console.debug('WORKSHOP PAGE', data);
</script>