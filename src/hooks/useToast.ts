import { useEffect, useMemo } from 'react'
import { toast } from 'react-hot-toast'
import { useTheme } from '@emotion/react'

type ToastOptions = {
  type: 'success' | 'error' | 'normal'
  icon?: string
}

const useToast = (
  message = 'normal',
  options: ToastOptions = { type: 'normal' },
  dependencies: unknown[] = []
) => {
  const { colors } = useTheme()

  const toastStyles = useMemo(
    () => ({
      background: colors.title,
      color: colors.background,
    }),
    [colors.background, colors.title]
  )

  useEffect(() => {
    if (!message) return
    const { type, icon } = options

    switch (type) {
      case 'normal':
        toast(message, { icon, style: toastStyles })
        break
      case 'success':
        toast.success(message, { icon, style: toastStyles })
        break
      case 'error':
        toast.error(message, { icon, style: toastStyles })
        break
      default:
        toast(message, { icon, style: toastStyles })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}

export default useToast
