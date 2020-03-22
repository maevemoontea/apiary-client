<template>
<div class="hiveShortCard">
  <div class="hiveCard_mainImage">
    <img src="@/assets/hives/HiveImage.png" v-bind:alt="hiveNumber" />
  </div>
	<div class="hiveCard_mainText">
		<h2>№{{ hiveNumber }}</h2>
		<p>{{ queenBreed }}, {{ queenAge }}р.</p>
		<p>Вулик: {{ hiveType }}</p>
	</div>
	<div class="hiveCard_healthData">
		<div class="hiveCard_healthData_timestamp">
			<img src="@/assets/icons/clock.png" alt="Date" />
      <span>{{ lastVisitDate }}</span>
		</div>
		<div class="hiveCard_healthData_temperature">
			<img v-if="healthData.temperature > 36" src="@/assets/icons/temperatureHigh.png" alt="temperature" />
      <img v-else-if="healthData.temperature < 32" src="@/assets/icons/temperatureLow.png" alt="temperature" />
      <img v-else src="@/assets/icons/temperatureOptimal.png" alt="temperature" />
      <span>{{ healthData.temperature }}</span>
		</div>
		<div class="hiveCard_healthData_humidity">
			<img v-if="healthData.humidity > 90" src="@/assets/icons/humidityHigh.png" alt="humidity" />
      <img v-else-if="healthData.humidity < 65" src="@/assets/icons/humidityLow.png" alt="humidity" />
      <img v-else src="@/assets/icons/humidityOptimal.png" alt="humidity" />
      <span>{{ healthData.humidity }}</span>
		</div>
		<div class="hiveCard_healthData_maxSoundIntencityHz">
			<img src="@/assets/icons/sound.png" alt="Sound" />
      <span>{{ healthData.maxSoundIntencityHz }}</span>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: "HiveShortCard",
  data: function() {
  	return {
    id: '5e6f4150c193973815ee7b1c',
    hiveNumber: 2,
    hiveImg: '@/assets/hives/HiveImage.png',
    queenBreed: 'Українська степова',
    queenAge: 0,
    hiveType: 'Дадан',
    lastVisitDate: '2014-01-31',
    healthData: {
      timestamp: '2014-11-26T02:09:58 -02:00',
      temperature: 34,
      humidity: 90,
      maxSoundIntencityHz: 379
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/styles/_base.module.scss";
  .hiveShortCard {
    @include area();
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 25em;
    flex-wrap: wrap;
    justify-content: stretch;

    .hiveCard_mainImage {
      flex-grow: 0;
    }

    .hiveCard_mainText {
      flex-grow: 1;
      text-align: left;
      h2 {}
    }

    .hiveCard_healthData {
      flex-grow: 1;
      display: flex;
      justify-content: space-evenly;
      align-items: flex-end;
      padding-bottom: 1em;

      .hiveCard_healthData_timestamp img {
        margin-bottom: -0.5em;
      }

      .hiveCard_healthData_temperature, .hiveCard_healthData_humidity, .hiveCard_healthData_maxSoundIntencityHz {
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>