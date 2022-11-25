{#if hasAny}<div class="-my-16 flex">
    {#each items as { excerpt, image, slug, title, uri }}
      <a href={uri} class="theme-{slug} relative overflow-hidden group w-1/4 h-[600px] flex justify-center items-center">
        <img alt="" src={image.url} class="{cAbs} -z-20 object-cover group-hover:scale-105" />
        <div class="{cAbs} -z-10 translate-y-full bg-primary-500 group-hover:translate-y-0">
          <div class="mt-[320px] px-4 text-center"><PortableText value={excerpt} /></div>
        </div>
        <UiTitle {title} cStain="-top-2 text-primary-500" cTitle="py-6 px-12 text-4xl text-black" />
      </a>
    {/each}
  </div>{/if}

<script lang="ts">
  import {UiTitle} from '$lib/components';
  import type {Knowledge} from '$lib/data';
  import {PortableText} from '@portabletext/svelte';

  // PROPS =================================================================================================================================
  export let items: Knowledge[];

  // STYLES ================================================================================================================================
  const cAbs = `absolute inset-0 w-full h-full transition-transform duration-500`;

  // VARS ==================================================================================================================================
  $: hasAny = items?.length > 0;

  // DEBUG =================================================================================================================================
  let debug = false;
  $: if (debug) console.debug('KNOWLEDGE ITEMS', items);
</script>
