<template>
  <v-container>
    <h2>Blog</h2>
    <v-row>
      <v-col cols="12" md="4" v-for="(post, index) in blogPosts" :key="index">
        <v-card>
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-text>{{ post.excerpt }}</v-card-text>
          <v-card-actions>
            <v-btn @click="viewPost(post.id)">Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" v-if="hasMorePosts">
      <v-btn @click="loadMorePosts" :loading="isLoading">
        Load More
      </v-btn>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const blogPosts = ref([]);
const currentPage = ref(1);
const postsPerPage = 6;
const isLoading = ref(false);
const hasMorePosts = ref(true);

const router = useRouter();

//завантаження постів
const fetchPosts = async (page, limit) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * limit;
      const end = start + limit;
      const totalPosts = 10; //загальна кількість постів
      const posts = Array.from({ length: totalPosts }, (_, i) => ({
        id: i + 1,
        title: `Blog Post ${i + 1}`,
        excerpt: `Summary of blog post ${i + 1}`,
      }));
      resolve(posts.slice(start, end));
    }, 500);
  });
};

//Завантаження перших постів
async function loadMorePosts() {
  if (isLoading.value) return;

  isLoading.value = true;
  const newPosts = await fetchPosts(currentPage.value, postsPerPage);

  if (newPosts.length < postsPerPage) {
    hasMorePosts.value = false; //більше немає постів
  }

  blogPosts.value.push(...newPosts);
  currentPage.value++;
  isLoading.value = false;
}

loadMorePosts();

function viewPost(id) {
  router.push(`/post/${id}`);
}
</script>
