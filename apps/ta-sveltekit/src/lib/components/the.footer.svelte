<UiSection border="top" color="surface" class="text-white items-center {cEl}" {...$$restProps}>
  <div class="container flex justify-between items-center">
    <dl class="list-dl">
      <div>
        <IconMap class="w-6 h-6 text-primary-500" />
        <span class="flex-auto">
          <dt>{street}</dt>
          <dd>{zipcode} {city}</dd>
        </span>
      </div>
      <div>
        <IconEmail class="w-6 h-6 text-primary-500" />
        <span class="flex-auto">
          <dd>{email}</dd>
        </span>
      </div>
      <div>
        <IconPhone class="w-6 h-6 text-primary-500" />
        <span class="flex-auto">
          <dd>{phone}</dd>
        </span>
      </div>
    </dl>
    <div class="flex flex-col gap-3 items-end">
      <div class="flex items-center justify-center gap-4">
        <a href="/" class="unstyled text-primary-500 hover:text-primary-300"><IconFb class="w-12 h-12" /></a>
        <a href="/" class="unstyled text-primary-500 hover:text-primary-300"><IconInsta class="w-12 h-12" /></a>
        <a href="/" class="unstyled text-primary-500 hover:text-primary-300"><IconYt class="w-12 h-12" /></a>
      </div>
      <Divider class="border-dashed border-surface-600" />
      <div class="flex flex-col items-end">
        <span>©2022 L'ENVOL - LA RÉUNION</span>
        <span class="text-sm">Tous droits réservés</span>
      </div>
      <span class="text-sm text-surface-500">mentions légales</span>
    </div>
  </div>
</UiSection>

<script lang="ts">
  import {UiSection, type FooterData} from '$lib/components';
  import {Divider} from '@brainandbones/skeleton';
  import IconPhone from '~icons/bi/phone';
  import IconMap from '~icons/bi/pin-map';
  import IconEmail from '~icons/heroicons/at-symbol';
  import IconFb from '~icons/ph/facebook-logo-thin';
  import IconInsta from '~icons/ph/instagram-logo-thin';
  import IconYt from '~icons/ph/youtube-logo-thin';

  // PROPS =================================================================================================================================
  let cEl = '';
  export {cEl as class};
  export let footer: FooterData;

  // VARS ==================================================================================================================================
  $: ({city, email, fb, phone, street, zipcode} = footer);
</script>
