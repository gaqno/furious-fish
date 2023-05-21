import { useClientStore } from '@/store/client'

export default function () {
  const client = useClientStore();
  const supabase = useSupabaseClient()

  const signIn = async (email: string, password: string) => {
    console.log('signIn', email, password);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (data.user && data.user.id) {
      navigateTo('/dashboard')
      client.$patch({
        session: {
          access_token: data.session?.access_token,
          expires_at: data.session?.expires_at,
          expires_in: data.session?.expires_in,
          refresh_token: data.session?.refresh_token,
          token_type: data.session?.token_type
        },
        user: { ...data.user }
      })
    }
    if (error) {
      console.log('singInERROR', error.message)
    }
  }

  const signUp = async (form: any) => {
    const { data, error } = await supabase.auth.signUp({
      phone: form.phone,
      email: form.email,
      password: form.password,
      options: {
        data: {
          ...form.data
        }
      },
    })

    if (data) {
      console.log({ data })
    }
    if (error) {
      console.log({ error })
    }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.log(error)
    }
  }

  const signInWithFacebook = async () => {
    return await supabase.auth.signInWithOAuth({ provider: 'facebook' })
  }

  const signInWithGoogle = async () => {
    return await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
  }

  return {
    signIn,
    signUp,
    signOut,
    signInWithFacebook,
    signInWithGoogle
  }
}