{#if hasBorderTop}<UiBorder class="-mt-16 {cBorder}" />{/if}
<section class="overflow-hidden {expanded ? 'py-12' : 'p-12'} {hasBorderTop ? 'pt-4' : ''} {cElBg} {cEl}">
  <div class="flex items-start gap-8 {expanded ? 'w-full' : 'container mx-auto'}">
    {#if image && !imageRight}<UiImage {image} class="flex-none {cImage}" border={imageBorder} cImg="object-cover {cImageImg}" />{/if}
    <div class="flex-1 flex flex-col items-start">
      <div class={expanded ? 'mx-12' : ''}><UiTitle {title} cStain="-top-1 {cStain}" /></div>
      <slot />
      {#if uri}<a href={uri} class="mt-8 self-end btn btn-base {cUriBg}">En savoir plus</a>{/if}
    </div>
    {#if image && imageRight}<UiImage {image} class="flex-none {cImage}" border={imageBorder} right cImg="object-cover {cImageImg}" />{/if}
  </div>
</section>
{#if hasBorderBottom}<UiBorder class="rotate-180 {cBorder}" />{/if}

<script lang="ts">
  import {UiImage, UiTitle} from '$lib/components';
  import type {Image} from '$lib/data';
  import type {Opt} from '@niama/core';
  import UiBorder from './ui.section.border.svelte';

  // PROPS =================================================================================================================================
  export let border: 'all' | 'bottom' | 'none' | 'top' = 'none';
  export let color: 'none' | 'primary' | 'surface' | 'white' = 'none';
  export let expanded = false;
  export let image: Opt<Image> = undefined;
  export let imageRight: boolean = false;
  export let title: Opt<string> = undefined;
  export let uri: Opt<string> = undefined;

  // VARS ==================================================================================================================================
  $: hasBorderBottom = ['all', 'bottom'].includes(border);
  $: hasBorderTop = ['all', 'top'].includes(border);
  $: imageBorder = color === 'primary' ? 1 : 2;

  // STYLES ================================================================================================================================
  let [cBorder, cEl, cImage, cImageImg] = ['', '', 'max-w-lg', 'aspect-[3/2]'];
  export {cBorder, cEl as class, cImage, cImageImg};
  $: cElBg = {none: '!bg-surface-200', primary: '!bg-primary-500', surface: '!bg-surface-800', white: '!bg-white'}[color];
  $: cBorderBg = {none: 'text-surface-200', primary: 'text-primary-500', surface: 'text-surface-800', white: 'text-white'}[color];
  $: cBorder = `relative ${cBorderBg} ${cBorder}`;
  $: cStain = color === 'primary' ? 'text-white/50' : 'text-primary-500/50';
  $: cUriBg = color === 'primary' ? 'bg-surface-600 !text-white' : 'btn-filled-primary';
</script>

<style>
  :global(.splide__arrow) {
    opacity: 1 !important;
    background-color: rgb(var(--color-primary-500)) !important;
  }
  :global(.splide__arrow svg) {
    fill: white !important;
  }
</style>
