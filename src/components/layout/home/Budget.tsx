import Progress from '#/components/shared/progress'
import { Button } from '#/components/ui/button'
import type { IVillageBudget } from '#/types/IVillageBudget'
import { Link } from '@tanstack/react-router'

interface BudgetProps {
    budget: IVillageBudget
}

/**
 * Komponen Transparansi Anggaran Desa.
 * Menampilkan ringkasan pendapatan dan belanja desa.
 *
 * @param {BudgetProps} props - Properti komponen berisi data anggaran.
 * @returns {JSX.Element} Elemen seksi anggaran.
 */
export default function Budget({ budget }: BudgetProps) {
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('id-ID').format(value)
    }

    const incomeProgress =
        (budget.income.total_realized / budget.income.total_planned) * 100
    const expenditureProgress =
        (budget.expenditure.total_realized / budget.expenditure.total_planned) *
        100

    const totalPlannedMiliar = (budget.income.total_planned / 1_000_000_000).toFixed(2)

    return (
        <div className="bg-primary rounded-lg shadow p-6 w-full flex flex-col justify-between text-white">
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-white">
                        Transparansi Dana
                    </h2>
                    <span className="px-2 py-1 bg-white/20 rounded text-[10px] text-white font-bold">
                        TA {budget.year}
                    </span>
                </div>

                {/* Total Nominal Headline */}
                <div className="mb-6 bg-white/10 p-4 rounded-xl border border-white/10">
                    <span className="text-white/70 text-[10px] uppercase font-bold tracking-wider block">
                        Total Anggaran Pendapatan
                    </span>
                    <span className="text-2xl font-extrabold text-white">
                        Rp {totalPlannedMiliar} Miliar
                    </span>
                </div>

                <p className="text-white/80 text-xs leading-relaxed mb-6">
                    Realisasi Anggaran Pendapatan dan Belanja Desa (APBDes) periode
                    berjalan.
                </p>

                <div className="flex flex-col w-full gap-6">
                    <Progress
                        label={{
                            title: budget.income.title,
                            value: `Rp ${formatCurrency(budget.income.total_realized)}`,
                        }}
                        progress={incomeProgress}
                        className={{
                            label: 'text-white/80 text-xs font-bold uppercase tracking-wider',
                            root: 'bg-white/20 h-3',
                            indicator: 'bg-yellow-450',
                            value: 'text-white font-bold',
                        }}
                    />
                    <Progress
                        label={{
                            title: budget.expenditure.title,
                            value: `Rp ${formatCurrency(budget.expenditure.total_realized)}`,
                        }}
                        progress={expenditureProgress}
                        className={{
                            label: 'text-white/80 text-xs font-bold uppercase tracking-wider',
                            root: 'bg-white/20 h-3',
                            indicator: 'bg-yellow-450',
                            value: 'text-white font-bold',
                        }}
                    />
                </div>
            </div>

            <Button
                variant="secondary"
                size="lg"
                className="w-full mt-6 text-primary text-xs font-bold uppercase tracking-widest hover:bg-white/95"
                asChild
            >
                <Link to="/publikasi/apbdes">
                    Lihat Laporan Lengkap
                </Link>
            </Button>
        </div>
    )
}
