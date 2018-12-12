<template>
  <div id="players-page">
    <h1>Players</h1>
    <ul>
      <li v-for="player of players" :key="player.id">
        {{ player.pitcher_first_name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getPitchers } from "@/services/pitchers";
export default {
  data: () => ({
    players: []
  }),
  async mounted() {
    let p = await getPitchers();
    this.players = p.data;
  }
}
</script>
