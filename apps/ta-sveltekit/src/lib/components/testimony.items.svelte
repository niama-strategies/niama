<UiSection title="Témoignages" class="min-h-[30rem] bg-[url(/17.jpg)] bg-cover">
  <Splide options={{type: 'fade', arrows: false, pagination: false, autoplay: true, easing: 'linear', speed: 1000, fixedWidth: '100%', rewind: true}}>
    {#each items as { author, content, title }}
      <SplideSlide>
        <article class="prose mx-auto flex-1 flex flex-col items-center justify-center text-center lg:prose-xl">
          <h5 class="text-3xl italic">{title}</h5>
          <p class="italic">{content}</p>
          <p class="font-bold">{author}</p>
        </article>
      </SplideSlide>{/each}
  </Splide>
</UiSection>

<script lang="ts">
  import {UiSection} from '$lib/components';
  import type {Testimony} from '$lib/data';
  import {Splide, SplideSlide} from '@splidejs/svelte-splide';

  // PROPS =================================================================================================================================
  export let items: Testimony[];
</script>
