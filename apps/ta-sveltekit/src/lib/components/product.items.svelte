<UiItems {color} {items} title="Produit" {...$$restProps}>
  <SplideSlide slot="many" let:item={{duration, excerpt, image, places, price, title, uri}} class="card shadow-md !bg-white !mb-2 flex flex-col">
    <img src={image.url} alt="" class="flex-none aspect-[3/2] object-cover" />
    <div class="flex-1 card-body flex flex-col px-8">
      <h4 class="mb-4 font-heading text-2xl first-letter:text-primary-500 first-letter:text-4xl">{title}</h4>
      <UiFeatures
        items={[
          {key: 'Tarif', value: price},
        ]}
        color="white"
        class="mb-4"
      />
      <UiText value={excerpt} />
      <div class="flex-1" />
      <a href={uri} class="btn btn-base btn-filled-primary  self-end mt-8">En savoir plus</a>
    </div>
  </SplideSlide>
</UiItems>

<script lang="ts">
  import {UiFeatures, UiItems, UiText} from '$lib/components';
  import type {Product} from '$lib/data';
  import {SplideSlide} from '@splidejs/svelte-splide';

  // PROPS =================================================================================================================================
  export let color: 'none' | 'primary' | 'surface' | 'white' = 'none';
  export let items: Product[];
</script>
