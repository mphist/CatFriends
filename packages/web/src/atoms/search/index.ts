import { atom, useRecoilState } from 'recoil'
import { Result } from '../../components/Search/Search'

export const searchState = atom<{
  result: Result[] | null
  pageNum: number
  loading: boolean
  lastPage: boolean
}>({
  key: 'searchState',
  default: { result: null, pageNum: 1, loading: false, lastPage: false },
})

export const useSearchState = () => {
  return useRecoilState(searchState)
}
