<main on:scroll={onScroll} class="h-screen overflow-x-hidden overflow-y-auto {cTheme}">
  <Header {menu} class="z-30 fixed w-full" />
  <Hero data={hero} class={isKnowledge ? 'h-screen' : 'h-1/2'} />
  <slot />
  <KnowledgeItems items={others} />
  <NewsletterSection form={form?.newsletter} border="top" color="primary" />
  {#if isHome}<ContactSection form={form?.contact} />{:else}<ArticleItems items={[organization]} class="mb-4" />{/if}
  <Footer {footer} />
</main>

<script lang="ts">
  import '@brainandbones/skeleton/styles/all.css';
  import '@fontsource/raleway';
  import '@fontsource/raleway/400-italic.css';
  import '@fontsource/raleway/700.css';
  import '@splidejs/svelte-splide/css';
  import '../app.css';
  import '../theme.css';

  import {afterNavigate} from '$app/navigation';
  import {page} from '$app/stores';
  import {ArticleItems, ContactSection, Footer, Header, Hero, KnowledgeItems, NewsletterSection} from '$lib/components';
  import type {ActionData, LayoutData} from './$types';
  import {scrolled} from './stores';

  // PROPS =================================================================================================================================
  export let data: LayoutData;
  export let form: ActionData;

  // VARS ==================================================================================================================================
  $: ({footer, menu} = data);
  $: ({hero = {}, organization, others, theme = 'general', type = 'knowledge'} = $page.data ?? {});
  $: cTheme = `theme-${theme}`;
  $: isKnowledge = type === 'knowledge';
  $: isHome = isKnowledge && theme === 'general';

  // EVENTS ================================================================================================================================
  const onScroll = ({target}: any) => ($scrolled = target?.scrollTop > 0);

  // DEBUG =================================================================================================================================
  let debug = false;
  $: if (debug) console.debug('LAYOUT', $page.data);

  afterNavigate(async () => {
    setTimeout(() => {
      const main = document.querySelector('main');
      main?.scrollTo(0, 0);
    }, 0);
  });
</script>
