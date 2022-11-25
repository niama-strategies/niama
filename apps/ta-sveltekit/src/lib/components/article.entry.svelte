<UiSection border="all" color="white" image={image} imageRight cImageImg="aspect-none" {...$$restProps}>
  <UiTitle {title} />
  <PortableText value={description} />
</UiSection>

<script lang="ts">
  import {UiSection, UiTitle} from '$lib/components';
  import type {Article} from '$lib/data';
  import {PortableText} from '@portabletext/svelte';

  // PROPS =================================================================================================================================
  export let entry: Article;

  // VARS ==================================================================================================================================
  $: ({description, image, title} = entry);

  // DEBUG =================================================================================================================================
  let debug = false;
  $: if (debug) console.debug('ARTICLE ENTRY', entry);
</script>
