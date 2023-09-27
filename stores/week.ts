import {defineStore} from "pinia";
import {addWeeks, endOfWeek, getWeek, startOfWeek} from "date-fns";

export const useWeekStore = defineStore("week", () => {
    const weekNumber = ref(getCurrentWeek())

    const numWeeks = computed(() => {
        const now = new Date()
        return now.getFullYear() % 4 ? 52 : 53
    })

    function getCurrentWeek() {
        const now = new Date()
        return getWeek(now, {
            weekStartsOn: 1,
            firstWeekContainsDate: 4
        })
    }

    function getStartOfWeek(week: number) {
        const now = new Date()
        const currentWeek = getCurrentWeek()
        const diff = week - currentWeek
        const newWeek = addWeeks(now, diff)
        return startOfWeek(newWeek, {weekStartsOn: 1})
    }

    function getEndOfWeek(week: number) {
        const now = new Date()
        const currentWeek = getCurrentWeek()
        const diff = week - currentWeek
        const newWeek = addWeeks(now, diff)
        return endOfWeek(newWeek, {weekStartsOn: 1})
    }

    return {
        weekNumber,
        numWeeks,
        getCurrentWeek,
        getStartOfWeek,
        getEndOfWeek,
    }

})