<PortableText {value} />

<script lang="ts">
  import type {SanityBlock} from '$lib/data/schemas.sanity';
  import {PortableText} from '@portabletext/svelte';

  // PROPS =================================================================================================================================
  export let value: SanityBlock[];
</script>
