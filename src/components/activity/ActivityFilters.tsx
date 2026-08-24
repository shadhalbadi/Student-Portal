import { Download, X } from 'lucide-react'
import { activityFilters, type ActivityFilterId } from '../../data/activityData'
import { useLocale } from '../../i18n/LocaleProvider'
import { Card } from '../ui/Card'
import { FilterPills } from '../ui/FilterPills'

interface Props {
  value: ActivityFilterId
  onChange: (filter: ActivityFilterId) => void
}

/** الضغط على الفلتر النشط يرجّع العرض لكل الأنشطة. */
const toggle = ({ value, onChange }: Props) => (id: ActivityFilterId) =>
  onChange(id === value ? 'all' : id)

function ExportButton({ compact = false }: { compact?: boolean }) {
  const { t } = useLocale()
  return (
    <button
      type="button"
      className={`inline-flex shrink-0 items-center justify-center gap-1.5 bg-brand-50 text-xs font-bold text-brand-700 transition-colors hover:bg-brand-100 ${
        compact ? 'rounded-full px-3 py-1.5' : 'rounded-xl px-3 py-2.5'
      }`}
    >
      <Download size={13} />
      {compact ? t('activity.exportShort') : t('activity.export')}
    </button>
  )
}

/** الديسكتوب: لوحة تصفية عمودية كما في الفيقما. */
export function ActivityFilterPanel(props: Props) {
  const { t } = useLocale()
  const onSelect = toggle(props)

  return (
    <Card className="flex h-fit flex-col gap-4 p-4 max-lg:hidden">
      <h2 className="text-sm font-bold text-ink-900">{t('activity.filterTitle')}</h2>
      <ul className="space-y-1">
        {activityFilters.map((item) => {
          const isActive = props.value === item.id
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onSelect(item.id)}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-brand-100 text-brand-800'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-ink-900'
                }`}
              >
                <span className="flex-1 text-start">{t(item.labelKey)}</span>
                {isActive && <X size={13} className="shrink-0 opacity-60" />}
              </button>
            </li>
          )
        })}
      </ul>
      <ExportButton />
    </Card>
  )
}

/**
 * الموبايل: نفس الفلاتر كشريط حبّات أفقي فوق السجل — أقرب للمتناول
 * من لوحة جانبية تنزل أسفل الصفحة.
 */
export function ActivityFilterChips(props: Props) {
  const { t } = useLocale()

  return (
    <FilterPills
      className="lg:hidden"
      options={activityFilters.map((item) => ({ id: item.id, label: t(item.labelKey) }))}
      value={props.value}
      onChange={toggle(props)}
      trailing={<ExportButton compact />}
    />
  )
}
