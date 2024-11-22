'use client'

import { useEffect, useRef, forwardRef, useState } from 'react'
import { FileUp, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button, Progress } from '@/components'
import { LuUpload, LuFile, LuX } from 'react-icons/lu'

export interface FileUploadInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'value' | 'onChange'
  > {
  onFileChange: (file: File | null) => void
  value?: File | null
}

const FileUploadInput = forwardRef<HTMLInputElement, FileUploadInputProps>(
  ({ className, onFileChange, value, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [progress, setProgress] = useState(13)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file) {
        if (file.type !== 'application/pdf') {
          setError('Apenas arquivos PDF são permitidos.')
          onFileChange(null)
          return
        }
        setLoading(true)
        setError(null)
        // Simula um carregamento
        setTimeout(() => {
          setLoading(false)
          onFileChange(file)
        }, 1000)
      } else {
        onFileChange(null)
      }
    }

    const handleClear = () => {
      if (inputRef.current) {
        inputRef.current.value = ''
      }
      onFileChange(null)
      setError(null)
    }

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500)
      return () => clearTimeout(timer)
    }, [])

    return (
      <div className="flex flex-col gap-[20px]">
        {!value && (
          <div
            className={cn(
              'relative flex flex-col justify-center items-center gap-[15px] w-full p-[25px] rounded-[8px] border-2 border-dashed border-color-contrast bg-footer [&_svg]:size-[32px] [&_svg]:shrink-0 [&_svg]:text-color-contrast',
              className
            )}
          >
            <FileUp />
            <p className="text-[14px] leading-[14px] text-color-secondary">
              Arraste e solte aqui ou selecione o arquivo para upload
            </p>
            <Button
              type="button"
              variant="outline"
              size="outline"
              className="mr-2"
              onClick={() => inputRef.current?.click()}
              disabled={loading}
            >
              Procurar e selecionar arquivo
            </Button>
            <p className="text-[13px] leading-[13px] text-color-legend">
              Tamanho max.: 10MB
            </p>

            <input
              type="file"
              accept=".pdf"
              className="hidden"
              ref={(node) => {
                if (typeof ref === 'function') {
                  ref(node)
                } else if (ref) {
                  ref.current = node
                }
                inputRef.current = node
              }}
              onChange={handleFileChange}
              {...props}
            />
          </div>
        )}

        {(value || loading) && (
          <>
            <div className="flex items-start gap-[15px] w-full p-[20px] rounded-[8px] border border-border-primary">
              <span className="flex justify-center items-center w-[56px] h-[56px] rounded-full bg-background [&_svg]:size-[24px] [&_svg]:shrink-0 [&_svg]:text-color-legend">
                <FileUp />
              </span>
              <div className="flex flex-1 flex-col justify-between h-full py-[2px]">
                <b className="text-[14px] leading-[14px] font-[500] text-color-secondary">
                  {value?.name}
                </b>
                <p className="text-[12px] leading-[12px] text-color-legend">
                  {value?.size}MB
                </p>
                <Progress value={progress} className="w-full" />
              </div>
              <button
                className="[&_svg]:size-[16px] [&_svg]:shrink-0 [&_svg]:text-color-legend"
                onClick={handleClear}
              >
                <X />
              </button>
            </div>

            <div className="flex">
              <button className="text-[12px] leading-[12px] text-color-contrast">
                Pré-visualizar
              </button>
            </div>
          </>
        )}

        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>
    )
  }
)
FileUploadInput.displayName = 'FileUploadInput'

export default FileUploadInput
