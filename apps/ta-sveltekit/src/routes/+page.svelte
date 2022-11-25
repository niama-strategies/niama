<ArticleItems items={[article]} title="Bienvenue" border="top" cImage="max-w-xs" cImageImg="aspect-none" />
<UiSection title="Les prochains événements">
  {#if hasEvents}<div class="flex flex-wrap gap-8">
      {#each events as _event}<div class="card card-body" />{/each}
    </div>{:else}<p>Il n'y a actuellement aucun événement prévu.</p>{/if}
</UiSection>
<TestimonyItems items={testimonies} />
<ArticleItems items={[organization]} border="bottom" color="primary" />

<script lang="ts">
  import {ArticleItems, TestimonyItems, UiSection} from '$lib/components';
  import type {PageData} from './$types';

  // PROPS =================================================================================================================================
  export let data: PageData;

  // VARS ==================================================================================================================================
  $: ({article, events, organization, testimonies} = data);
  $: hasEvents = events.length > 0;

  // DEBUG =================================================================================================================================
  let debug = false;
  $: if (debug) console.debug('PAGE', data);
</script>
