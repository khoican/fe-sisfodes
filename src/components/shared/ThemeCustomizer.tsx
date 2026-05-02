import { Settings } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

/**
 * Interface for Theme Color options
 */
interface ThemeColor {
  name: string
  value: string
  label: string
}

const THEME_COLORS: ThemeColor[] = [
  { name: 'primary', value: '#0D47A1', label: 'Biru (Default)' },
  { name: 'hijau', value: '#15803d', label: 'Hijau' },
  { name: 'merah muda', value: '#db2777', label: 'Merah Muda' },
  { name: 'ungu', value: '#7e22ce', label: 'Ungu' },
  { name: 'kuning', value: '#eab308', label: 'Kuning' }
]

const STORAGE_KEY = 'sisfodes-primary-color'

/**
 * ThemeCustomizer Component
 * A floating button that allows users to change the primary theme color.
 * Changes are persisted in localStorage and applied to the --primary CSS variable.
 * 
 * @returns {JSX.Element} The ThemeCustomizer component
 */
export default function ThemeCustomizer () {
  const [isOpen, setIsOpen] = useState(false)
  const [currentColor, setCurrentColor] = useState('#0D47A1')

  /**
   * Applies the primary color to the document root
   * @param {string} color Hex color code
   */
  const applyColor = useCallback((color: string) => {
    document.documentElement.style.setProperty('--primary', color)
    setCurrentColor(color)
    window.localStorage.setItem(STORAGE_KEY, color)
  }, [])

  // Initialize color from localStorage
  useEffect(() => {
    const storedColor = window.localStorage.getItem(STORAGE_KEY)
    if (storedColor) {
      applyColor(storedColor)
    }
  }, [applyColor])

  return (
    <div className='fixed bottom-24 right-4 md:bottom-36 md:right-8 lg:bottom-42 lg:right-16 z-50 flex flex-col items-end gap-3'>
      {/* Color Options */}
      {isOpen && (
        <div className='flex flex-col gap-2 p-2 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 animate-in fade-in slide-in-from-bottom-4 duration-200'>
          {THEME_COLORS.map((theme) => (
            <button
              key={theme.name}
              onClick={() => {
                applyColor(theme.value)
                setIsOpen(false)
              }}
              title={theme.label}
              className='group flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
            >
              <span
                className='w-5 h-5 rounded-full border border-gray-200 dark:border-gray-700'
                style={{ backgroundColor: theme.value }}
              />
              <span className='text-sm font-medium text-gray-700 dark:text-gray-200 capitalize'>
                {theme.name}
              </span>
              {currentColor === theme.value && (
                <span className='w-1.5 h-1.5 rounded-full bg-primary ml-auto' />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='rounded-full shadow-lg bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 p-3 md:p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all border border-gray-200 dark:border-gray-700'
        aria-label='Customizer Tema'
      >
        <Settings className={`w-6 h-6 md:w-7 md:h-7 transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
    </div>
  )
}
