import { atom, useRecoilState } from 'recoil'
import { Result } from '../../components/Search/Search'

export const searchState = atom<Result[] | null>({
  key: 'searchState',
  default: null,
})

export const useSearchState = () => {
  return useRecoilState(searchState)
}
