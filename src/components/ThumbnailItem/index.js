// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageInfo, onClickImage, activeImage} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = imageInfo

  const updateImage = () => {
    onClickImage(imageUrl, imageAltText)
  }
  const activeImageStyle = activeImage ? 'activeImage' : ''
  return (
    <li className={`thumbnailContainer ${activeImageStyle}`}>
      <button type="button" onClick={updateImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
