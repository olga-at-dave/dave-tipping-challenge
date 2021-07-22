<template>
  <div id="app">
    <div class="App">
      <div class="Top">
        <h1 class="Header">I sent you the money!</h1>
        <p class="SubHeader">
          Your optional tip helps us stay in business. We also plant a tree for every % tip.
        </p>
        <img :src="dave" class="Dave">
        <img :src="background" class="Background">
      </div>
      <div v-if="tipOptions.length" class="Tips">
        <div
          :class="{ Box: true, SelectedBox: selectedBoxIndex === 1}"
          :click="selectedBoxIndex=1"
        >
          <span class="BoxTitle">No tip</span>
        </div>
        <div
          :class="{ Box: true, SelectedBox: selectedBoxIndex === 2}"
          :click="selectedBoxIndex=2"
        >
          <p class="BoxTitle">{{tipOptions[0].trees}}</p>
          <span class="BoxSubtitle">Trees planted</span>
          <p class="BoxSubtitle">{{tipOptions[0].amount}}%</p>
        </div>
        <div
          :class="{ Box: true, SelectedBox: selectedBoxIndex === 3}"
          :click="selectedBoxIndex=3"
        >
          <p class="BoxTitle">{{tipOptions[1].trees}}</p>
          <span class="BoxSubtitle">Trees planted</span>
          <p class="BoxSubtitle">{{tipOptions[1].amount}}%</p>
        </div>
        <div
          :class="{ Box: true, SelectedBox: selectedBoxIndex === 4}"
          :click="selectedBoxIndex=4"
        >
          <p class="BoxTitle">{{tipOptions[2].trees}}</p>
          <span class="BoxSubtitle">Trees planted</span>
          <p class="BoxSubtitle">{{tipOptions[2].amount}}%</p>
        </div>
        <div
          :class="{ Box: true, SelectedBox: selectedBoxIndex === 5}"
          :click="selectedBoxIndex=5"
        >
          <p class="BoxTitle">{{tipOptions[3].trees}}</p>
          <span class="BoxSubtitle">Trees planted</span>
          <p class="BoxSubtitle">{{tipOptions[3].amount}}%</p>
        </div>
      </div>
      <p class="Pay">Pay nothing now. Collected on payback.</p>
      <button class="Button" @click="handleClick">
        <span>Tip</span>
      </button>
    </div>
  </div>
</template>

<script>
import dave from './dave.png';
import background from './background.png';

export default {
  name: 'App',
  data() {
    return {
      tipOptions: [
        {
          amount: 5,
          trees: 5
        },
        {
          amount: 10,
          trees: 10
        },
        {
          amount: 15,
          trees: 30
        },
        {
          amount: 20,
          trees: 40
        }
      ],
      selectedBoxIndex: 1,
      dave,
      background,
    };
  },
  methods: {
    handleClick() {
      alert("Thank you for your tip!");
    },
  },
}
</script>

<style>
.App {
  text-align: center;
}

.Top {
  background-color: #dfe7f8;
  position: relative;
}

.Dave {
  position: absolute;
  bottom: 3px;
  width: 100%;
}

.Background {
  width: 100%;
}

.Header {
  position: absolute;
  top: 55px;
  color: #3c3c3c;
  left: 0;
  right: 0;
  font-size: 26px;
}

.SubHeader {
  position: absolute;
  top: 105px;
  color: #898989;
  font-size: 17px;
  padding-left: 24px;
  padding-right: 24px;
}

.Tips {
  margin-top: 58px;
  display: flex;
  overflow-x: auto;
  min-width: 100%;
}

.Box {
  min-height: 108px;
  min-width: 124px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  margin-left: 8px;
  margin-right: 8px;
}

.SelectedBox {
  border: 2px solid #0b9a40;
  background-color: #eafbf0;
}

.BoxTitle {
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  font-weight: bold;
}

.BoxSubtitle {
  font-size: 12px;
  line-height: 16px;
  color: #3c3c3c;
}

.Pay {
  margin-top: 32px;
  color: #898989;
}

.Button {
  background-color: #0b9a40;
  padding-top: 16px;
  padding-bottom: 16px;
  color: #ffffff;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  margin-top: 60px;
}

</style>
