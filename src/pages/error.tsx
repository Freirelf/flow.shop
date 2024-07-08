import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col gap-2 items-center justify-center">
      <h1 className="text-4xl font-bold">Whoops, algo aconteceu...</h1>
      <p className="text-accent-foreground">
        Um erro inesperado aconteceu, abaixo você encontra os detalhes.
      </p>

      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
