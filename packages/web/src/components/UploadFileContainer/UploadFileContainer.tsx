import { forwardRef, RefObject } from 'react'
import Icon from '../Icon'

export type UploadFileContainerProps = {
  id: string
  thumbnail: string | undefined
  setThumbnail: React.Dispatch<React.SetStateAction<string | undefined>>
}

function UploadFileContainer(
  { id, thumbnail, setThumbnail }: UploadFileContainerProps,
  forwardedRef: React.Ref<HTMLInputElement>
) {
  const ref = forwardedRef as RefObject<HTMLInputElement>
  return (
    <div>
      <input
        type='file'
        id={id}
        accept='image/*,video/*'
        ref={ref}
        onChange={() => {
          if (ref?.current?.files?.length !== 0) {
            console.log(ref?.current?.files?.[0])
            setThumbnail(URL.createObjectURL(ref?.current?.files?.[0]))
          }
        }}
        hidden
      />
      <label htmlFor={id}>
        {!!thumbnail ? (
          <div id='fileWrapper'>
            {ref!.current!.files![0].type.includes('image') ? (
              <img src={thumbnail} alt='thumbnail1' />
            ) : (
              <video src={thumbnail} />
            )}
            <Icon
              name='delete_button'
              onClick={(e) => {
                e.preventDefault()
                setThumbnail(undefined)
                ref!.current!.value = ''
              }}
            />
          </div>
        ) : (
          <Icon name='add_button' />
        )}
      </label>
    </div>
  )
}

export default forwardRef<HTMLInputElement, UploadFileContainerProps>(
  UploadFileContainer
)
