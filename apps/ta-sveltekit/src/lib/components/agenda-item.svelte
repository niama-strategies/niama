<a href="/" class="card w-1/4 !ring-1 !bg-white">
  <h4 class="card-header font-heading">{title}</h4>
  <div class="card-body flex flex-col">
    <PortableText value={excerpt} />
    <a href="/" class="btn btn-base btn-filled-primary self-end mt-8">En savoir plus</a>
  </div>
</a>

<script lang="ts">
  import type {Consultation} from '$lib/data';
  import {PortableText} from '@portabletext/svelte';

  // PROPS =================================================================================================================================
  export let item: Consultation;

  // VARS ==================================================================================================================================
  $: ({excerpt, title} = item);

  // DEBUG =================================================================================================================================
  export let debug = false;
  $: if (debug) console.debug('CONSULTATION', item);
</script>
