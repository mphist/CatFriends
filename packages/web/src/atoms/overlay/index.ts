import { atom, useRecoilState } from 'recoil'

type OverlayState = {
  show: boolean
  disableScrolling: boolean
}

export const overlayState = atom<OverlayState>({
  key: 'overlayState',
  default: { show: false, disableScrolling: false },
})

export const useOverlayState = () => {
  return useRecoilState(overlayState)
}
