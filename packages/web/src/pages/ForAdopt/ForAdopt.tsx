import { css } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { overlayState } from '../../atoms/overlay'
import Overlay from '../../components/Overlay/Overlay'
import client from '../../lib/api/client'
import Icon from '../../components/Icon'

type ForAdoptProps = {}

export default function ForAdopt({}: ForAdoptProps) {
  const history = useHistory()
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [vaccination, setVaccination] = useState<string | undefined>(undefined)
  const [gender, setGender] = useState<string | undefined>(undefined)
  const [spayNeuter, setSpayNeuter] = useState<string | undefined>(undefined)
  const [catDescription, setCatDescription] = useState('')
  const [validationPassed, setValidationPassed] = useState(false)
  const [overlay, setOverlay] = useRecoilState(overlayState)
  const [thumbnail1, setThumbnail1] = useState<string | undefined>(undefined)
  const [thumbnail2, setThumbnail2] = useState<string | undefined>(undefined)
  const [thumbnail3, setThumbnail3] = useState<string | undefined>(undefined)
  const [thumbnail4, setThumbnail4] = useState<string | undefined>(undefined)
  const [thumbnail5, setThumbnail5] = useState<string | undefined>(undefined)
  const [thumbnail6, setThumbnail6] = useState<string | undefined>(undefined)

  const fileRef1 = useRef<HTMLInputElement | null>(null)
  const fileRef2 = useRef<HTMLInputElement | null>(null)
  const fileRef3 = useRef<HTMLInputElement | null>(null)
  const fileRef4 = useRef<HTMLInputElement | null>(null)
  const fileRef5 = useRef<HTMLInputElement | null>(null)
  const fileRef6 = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    // form validation
    if (
      name &&
      breed &&
      age &&
      city &&
      country &&
      vaccination &&
      gender &&
      spayNeuter &&
      catDescription
    )
      setValidationPassed(true)
    else setValidationPassed(false)

    // upload file selection
  }, [
    name,
    breed,
    age,
    city,
    country,
    vaccination,
    gender,
    spayNeuter,
    catDescription,
  ])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await client.post('/cat/register', {
        name,
        gender,
        age,
        breed,
        description: catDescription,
        vaccinated: vaccination,
        city: city,
        country,
        spayedOrNeutered: spayNeuter,
      })

      setOverlay({ show: true, disableScrolling: true })
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div css={forAdopt}>
      <form onSubmit={onSubmit}>
        <div className='gridBox'>
          <div>
            <label>Name of your cat:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Breed of your cat:</label>
            <select
              name='breed'
              id='breed'
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            >
              <option value='' selected disabled hidden>
                Choose...
              </option>
              <option value='abyssinian'>Abyssinian</option>
              <option value='american-bobtail'>American Bobtail</option>
              <option value='american-curl'>American Curl</option>
              <option value='american-shorthair'>American Shorthair</option>
              <option value='american-wirehair'>American Wirehair</option>
              <option value='balinese'>Balinese</option>
              <option value='bengal'>Bengal</option>
              <option value='birman'>Birman</option>
              <option value='bombay'>Bombay</option>
              <option value='british-shorthair'>British Shorthair</option>
              <option value='burmese'>Burmese</option>
              <option value='burmilla'>Burmilla</option>
              <option value='calico'>Calico</option>
              <option value='chartreux'>Chartreux</option>
              <option value='chausie'>Chausie</option>
              <option value='cornish-rex'>Cornish Rex</option>
              <option value='cymric'>Cymric</option>
              <option value='devon-rex'>Devon Rex</option>
              <option value='domestic-long-haired'>Domestic Long-haired</option>
              <option value='domestic-medium-haired'>
                Domestic Medium-haired
              </option>
              <option value='domestic-short-haired'>
                Domestic Short-haired
              </option>
              <option value='egyptian-mau'>Egyptian Mau</option>
              <option value='exotic-shorthair'>Exotic Shorthair</option>
              <option value='havana-brown'>Havana Brown</option>
              <option value='himalayan'>Himalayan</option>
              <option value='japanese-bobtail'>Japanese Bobtail</option>
              <option value='javanese'>Javanese</option>
              <option value='korat'>Korat</option>
              <option value='laperm'>Laperm</option>
              <option value='maine-coon'>Maine Coon</option>
              <option value='manx'>Manx</option>
              <option value='munchkin'>Munchkin</option>
              <option value='nebelung'>Nebelung</option>
              <option value='norwegian-forest-cat'>Norwegian Forest Cat</option>
              <option value='ocicat'>Ocicat</option>
              <option value='oriental'>Oriental</option>
              <option value='persian'>Persian</option>
              <option value='pixiebob'>Pixiebob</option>
              <option value='ragamuffin'>Ragamuffin</option>
              <option value='ragdoll'>Ragdoll</option>
              <option value='russian-blue'>Russian Blue</option>
              <option value='scottish-fold'>Scottish Fold</option>
              <option value='selkirk-rex'>Selkirk Rex</option>
              <option value='siamese'>Siamese</option>
              <option value='siberian'>Siberian</option>
              <option value='singapura'>Singapura</option>
              <option value='snowshoe'>Snowshoe</option>
              <option value='somali'>Somali</option>
              <option value='sphynx'>Sphynx</option>
              <option value='tabby'>Tabby</option>
              <option value='tonkinese'>Tonkinese</option>
              <option value='tortoiseshell'>Tortoiseshell</option>
              <option value='toyger'>Toyger</option>
              <option value='turkish-angora'>Turkish Angora</option>
              <option value='turkish-van'>Turkish Van</option>
              <option value='tuxedo'>Tuxedo</option>
              <option value='york-chocolate'>York Chocolate</option>
            </select>
          </div>
          <div>
            <label>Age of your cat:</label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder='e.g., 5 months, 2 years'
            />
          </div>
          <div>
            <label>City (required):</label>
            <input value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div>
            <label>Country (required):</label>
            <div css={radioButton('12rem')}>
              <input
                type='radio'
                id='us'
                name='country'
                value='US'
                onChange={() => setCountry('US')}
              />
              <label>US</label>
              <input
                type='radio'
                id='canada'
                name='country'
                value='Canada'
                onChange={() => setCountry('Canada')}
              />
              <label>Canada</label>
            </div>
          </div>
          <div>
            <label>Vaccination:</label>
            <div css={radioButton('10rem')}>
              <input
                type='radio'
                id='yes'
                name='vaccine'
                value='yes'
                onChange={() => setVaccination('Yes')}
              />
              <label>Yes</label>
              <input
                type='radio'
                id='no'
                name='vaccine'
                value='no'
                onChange={() => setVaccination('No')}
              />
              <label>No</label>
            </div>
          </div>
          <div>
            <label>Gender of your cat:</label>
            <div css={radioButton('15rem')}>
              <input
                type='radio'
                id='male'
                name='gender'
                value='male'
                onChange={() => setGender('Male')}
              />
              <label>Male</label>
              <input
                type='radio'
                id='female'
                name='gender'
                value='female'
                onChange={() => setGender('Female')}
              />
              <label>Female</label>
            </div>
          </div>
          <div>
            <label>Spayed / Neutered:</label>
            <div css={radioButton('10rem')}>
              <input
                type='radio'
                id='yes'
                name='spayed_neutered'
                value='yes'
                onChange={() => setSpayNeuter('Yes')}
              />
              <label>Yes</label>
              <input
                type='radio'
                id='no'
                name='spayed_neutered'
                value='no'
                onChange={() => setSpayNeuter('No')}
              />
              <label>No</label>
            </div>
          </div>
          <div css={description}>
            <label>About your cat:</label>
            <textarea
              value={catDescription}
              onChange={(e) => setCatDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label>Images & videos of your cat:</label>
            <div css={uploadFile}>
              <div>
                <input
                  type='file'
                  id='upload-1'
                  accept='image/*,video/*'
                  ref={fileRef1}
                  onChange={() => {
                    if (fileRef1?.current?.files?.length !== 0)
                      setThumbnail1(
                        URL.createObjectURL(fileRef1?.current?.files?.[0])
                      )
                  }}
                  hidden
                />
                <label htmlFor='upload-1'>
                  {!!thumbnail1 ? (
                    <div id='fileWrapper'>
                      <img src={thumbnail1} alt='thumbnail1' />
                      <Icon name='delete_button' />
                    </div>
                  ) : (
                    <Icon name='add_button' />
                  )}
                </label>
              </div>
              <div>
                <input
                  type='file'
                  id='upload-2'
                  accept='image/*,video/*'
                  ref={fileRef2}
                  onChange={() => {
                    if (fileRef2?.current?.files?.length !== 0)
                      setThumbnail2(
                        URL.createObjectURL(fileRef2?.current?.files?.[0])
                      )
                  }}
                  hidden
                />
                <label htmlFor='upload-2'>
                  {!!thumbnail2 ? (
                    <div id='fileWrapper'>
                      <img src={thumbnail2} alt='thumbnail2' />
                      <Icon name='delete_button' />
                    </div>
                  ) : (
                    <Icon name='add_button' />
                  )}
                </label>
              </div>
              <div>
                <input
                  type='file'
                  id='upload-3'
                  accept='image/*,video/*'
                  ref={fileRef3}
                  onChange={() => {
                    if (fileRef3?.current?.files?.length !== 0)
                      setThumbnail3(
                        URL.createObjectURL(fileRef3?.current?.files?.[0])
                      )
                  }}
                  hidden
                />
                <label htmlFor='upload-3'>
                  {!!thumbnail3 ? (
                    <div id='fileWrapper'>
                      <img src={thumbnail3} alt='thumbnail3' />
                      <Icon name='delete_button' />
                    </div>
                  ) : (
                    <Icon name='add_button' />
                  )}
                </label>
              </div>
              <div>
                <input
                  type='file'
                  id='upload-4'
                  accept='image/*,video/*'
                  ref={fileRef4}
                  onChange={() => {
                    if (fileRef4?.current?.files?.length !== 0)
                      setThumbnail4(
                        URL.createObjectURL(fileRef4?.current?.files?.[0])
                      )
                  }}
                  hidden
                />
                <label htmlFor='upload-4'>
                  {!!thumbnail4 ? (
                    <div id='fileWrapper'>
                      <img src={thumbnail4} alt='thumbnail4' />
                      <Icon name='delete_button' />
                    </div>
                  ) : (
                    <Icon name='add_button' />
                  )}
                </label>
              </div>
              <div>
                <input
                  type='file'
                  id='upload-5'
                  accept='image/*,video/*'
                  ref={fileRef5}
                  onChange={() => {
                    if (fileRef5?.current?.files?.length !== 0)
                      setThumbnail5(
                        URL.createObjectURL(fileRef5?.current?.files?.[0])
                      )
                  }}
                  hidden
                />
                <label htmlFor='upload-5'>
                  {!!thumbnail5 ? (
                    <div id='fileWrapper'>
                      <img src={thumbnail5} alt='thumbnail5' />
                      <Icon name='delete_button' />
                    </div>
                  ) : (
                    <Icon name='add_button' />
                  )}
                </label>
              </div>
              <div>
                <input
                  type='file'
                  id='upload-6'
                  accept='image/*,video/*'
                  ref={fileRef6}
                  onChange={() => {
                    if (fileRef6?.current?.files?.length !== 0)
                      setThumbnail6(
                        URL.createObjectURL(fileRef6?.current?.files?.[0])
                      )
                  }}
                  hidden
                />
                <label htmlFor='upload-6'>
                  {!!thumbnail6 ? (
                    <div id='fileWrapper'>
                      <img src={thumbnail6} alt='thumbnail6' />
                      <Icon name='delete_button' />
                    </div>
                  ) : (
                    <Icon name='add_button' />
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>
        <button type='submit' disabled={!validationPassed}>
          Register your cat for adoption
        </button>
      </form>
      <Overlay show={overlay.show}>
        <div css={confirmMsg}>
          <h4>Your cat has been registered for adoption</h4>
          <button
            onClick={() => {
              setOverlay({ show: false, disableScrolling: false })
              history.replace('/')
              document.body.scrollTop = 0 // For Safari
              document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
            }}
          >
            OK
          </button>
        </div>
      </Overlay>
    </div>
  )
}

const uploadFile = css`
  /* border: 1px solid gray; */
  /*display: flex;
   flex-direction: row !important;
  justify-content: space-evenly;
  align-items: center; */

  display: grid !important;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;

  height: 12.5rem;
  padding: 0 !important;

  div {
    border: 1px solid gray;
    width: 8rem !important;
    height: 6rem !important;
    padding: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: #dfdede;
    }
    svg {
      width: 2rem;
      height: 2rem;
      color: gray;
    }

    label {
      /* width: 100%;
      height: 100% !important; */

      cursor: pointer;

      text-align: center;
      vertical-align: middle;

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;

      /* img {
        max-width: 7rem;
        overflow: hidden;
      } */
      img {
        max-width: 5rem;
      }

      #fileWrapper {
        position: relative !important;
        svg {
          position: absolute !important;
          top: 0;
          left: 6rem;
          width: 1.5rem;
          color: #3b3a3a;
          visibility: hidden;
        }

        &:hover {
          svg {
            visibility: visible;
          }
        }
      }
    }
  }
`

const confirmMsg = css`
  background: white;
  height: 5rem;
  width: 30rem;
  margin: 0 auto;
  position: relative;
  top: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  button {
    width: 3rem;
    height: 3rem;
    padding: 0.3rem;
    font-size: 1rem;
    letter-spacing: 1px;
    background: #7ecae0;
    color: white;
    outline: none;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`

const description = css`
  height: 15rem !important;
  textarea {
    height: 100% !important;
    border: 1px solid gray;
    /* border-radius: 0.5rem; */
    padding: 0.5rem;
    font-size: 1.2rem;
    &:focus {
      outline: none;
    }
  }
`

const radioButton = (width: string) => css`
  flex-direction: row !important;
  justify-content: flex-start;
  align-items: center;
  padding: 0 !important;
  width: ${width} !important;
  height: 5rem;
`

const forAdopt = css`
  .gridBox {
    height: 100%;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
  form {
    button {
      margin: 3rem auto;
      background: #62c1db;
      font-size: 1.5rem;
      padding: 1.5rem;
      color: white;
      cursor: pointer;
      font-family: 'chelsea market';
      border: none;
      &:disabled {
        background: #9c9c9c;
        cursor: default;
      }
    }

    width: 80rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
    select {
      padding: 0.5rem;
      border-radius: 0;
      font-size: 1.2rem;
      &:focus {
        outline: none;
      }
    }
    label {
      padding: 0.5rem 0;
    }

    .gridBox {
      div {
        display: flex;
        flex-direction: column;
        font-size: 1.3rem;
        padding: 1rem 2rem;
        max-width: 25rem;
        max-height: 20rem;

        span {
          padding: 3rem 0;
        }
        input {
          font-size: 1.2rem;
          width: 23rem;
          padding: 0.5rem;
          /* border: none; */
          &:focus {
            outline: none;
          }
          /* border-radius: 0.5rem; */
          border: 1px solid gray;
        }
      }
    }
  }
`
