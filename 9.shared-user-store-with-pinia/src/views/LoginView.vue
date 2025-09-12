<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const router = useRouter()

//an instance of the auth store
const authStore = useAuthStore()

const isLoading = ref(false)
const tempUsername = ref('TestUser') //temporary username for the input

function performLogin() {
  isLosding.value = true

  setTimeout(() => {
    //calling login action from the store
    authStore.login(tempUsername.value)

    //redirecting when approved
    router.push({ name: 'users' })

    isLoading.value = false
  }, 1000)
}
</script>
