const formatCurrency = (value: number) => {
  const formattedCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

  return formattedCurrency
}

const formatByCurrency = (value: string) => {
  const numericValue = parseFloat(
    value.replace(/[^\d,.-]/g, '').replace(',', '.')
  )

  return numericValue
}

const handleCurrencyInput = (
  event: React.ChangeEvent<HTMLInputElement>,
  onChange: (value: number) => void
) => {
  const value = event.target.value
  const numericValue = Number(value.replace(/\D/g, '')) / 100 || 0
  onChange(numericValue)
}

export { formatCurrency, formatByCurrency, handleCurrencyInput }
