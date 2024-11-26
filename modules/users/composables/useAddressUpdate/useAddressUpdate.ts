import type { User } from '@/modules/users/entities/User/User'
import type { Address } from '@/modules/users/entities/Address/Address'

interface useAddressUpdateOptions {
  user: Ref<User | undefined>
}

const INITIAL_ADDRESS_INFO: Address = {
  zipCode: '',
  state: '',
  number: '',
  city: '',
  street: '',
  complement: '',
  neighborhood: '',
}
export function useAddressUpdate({ user }: useAddressUpdateOptions) {
  const services = useServices()
  const loading = ref<boolean>(false)

  const address = ref<Address>(INITIAL_ADDRESS_INFO)


  const searchZipCode = async () => {
    if (!address.value.zipCode) {
      return
    }

    loading.value = true
    try {
      const response = await services.users.searchAddressByZipCode(address.value.zipCode)
      address.value = response.data
    } catch (e) {
      logAndTrack(e)
    } finally {
        loading.value = false
    }
  }

  watchEffect(() => {
    if (!user.value) {
      return
    }

    address.value = user.value.address ?? INITIAL_ADDRESS_INFO
  })

  return {
    loading,
    address,
    searchZipCode
  }
}