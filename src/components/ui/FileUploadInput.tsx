'use client'

import {
  useEffect,
  useRef,
  forwardRef,
  useState,
  useImperativeHandle
} from 'react'
import { FileUp, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button, Progress } from '@/components'

export interface FileUploadInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'value' | 'onChange'
  > {
  onFileChange: (file: File | null) => void
  value?: File | null
}

const MAX_FILE_SIZE_MB = 10

interface FileUploadInputHandle extends HTMLInputElement {
  clear: () => void
}

const FileUploadInput = forwardRef<FileUploadInputHandle, FileUploadInputProps>(
  ({ className, onFileChange, value, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [progress, setProgress] = useState(0)

    useImperativeHandle<any, any>(
      ref,
      () => ({
        ...inputRef.current,
        clear: () => {
          if (inputRef.current) {
            inputRef.current.value = ''
          }
          onFileChange(null)
          setError(null)
          setProgress(0)
        }
      }),
      [onFileChange]
    )

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]

      if (file) {
        if (file.type !== 'application/pdf') {
          setError('Apenas arquivos PDF são permitidos.')
          onFileChange(null)
          return
        }

        if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
          setError(`O arquivo excede o limite de ${MAX_FILE_SIZE_MB} MB.`)
          onFileChange(null)
          return
        }

        setError(null)
        setLoading(true)

        let progressValue = 0
        const interval = setInterval(() => {
          progressValue += 10
          setProgress(progressValue)
          if (progressValue >= 100) {
            clearInterval(interval)
            setLoading(false)
            onFileChange(file)
          }
        }, 100)
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
      setProgress(0)
    }

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
              Tamanho max.: {MAX_FILE_SIZE_MB} MB
            </p>

            <input
              type="file"
              accept=".pdf"
              className="hidden"
              ref={inputRef}
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
                  {value?.name || 'Carregando...'}
                </b>
                <p className="text-[12px] leading-[12px] text-color-legend">
                  {value
                    ? value.size < 1024 * 1024
                      ? `${(value.size / 1024).toFixed(1)} KB`
                      : `${(value.size / (1024 * 1024)).toFixed(1)} MB`
                    : ''}
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
