<UiSection border="all" color="white" image={image} imageRight cImageImg="aspect-none" {...$$restProps}>
  <UiTitle {title} />
  <PortableText value={description} />
</UiSection>

<script lang="ts">
  import {UiSection, UiTitle} from '$lib/components';
  import type {Training} from '$lib/data';
  import {PortableText} from '@portabletext/svelte';

  // PROPS =================================================================================================================================
  export let entry: Training;

  // VARS ==================================================================================================================================
  $: ({description, image, title} = entry);

  // DEBUG =================================================================================================================================
  let debug = false;
  $: if (debug) console.debug('TRAINING ENTRY', entry);
</script>
