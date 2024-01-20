import React , {useState , useEffect} from 'react'
import './featured.css'
import axios from 'axios'
const Bestseller = () => {

    
    const [best_seller, setBest_seller] = useState([])

    useEffect(() => {
        axios.get('https://easy-red-moth-ring.cyclic.app/bestseller')
            .then((res) => setBest_seller(res.data))
            .catch((err) => console.log('error'))
    }, [])

  return (
    <>
            <div className="featured-products">
                <div className="featured-h text-center fs-3 my-3">Best Sellers</div>
                <div className="featured-list">
                    {best_seller.map((item) => {
                        return (

                            <div className="card">
                                <img src={item.img} alt="" />
                                <div className="title">{item.name}</div>
                                <div className="price">
                                    <span className='offer-price'>{item.offer_price}</span><span className='original-price'>{item.original_price}</span><span className='discount'>{item.discount}</span>
                                </div>
                                <div className="cart-btn mx-auto my-4">Add to Card</div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </>
  )
}

export default Bestseller