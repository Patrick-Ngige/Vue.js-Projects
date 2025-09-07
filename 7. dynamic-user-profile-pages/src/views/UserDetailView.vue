<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router' //accessing info about the current route

const user = ref(null)
const loading = ref(null)
const error = ref(null)

//accessing the current route object
const route = useRoute()

//getting id parameter from the url
const userId = route.params.id

async function fetchUser() {
  try {
    //using the id to fetch specific user
    const repsonse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if (!repsonse.ok) {
      throw new Error('User not found')
    }
    user.value = await Response.json()
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchUser()
})
</script>
