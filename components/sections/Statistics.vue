<script lang="ts" setup>

const { t } = useI18n();
const statistics = (await useStatisticsData()).data.value?.data;

const statisticsCards: {number: number, title: string}[] = [
    {
        number: statistics?.customers ?? 10,
        title: t('statistics.customers')
    },
    {
        number: statistics?.years_experience ?? 8,
        title: t('statistics.yearsOfExperience')
    },
    {
        number: statistics?.realized_projects ?? 20,
        title: t('statistics.projects')
    }
];

</script>

<template>
    <GraphicalFullSection
        id="statistics" 
        dataId="statistics"
        :titlePrefix="t('statistics.titlePrefix')" 
        :title="t('statistics.title')"
    >
        <div class="flex justify-around items-center gap-x-6 h-[calc(100%_-_7rem)]">
            <StatisticsCard 
                v-for="card in statisticsCards"
                :key="card.title"
                :number="card.number"
                :title="card.title"
            />
        </div>
    </GraphicalFullSection>
</template>