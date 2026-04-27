import Progress from '#/components/shared/progress'
import { Button } from '#/components/ui/button'
import { budgetData } from '#/data/budget.data'

export default function BudgetSection() {
  return (
    <div className='bg-primary rounded-lg shadow p-6 w-full'>
      <h2 className='text-2xl font-semibold mb-8 text-white'>
        Transparasi Dana
      </h2>

      <p className='text-white/90 text-md mb-6'>
        Realisasi Anggaran Pendapatan dan Belanja Desa (APBDes) periode
        berjalan
      </p>

      <div className='flex flex-col w-full gap-4 mb-6'>
        <Progress
          label={{ title: budgetData.income.title, value: budgetData.income.total }}
          progress={budgetData.income.progress}
          className={{
            label: 'text-white/80 text-sm',
            root: 'bg-white/30 h-3',
            indicator: 'bg-yellow-400'
          }}
        />
        <Progress
          label={{ title: budgetData.expense.title, value: budgetData.expense.total }}
          progress={budgetData.expense.progress}
          className={{
            label: 'text-white/80 text-sm',
            root: 'bg-white/30 h-3',
            indicator: 'bg-yellow-400'
          }}
        />
      </div>

      <Button
        variant='secondary'
        size='lg'
        className='w-full mt-6 text-primary text-xs font-semibold'
      >
        Lihat Laporan Lengkap
      </Button>
    </div>
  )
}
