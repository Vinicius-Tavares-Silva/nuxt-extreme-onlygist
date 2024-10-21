import type { SupabaseClient } from "@supabase/supabase-js";

type ServiceOptions = {
  redirectToUrl: string
}

export default (client: SupabaseClient, options: ServiceOptions) => ({
  async signInWithGithub() {
    const response = await client.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: options.redirectToUrl,
      }
    })
    return response
  },

  async signOut() {
    const response = await client.auth.signOut()
    return response
  }
})
