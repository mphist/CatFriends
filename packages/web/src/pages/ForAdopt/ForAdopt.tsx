import { css } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { overlayState } from '../../atoms/overlay'
import Overlay from '../../components/Overlay/Overlay'
import client from '../../lib/api/client'
import BreedSelector from '../../components/BreedSelector'
import UploadFileContainer from '../../components/UploadFileContainer'
import getFileUrls from './getFileUrls'
import uploadToImgur from '../../lib/api/uploadToImgur'
import { spinner } from '../../assets/images'

type ForAdoptProps = {}

export default function ForAdopt({}: ForAdoptProps) {
  const history = useHistory()
  const [name, setName] = useState('')
  const [breed, setBreed] = useState<string | undefined>(undefined)
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
  const [loading, setLoading] = useState(false)

  const fileRef1 = useRef<HTMLInputElement>(null)
  const fileRef2 = useRef<HTMLInputElement>(null)
  const fileRef3 = useRef<HTMLInputElement>(null)
  const fileRef4 = useRef<HTMLInputElement>(null)
  const fileRef5 = useRef<HTMLInputElement>(null)
  const fileRef6 = useRef<HTMLInputElement>(null)

  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // on first render only
    nameRef?.current?.focus()
  }, [])

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
    setLoading(true)
    setOverlay({ show: true, disableScrolling: true })

    // upload image/video to imgur
    try {
      const file1 =
        fileRef1?.current?.files?.length !== 0
          ? await fileRef1?.current?.files?.[0].arrayBuffer()
          : undefined
      const file2 =
        fileRef2?.current?.files?.length !== 0
          ? await fileRef2?.current?.files?.[0].arrayBuffer()
          : undefined
      const file3 =
        fileRef3?.current?.files?.length !== 0
          ? await fileRef3?.current?.files?.[0].arrayBuffer()
          : undefined
      const file4 =
        fileRef4?.current?.files?.length !== 0
          ? await fileRef4?.current?.files?.[0].arrayBuffer()
          : undefined
      const file5 =
        fileRef5?.current?.files?.length !== 0
          ? await fileRef5?.current?.files?.[0].arrayBuffer()
          : undefined
      const file6 =
        fileRef6?.current?.files?.length !== 0
          ? await fileRef6?.current?.files?.[0].arrayBuffer()
          : undefined

      const files = [file1, file2, file3, file4, file5, file6]

      // upload media files to imgur
      const results = await uploadToImgur(files)
      const fileUrls = getFileUrls(results)

      // save cat data and urls in db
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
          media: fileUrls,
        })

        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div css={forAdopt}>
      <form onSubmit={onSubmit} encType='multipart/form-data'>
        <div className='gridBox'>
          <div>
            <label>Name of your cat:</label>
            <input
              ref={nameRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Breed of your cat:</label>
            <BreedSelector breed={breed} setBreed={setBreed} />
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
              <UploadFileContainer
                id='upload-1'
                ref={fileRef1}
                thumbnail={thumbnail1}
                setThumbnail={setThumbnail1}
              />
              <UploadFileContainer
                id='upload-2'
                ref={fileRef2}
                thumbnail={thumbnail2}
                setThumbnail={setThumbnail2}
              />
              <UploadFileContainer
                id='upload-3'
                ref={fileRef3}
                thumbnail={thumbnail3}
                setThumbnail={setThumbnail3}
              />
              <UploadFileContainer
                id='upload-4'
                ref={fileRef4}
                thumbnail={thumbnail4}
                setThumbnail={setThumbnail4}
              />
              <UploadFileContainer
                id='upload-5'
                ref={fileRef5}
                thumbnail={thumbnail5}
                setThumbnail={setThumbnail5}
              />
              <UploadFileContainer
                id='upload-6'
                ref={fileRef6}
                thumbnail={thumbnail6}
                setThumbnail={setThumbnail6}
              />
            </div>
          </div>
        </div>
        <button type='submit' disabled={!validationPassed}>
          Register your cat for adoption
        </button>
      </form>
      <Overlay show={overlay.show}>
        {loading ? (
          <div css={loadingMsg}>
            <img src={spinner} alt='spinner' />
          </div>
        ) : (
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
        )}
      </Overlay>
    </div>
  )
}

const uploadFile = css`
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
      width: 100%;
      height: 100%;
      cursor: pointer;

      text-align: center;
      vertical-align: middle;

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;

      img {
        max-width: 5rem;
        max-height: 5rem;
      }

      #fileWrapper {
        position: relative !important;
        border: none;
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

        video {
          width: 7rem;
        }
      }
    }
  }
`

const loadingMsg = css`
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  img {
    width: 3.5rem;
    height: 3.5rem;
    animation: spin 1.25s infinite ease-in-out;
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
