import { css } from '@emotion/react'

type ForAdoptProps = {}

export default function ForAdopt({}: ForAdoptProps) {
  return (
    <div css={forAdopt}>
      <form>
        <div className="gridBox">
          <div>
            <label>Name of your cat:</label>
            <input />
          </div>
          <div>
            <label>Breed of your cat:</label>
            <input /* placeholder="What is the breed of your cat?" */ />
          </div>
          <div>
            <label>Age of your cat:</label>
            <input /* placeholder="What is the age of your cat?" */ />
          </div>
          <div>
            <label>Postal code:</label>
            <input /* placeholder="What is the postal code of your cat's location?" */
            />
          </div>
          <div>
            <label>Vaccination:</label>
            <div css={radioButton('10rem')}>
              <input type="radio" id="yes" name="vaccine" value="yes" />
              <label>Yes</label>
              <input type="radio" id="no" name="vaccine" value="no" />
              <label>No</label>
            </div>
          </div>
          <div>
            <label>Gender of your cat:</label>
            <div css={radioButton('15rem')}>
              <input type="radio" id="male" name="gender" value="male" />
              <label>Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label>Female</label>
            </div>
          </div>
          <div>
            <label>Spayed / Neutered:</label>
            <div css={radioButton('10rem')}>
              <input type="radio" id="yes" name="spayed_neutered" value="yes" />
              <label>Yes</label>
              <input type="radio" id="no" name="spayed_neutered" value="no" />
              <label>No</label>
            </div>
          </div>
          <div css={description}>
            <label>About your cat:</label>
            <textarea /* placeholder="Describe your cat..." */></textarea>
          </div>
        </div>
        <button type="submit">Register your cat for adoption</button>
      </form>
    </div>
  )
}

const description = css`
  height: 13rem !important;
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
    }

    width: 80rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
    label {
      padding: 0.5rem 0;
    }

    div {
      display: flex;
      flex-direction: column;
      font-size: 1.3rem;
      padding: 1rem 2rem;

      span {
        padding: 3rem 0;
      }
      input {
        font-size: 1.2rem;
        width: 25rem;
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
`
