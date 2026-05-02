import { useEffect, useState, useCallback } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '#/components/ui/popover'
import { Label } from '#/components/ui/label'
import { Switch } from '#/components/ui/switch'
import { Button } from '#/components/ui/button'
import { Settings, Moon, Sun, Monitor, Volume2, VolumeX, Check } from 'lucide-react'
import { useVoice } from '#/hooks/voice.hook'
import { cn } from '#/lib/utils'

type ThemeMode = 'light' | 'dark' | 'auto'

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

const COLOR_STORAGE_KEY = 'sisfodes-primary-color'

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') return 'auto'
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark' || stored === 'auto') return stored
  return 'auto'
}

function applyThemeMode(mode: ThemeMode) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const resolved = mode === 'auto' ? (prefersDark ? 'dark' : 'light') : mode

  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(resolved)

  if (mode === 'auto') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', mode)
  }

  document.documentElement.style.colorScheme = resolved
}

/**
 * Komponen Pengaturan untuk mengubah tema, warna primer, dan mengaktifkan fitur Text-to-Speech.
 * Menggabungkan fungsi ThemeToggle dan ThemeCustomizer ke dalam satu Popover.
 */
export default function Setting() {
  const [mode, setMode] = useState<ThemeMode>('auto')
  const [currentColor, setCurrentColor] = useState('#0D47A1')
  const { isEnabled, toggleVoice } = useVoice()

  /**
   * Applies the primary color to the document root
   */
  const applyColor = useCallback((color: string) => {
    document.documentElement.style.setProperty('--primary', color)
    setCurrentColor(color)
    window.localStorage.setItem(COLOR_STORAGE_KEY, color)
  }, [])

  useEffect(() => {
    const initialMode = getInitialMode()
    setMode(initialMode)
    applyThemeMode(initialMode)

    const storedColor = window.localStorage.getItem(COLOR_STORAGE_KEY)
    if (storedColor) {
      applyColor(storedColor)
    }
  }, [applyColor])

  useEffect(() => {
    if (mode !== 'auto') return

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyThemeMode('auto')

    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [mode])

  const handleThemeChange = (newMode: ThemeMode) => {
    setMode(newMode)
    applyThemeMode(newMode)
    window.localStorage.setItem('theme', newMode)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='rounded-full shadow-lg bg-white dark:bg-slate-900 border-gray-200 dark:border-gray-800 size-12 md:size-14'
          aria-label='Settings'
        >
          <Settings className='size-6 md:size-7' />
        </Button>
      </PopoverTrigger>
      <PopoverContent align='end' className='w-72 p-5'>
        <div className='flex flex-col gap-6'>
          {/* Mode Tema */}
          <div className='flex flex-col gap-3'>
            <h4 className='font-bold text-sm flex items-center gap-2'>
              <Monitor className='size-4' /> Mode Tampilan
            </h4>
            <div className='grid grid-cols-3 gap-2'>
              <Button
                variant={mode === 'light' ? 'default' : 'outline'}
                size='sm'
                className='flex flex-col h-auto py-2 gap-1'
                onClick={() => handleThemeChange('light')}
              >
                <Sun className='size-4' />
                <span className='text-[10px]'>Terang</span>
              </Button>
              <Button
                variant={mode === 'dark' ? 'default' : 'outline'}
                size='sm'
                className='flex flex-col h-auto py-2 gap-1'
                onClick={() => handleThemeChange('dark')}
              >
                <Moon className='size-4' />
                <span className='text-[10px]'>Gelap</span>
              </Button>
              <Button
                variant={mode === 'auto' ? 'default' : 'outline'}
                size='sm'
                className='flex flex-col h-auto py-2 gap-1'
                onClick={() => handleThemeChange('auto')}
              >
                <Monitor className='size-4' />
                <span className='text-[10px]'>Sistem</span>
              </Button>
            </div>
          </div>

          {/* Warna Tema */}
          <div className='flex flex-col gap-3 border-t pt-4'>
            <h4 className='font-bold text-sm'>Warna Utama</h4>
            <div className='flex flex-wrap gap-3'>
              {THEME_COLORS.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => applyColor(theme.value)}
                  title={theme.label}
                  className={cn(
                    'w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center',
                    currentColor === theme.value ? 'border-primary scale-110 shadow-md' : 'border-transparent hover:scale-105'
                  )}
                  style={{ backgroundColor: theme.value }}
                >
                  {currentColor === theme.value && <Check className='size-4 text-white' />}
                </button>
              ))}
            </div>
          </div>

          {/* Aksesibilitas TTS */}
          <div className='flex flex-col gap-3 border-t pt-4'>
            <h4 className='font-bold text-sm'>Aksesibilitas</h4>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                {isEnabled ? <Volume2 className='size-4 text-primary' /> : <VolumeX className='size-4 text-muted-foreground' />}
                <Label htmlFor='tts-toggle' className='text-xs'>Text to Speech</Label>
              </div>
              <Switch
                id='tts-toggle'
                checked={isEnabled}
                onCheckedChange={toggleVoice}
              />
            </div>
            <p className='text-[10px] text-muted-foreground leading-relaxed'>
              Suara akan muncul saat Anda memblokir atau menyeleksi teks di aplikasi.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
