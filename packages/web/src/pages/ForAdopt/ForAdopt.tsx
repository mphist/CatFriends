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
            <select name="breed" id="breed">
              <option value="" selected disabled hidden>
                Choose...
              </option>
              <option value="abyssinian">Abyssinian</option>
              <option value="american-bobtail">American Bobtail</option>
              <option value="american-curl">American Curl</option>
              <option value="american-shorthair">American Shorthair</option>
              <option value="american-wirehair">American Wirehair</option>
              <option value="balinese">Balinese</option>
              <option value="bengal">Bengal</option>
              <option value="birman">Birman</option>
              <option value="bombay">Bombay</option>
              <option value="british-shorthair">British Shorthair</option>
              <option value="burmese">Burmese</option>
              <option value="burmilla">Burmilla</option>
              <option value="calico">Calico</option>
              <option value="chartreux">Chartreux</option>
              <option value="chausie">Chausie</option>
              <option value="cornish-rex">Cornish Rex</option>
              <option value="cymric">Cymric</option>
              <option value="devon-rex">Devon Rex</option>
              <option value="domestic-long-haired">Domestic Long-haired</option>
              <option value="domestic-medium-haired">
                Domestic Medium-haired
              </option>
              <option value="domestic-short-haired">
                Domestic Short-haired
              </option>
              <option value="egyptian-mau">Egyptian Mau</option>
              <option value="exotic-shorthair">Exotic Shorthair</option>
              <option value="havana-brown">Havana Brown</option>
              <option value="himalayan">Himalayan</option>
              <option value="japanese-bobtail">Japanese Bobtail</option>
              <option value="javanese">Javanese</option>
              <option value="korat">Korat</option>
              <option value="laperm">Laperm</option>
              <option value="maine-coon">Maine Coon</option>
              <option value="manx">Manx</option>
              <option value="munchkin">Munchkin</option>
              <option value="nebelung">Nebelung</option>
              <option value="norwegian-forest-cat">Norwegian Forest Cat</option>
              <option value="ocicat">Ocicat</option>
              <option value="oriental">Oriental</option>
              <option value="persian">Persian</option>
              <option value="pixiebob">Pixiebob</option>
              <option value="ragamuffin">Ragamuffin</option>
              <option value="ragdoll">Ragdoll</option>
              <option value="russian-blue">Russian Blue</option>
              <option value="scottish-fold">Scottish Fold</option>
              <option value="selkirk-rex">Selkirk Rex</option>
              <option value="siamese">Siamese</option>
              <option value="siberian">Siberian</option>
              <option value="singapura">Singapura</option>
              <option value="snowshoe">Snowshoe</option>
              <option value="somali">Somali</option>
              <option value="sphynx">Sphynx</option>
              <option value="tabby">Tabby</option>
              <option value="tonkinese">Tonkinese</option>
              <option value="tortoiseshell">Tortoiseshell</option>
              <option value="toyger">Toyger</option>
              <option value="turkish-angora">Turkish Angora</option>
              <option value="turkish-van">Turkish Van</option>
              <option value="tuxedo">Tuxedo</option>
              <option value="york-chocolate">York Chocolate</option>
            </select>
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