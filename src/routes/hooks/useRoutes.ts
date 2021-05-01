import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

type AppRoute = {
  key: string
  url: string
  name: string
}

type AppRoutes = {
  [route: string]: AppRoute
}

const useRoutes = () => {
  const { t } = useTranslation()
  const [appRoutes, setAppRoutes] = useState<AppRoutes>({})

  useEffect(() => {
    setAppRoutes({
      anime: {
        key: 'anime',
        url: '/anime',
        name: t('routes.anime.name'),
      },
      countries: {
        key: 'countries',
        url: '/countries',
        name: t('routes.countries.name'),
      },
    })
  }, [t])

  return Object.values(appRoutes)
}

export default useRoutes
