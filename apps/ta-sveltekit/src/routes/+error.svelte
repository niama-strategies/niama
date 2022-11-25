<UiSection border="top" class="!bg-white" cBorder="-mt-16 text-white">
  <Alert background="bg-warning-500/30" border="border-l-4 border-l-warning-500">
    <h4 slot="title">Oups!</h4>
    <p>Une erreur est survenue. Veuillez revenir sur cette page ultérieurement.</p>
  </Alert>
</UiSection>

<script lang="ts">
  import {page} from '$app/stores';
  import {UiSection} from '$lib/components';
  import {Alert} from '@brainandbones/skeleton';

  $: console.debug($page);
</script>
