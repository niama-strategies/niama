<UiSection title="Newsletter" {...$$restProps}>
  <div class="w-full flex gap-12">
    <p class="max-w-lg">Pour recevoir chaque semaine mon bulletin, c'est simple, vous avez juste à saisir votre courriel :</p>
    <form method="POST" action="?/newsletter" use:enhance={onSubmit} class="flex-1 flex items-center gap-4">
      <FormEmail {form} name="email" placeholder="Votre courriel" init={!isSuccess} class="max-w-md" />
      <button type="submit" class="btn bg-surface-600 text-white">Je m'inscris</button>
    </form>
  </div>
</UiSection>

<script lang="ts">
  import {enhance, type SubmitFunction} from '$app/forms';
  import {FormEmail, UiSection} from '$lib/components';
  import type {NewsletterForm} from '$lib/data';
  import type {Opt} from '@niama/core';

  // PROPS =================================================================================================================================
  export let form: Opt<NewsletterForm>;

  // VARS ==================================================================================================================================
  $: isSuccess = form?.type === 'success';

  // EVENTS ==================================================================================================================================
  const onSubmit: SubmitFunction = ({cancel, data}) => {
    /*const sanitized = sanitize(data);
    if (sanitized.type !== 'success') {
      form = sanitized;
      cancel();
    }*/
  };
</script>
