import { useFetch } from "#app";
import { computed } from "vue";

export function usePost(id) {
  const { data: posts, pending, error } = useFetch("/posts.json");

  const post = computed(() => {
    return posts.value ? posts.value.find((p) => p.id === id) : null;
  });

  return { post, pending, error };
}
