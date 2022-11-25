<AppBar
  background={$scrolled ? 'bg-white' : 'bg-transparent'}
  padding={$scrolled ? 'p-2' : ''}
  shadow={$scrolled ? 'shadow-lg' : ''}
  class={elC}
>
  <a href="/" slot="lead" class="flex gap-1 items-center {$scrolled ? '' : 'hidden'}">
    <Logo class="w-12" />
    <hgroup class="uppercase">
      <h3 class="font-heading text-sm leading-none text-surface-800">Traditions</h3>
      <h4 class="font-heading text-xs leading-none text-surface-500">Ancestrales</h4>
    </hgroup>
  </a>
  <nav class="list-nav flex justify-center">
    <ul class="flex items-center ">
      {#each leftNavs as nav}<li class={cNav(nav)}><HeaderNav {nav} /></li>{/each}
      <li class={$scrolled ? 'hidden' : ''}><a href="/"><Logo class="w-20" /></a></li>
      {#each rightNavs as nav}<li class={cNav(nav)}><HeaderNav {nav} /></li>{/each}
    </ul>
  </nav>
  <div slot="trail" class="w-40" />
</AppBar>

<script lang="ts">
  import {page} from '$app/stores';
  import {Logo} from '$lib/components';
  import type {Menu, Nav} from '$lib/data';
  import {AppBar} from '@brainandbones/skeleton';
  import {scrolled} from '../../routes/stores';
  import HeaderNav from './the.header.nav.svelte';

  // PROPS =================================================================================================================================
  let elC = '';
  export {elC as class};
  export let menu: Menu;

  // VARS ==================================================================================================================================
  $: leftNavs = menu.items.slice(0, Math.ceil(0.5 * menu.items.length));
  $: rightNavs = menu.items.slice(Math.ceil(0.5 * menu.items.length));
  $: cNavActive = ({to}: Nav) => ($page.url.pathname.startsWith(to) ? 'border-primary-500' : 'border-transparent');
  $: cNav = (nav: Nav) => `border-b-2 text-xs ${cNavActive(nav)}`;

  // DEBUG =================================================================================================================================
  let debug = false;
  $: if (debug) console.debug('HEADER', {leftNavs, rightNavs, cNav});
</script>
