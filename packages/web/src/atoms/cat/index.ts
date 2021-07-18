import { atom, useRecoilState } from 'recoil'
import { Result } from '../../components/Search/Search'

export const catState = atom<Result>({
  key: 'catState',
  default: {
    id: '',
    age: 0,
    breed: '',
    city: '',
    country: '',
    description: '',
    gender: '',
    media: [''],
    name: '',
    spayed_neutered: false,
    vaccinated: false,
  },
})

export const useCatState = () => useRecoilState(catState)
