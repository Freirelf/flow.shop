import { registerStore } from '@/api/registerStore'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const SignUpForm = z.object({
  nameStore: z.string(),
  managerName: z.string(),
  email: z.string().email(),
  phone: z.string(),
})

type SignUpForm = z.infer<typeof SignUpForm>

function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const { mutateAsync: registerStoreName } = useMutation({
    mutationFn: registerStore,
  })

  async function handleSignUpForm(data: SignUpForm) {
    try {
      await registerStoreName({
        nameStore: data.nameStore,
        managerName: data.managerName,
        email: data.email,
        phone: data.phone,
      })
      toast.success('Loja cadastrada com sucesso.', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch {
      toast.error('Erro ao cadastrar loja.')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant={'ghost'} asChild className=" absolute right-8 top-8">
          <Link to="/sign-in"> Fazer login </Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className=" flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Cadastre-se em nossa plataforma.
            </h1>
            <p className="text-sm text-muted-foreground">
              toda organização que você precisa encontra aqui.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUpForm)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="namStore">Nome da loja </Label>
              <Input id="namStore" type="text" {...register('nameStore')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Celular</Label>
              <Input id="phone" type="number" {...register('phone')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com os nossos{' '}
              <a className="underline underline-offset-4" href="#">
                termos de serviços e políticas de privacidade.
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
