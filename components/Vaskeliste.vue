<template>
  <div>
    <div class="flex flex-col gap-10 justify-center text-gray-800">

      <div class="p-5 rounded-2xl bg-white shadow-sm">
        <div class="relative isolate grid place-items-center rounded-lg overflow-hidden">
          <Ukebilde :weekNumber="ws.weekNumber" class="w-full h-64"/>
          <div class="absolute h-full w-full z-10 from-transparent to-black/50 bg-gradient-to-b"/>
          <div class="text-center text-white absolute z-10">
            <h1 class="text-8xl font-semibold">{{ ws.weekNumber }}</h1>
            <span class="text-2xl">{{ start }} - {{ end }}</span>
          </div>
        </div>
      </div>

      <div class="p-5 rounded-2xl bg-white shadow-sm">
        <div class="text-center text-sm">Vaskere denne uka</div>
        <List @set-action="handleSetAction" :weekNumber="ws.weekNumber"/>
      </div>

      <div class="p-5 space-y-5 rounded-2xl bg-white shadow-sm">
        <button @click="ws.weekNumber = Math.min(ws.weekNumber + 1, numWeeks)"
                class="block w-full p-3 cursor-pointer block bg-blue-600 rounded-lg shadow-sm font-semibold hover:bg-blue-500 text-center text-white">
Neste uke        </button>


        <button @click="ws.weekNumber = Math.max(1, ws.weekNumber - 1)"
                class="block w-full p-3 cursor-pointer block bg-opacity-80 bg-blue-600 rounded-lg shadow-sm font-semibold hover:bg-blue-500 text-center text-white">
          Forrige uke
        </button>

      </div>
    </div>
  </div>
  <Modal :title="actions[chosenAction].label || ''" v-model="modelOpen" >
    <LivingRoomInfo v-if="chosenAction === 'kitchen'" />
    <BathroomInfo v-if="chosenAction === 'bathRoom'" />
    <HallwayInfo v-if="chosenAction === 'hallway'" />
  </Modal>
</template>

<script setup lang="ts">
import {useWeekStore} from "~/stores/week.js";
import {format} from "date-fns";
import { ref, computed } from "vue"


const ws = useWeekStore()

const numWeeks = ws.numWeeks

const start = computed(() => format(ws.getStartOfWeek(ws.weekNumber), "dd MMM"))
const end = computed(() => format(ws.getEndOfWeek(ws.weekNumber), "dd MMM"))

type Action = keyof typeof actions

const actions = {
  kitchen: {
    label: "Kjøkken",
  },
  bathRoom: {
    label: "Bad",
  },
  hallway: {
    label: "Gang",
  }
}


const chosenAction = ref<Action>("kitchen")
const modelOpen = ref(false)

function handleSetAction(action: Action) {
  chosenAction.value = action
  modelOpen.value = true
}


</script>