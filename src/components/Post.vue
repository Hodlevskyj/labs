<template>
  <v-container>
    <h2>{{ post.title }}</h2>
    <v-card>
      <v-card-title>{{ post.title }}</v-card-title>
      <v-card-text>{{ post.content }}</v-card-text>
    </v-card>
    <v-btn @click="goBack" color="primary">Back to Blog</v-btn>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

//отримання інформації про статтю
const fetchPost = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = {
        id,
        title: `Blog Post ${id}`,
        content: `Full content of blog post ${id}...`,
      };
      resolve(post);
    }, 500);
  });
};

const post = ref({});
const route = useRoute();
const router = useRouter();

//отримуємо статтю за id з параметрів маршруту
onMounted(async () => {
  const postId = route.params.id;
  post.value = await fetchPost(postId);
});

function goBack() {
  router.push("/blog");
}
</script>
