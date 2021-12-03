import { ref } from "vue";

export default function () {
    const date = ref(new Date())
    const isError = ref(false)
    const lowerLimit = new Date(new Date(date.value.getTime()).setFullYear(new Date().getFullYear() - 2))
    const upperLimit = date.value
    const handleDateChange = ({ value, error }) => {
        date.value = value
        isError.value = error
    }

    return {
        date,
        isError,
        lowerLimit,
        upperLimit,
        handleDateChange
    }
}