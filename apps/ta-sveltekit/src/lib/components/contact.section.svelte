<UiSection title="Me contacter" class="relative" {...$$restProps}>
  <form method="POST" action="?/contact" use:enhance={onSubmit} class="mb-12 w-full max-w-lg flex flex-col items-end gap-3">
    <fieldset class="w-full flex items-center gap-4">
      <FormText {form} name="forename" label="Prénom" init={!isSuccess} />
      <FormText {form} name="surname" label="Nom" init={!isSuccess} />
    </fieldset>
    <FormEmail {form} name="email" label="Votre courriel" init={!isSuccess} />
    <FormArea {form} name="message" label="Votre message" init={!isSuccess} />
    <button class="btn btn-filled-primary">Envoyer</button>
  </form>

  {#if form}<div class="toast toast-center w-full max-w-2xl">
      <div class="alert {isSuccess ? 'alert-success' : 'alert-error'} flex justify-center">
        <div>{alert}</div>
      </div>
    </div>{/if}

  <UiMap class="!absolute top-0 -bottom-16 right-0 w-1/2" />
</UiSection>

<script lang="ts">
  import {enhance, type SubmitFunction} from '$app/forms';
  import {FormArea, FormEmail, FormText, UiMap, UiSection} from '$lib/components';
  import type {Opt} from '@niama/core';
  import type {ContactForm} from '../contact/schemas';

  // PROPS =================================================================================================================================
  export let form: Opt<ContactForm>;

  // VARS ==================================================================================================================================
  $: isSuccess = form?.type === 'success';
  $: alert = isSuccess ? 'Vous êtes maintenant inscrit(e) à la newsletter!' : 'Une erreur est survenue. Veuillez réessayer ultérieurement.';

  // EVENTS ==================================================================================================================================
  const onSubmit: SubmitFunction = ({cancel, data}) => {
    /*const sanitized = sanitize(data);
    if (sanitized.type !== 'success') {
      form = sanitized;
      cancel();
    }*/
  };
</script>
