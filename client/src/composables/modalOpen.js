import { ref } from 'vue'

export default function () {
    const isModalOpen = ref(false)

    const openModal = function () {
        isModalOpen.value = true
    }

    const closeModal = function () {
        isModalOpen.value = false
    }

    return {
        isModalOpen,
        openModal,
        closeModal
    }
}