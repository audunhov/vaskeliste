import {defineStore} from "pinia";
import {addWeeks, endOfISOWeek, getISOWeek, startOfISOWeek} from "date-fns";

export const useWeekStore = defineStore("week", () => {
    const weekNumber = ref(getCurrentWeek())

    const numWeeks = computed(() => {
        const now = new Date()
        return now.getFullYear() % 4 ? 52 : 53
    })

    function getCurrentWeek() {
        const now = new Date()
        return getISOWeek(now)
    }

    function getStartOfWeek(week: number) {
        const now = new Date()
        const currentWeek = getCurrentWeek()
        const diff = week - currentWeek
        const newWeek = addWeeks(now, diff)
        return startOfISOWeek(newWeek)
    }

    function getEndOfWeek(week: number) {
        const now = new Date()
        const currentWeek = getCurrentWeek()
        const diff = week - currentWeek
        const newWeek = addWeeks(now, diff)
        return endOfISOWeek(newWeek)
    }

    return {
        weekNumber,
        numWeeks,
        getCurrentWeek,
        getStartOfWeek,
        getEndOfWeek,
    }

})