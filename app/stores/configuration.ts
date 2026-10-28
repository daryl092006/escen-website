import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useConfigurationStore = defineStore('configuration', () => {
    const parametres = ref<any[]>([]);

    const fetchConfigurations = async () => {
        try {
            const { $axios } = useNuxtApp();
            const response = await $axios.get(`/public/configurations`);
            if (response.data && response.data.data) {
                parametres.value = response.data.data;
            } else if (Array.isArray(response.data)) {
                parametres.value = response.data;
            }
        } catch (error) {
            console.error('Error fetching configurations:', error);
        }
    };

    const getParamValue = (key: string) => {
        const param = parametres.value.find((p) => p.key === key);
        return param ? param.value : null;
    };

    return {
        parametres,
        fetchConfigurations,
        getParamValue
    };
});
