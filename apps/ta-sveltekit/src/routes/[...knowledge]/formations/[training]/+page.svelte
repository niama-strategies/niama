<TrainingEntry entry={training}></TrainingEntry>

<script lang="ts">
	import {TrainingEntry} from '$lib/components';
	import type {PageData} from './$types';

	// PROPS =================================================================================================================================
  export let data: PageData;

  // VARS ==================================================================================================================================
  $: ({training} = data);

  // DEBUG =================================================================================================================================
  let debug = false;
  $: if (debug) console.debug('TRAINING PAGE', data);
</script>