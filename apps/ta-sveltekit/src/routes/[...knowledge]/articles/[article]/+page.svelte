<ArticleEntry entry={article}></ArticleEntry>

<script lang="ts">
	import {ArticleEntry} from '$lib/components';
	import type {PageData} from './$types';

	// PROPS =================================================================================================================================
  export let data: PageData;

  // VARS ==================================================================================================================================
  $: ({article} = data);

  // DEBUG =================================================================================================================================
  let debug = false;
  $: if (debug) console.debug('ARTICLE PAGE', data);
</script>