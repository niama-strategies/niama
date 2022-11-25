<UiSection {image} {title} {color} {uri} {...$$restProps}>
  <UiText value={excerpt} />
</UiSection>

<script lang="ts">
  import {UiSection, UiText} from '$lib/components';
  import type {Article} from '$lib/data';

  // PROPS =================================================================================================================================
  export let color: 'none' | 'primary' | 'surface' | 'white' = 'white';
  export let items: Pick<Article, 'excerpt' | 'image' | 'title' | 'uri'>[];

  // VARS ==================================================================================================================================
  $: ({excerpt, image, title, uri} = items[0]);

  // DEBUG =================================================================================================================================
  let debug = false;
  $: if (debug) console.debug('ARTICLE ITEMS', items);
</script>
