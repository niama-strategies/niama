<UiSection title="Les prochains événements" {...$$restProps}>
  {#if hasAny}<div class="flex flex-wrap gap-8">
      {#each items as _event}<div class="card card-body" />{/each}
    </div>{:else}<p>Il n'y a actuellement aucun événement prévu.</p>{/if}
</UiSection>

<script lang="ts">
  import {UiSection} from '$lib/components';
  import type {Event} from '$lib/data';

  // PROPS =================================================================================================================================
  export let items: Event[];

  // VARS ==================================================================================================================================
  $: hasAny = items?.length > 0;

  // DEBUG =================================================================================================================================
  let debug = false;
  $: if (debug) console.debug('EVENT SECTION', items);
</script>
