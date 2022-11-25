<ArticleItems items={[article]} border="top" />
<ConsultationItems items={consultations} color={consultationsColor} />
<WorkshopItems items={workshops} />
<TrainingItems items={trainings} color={trainingsColor} />
<EventSection items={events} border="bottom" color="primary" />

<script lang="ts">
  import {ArticleItems, ConsultationItems, EventSection, TrainingItems, WorkshopItems} from '$lib/components';
  import type {PageData} from './$types';

  // PROPS =================================================================================================================================
  export let data: PageData;

  // VARS ==================================================================================================================================
  $: ({article, consultations, events, trainings, workshops} = data);
  $: count = +(consultations.length > 0) + +(workshops.length > 0) + +(trainings.length > 0);
  $: consultationsColor = count > 1 ? 'primary' : 'none';
  $: trainingsColor = count === 3 ? 'white' : 'none';

  // DEBUG =================================================================================================================================
  let debug = false;
  $: if (debug) console.debug('KNOWLEDGE PAGE', data);
</script>
