import { atom, useRecoilState } from 'recoil'

export const catState = atom({
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
