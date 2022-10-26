import './index.css'

const SimilarProductItem = props => {
  const {ProductsData} = props
  const {imageUrl, title, price, brand, rating} = ProductsData
  return (
    <li className="product-item">
      <img
        src={imageUrl}
        alt={`similar product ${title}`}
        className="thumbnail"
      />
      <p className="title">{title}</p>
      <p className="brand">by {brand}</p>
      <div className="product-details">
        <p className="price">Rs {price}/-</p>
        <div className="rating-container">
          <p className="rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="start"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
