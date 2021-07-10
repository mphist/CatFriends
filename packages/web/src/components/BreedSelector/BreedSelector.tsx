export type BreedSelectorProps = {
  breed?: string
  setBreed?: React.Dispatch<React.SetStateAction<string | undefined>>
}

function BreedSelector({ breed, setBreed }: BreedSelectorProps) {
  return (
    <select
      name='breed'
      id='breed'
      value={breed}
      onChange={(e) => setBreed!(e.target.value)}
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
      <option value='domestic-medium-haired'>Domestic Medium-haired</option>
      <option value='domestic-short-haired'>Domestic Short-haired</option>
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
  )
}

export default BreedSelector
