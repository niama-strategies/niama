<ConsultationEntry entry={consultation}></ConsultationEntry>

<script lang="ts">
	import {ConsultationEntry} from '$lib/components';
	import type {PageData} from './$types';

	// PROPS =================================================================================================================================
  export let data: PageData;

  // VARS ==================================================================================================================================
  $: ({consultation} = data);

  // DEBUG =================================================================================================================================
  let debug = false;
  $: if (debug) console.debug('CONSULTATION PAGE', data);
</script>