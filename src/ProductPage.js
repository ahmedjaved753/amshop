import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BreadCrumbs from './BreadCrumbs';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PinterestIcon from '@material-ui/icons/Pinterest';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Slider from './Slider';
import './product-page.css'

function ProductPage() {
    const [images, setImages] = useState([])
    const [otherProductImages, setOtherProductImages] = useState([])
    const [isActive, setIsActive] = useState(0)
    const [loading, setLoading] = useState(true)
    const [value, setValue] = useState(2);
    const [oIAreBeingHovered, setOIAreBeingHovered] = useState(false);
    const [hoveredUrl, setHoveredUrl] = useState("")
    useEffect(() => {
        axios.get("https://picsum.photos/v2/list?limit=3")
            .then((response) => {
                setImages(response.data)
                console.log(response.data);
                setLoading(false)
            })
        for (let i = 0; i < 10; i++) {
            axios.get("https://picsum.photos/v2/list?limit=3")
                .then((response) => {
                    setOtherProductImages(poi => [...poi, response.data])
                })
        }
    }, [])

    function onHover(e) {
        setHoveredUrl(e.target.name)
        setOIAreBeingHovered(true)
    }

    function onClick(e) {
        console.log(otherProductImages[parseInt(e.target.alt)])
        setIsActive(0);
    }


    return (
        <div className="product-page-container">
            <div className="breadcrumbs-container">
                <BreadCrumbs />
            </div>
            <div className="small-images-container">
                {images.map((img, i) => <img src={img.download_url} onMouseOver={(e) => setIsActive(parseInt(e.target.name))} name={i} className="small-img" alt={img} />)}
            </div>
            {loading ? null : <img src={oIAreBeingHovered ? hoveredUrl : images[isActive].download_url} alt="" className="main-img" />}
            <div className="details-container">
                {/* eslint-disable-next-line */}
                <a href="#" className="links">Visit the Hanes Store</a>
                <h1>Hanes Women's V-Notch Pullover Fleece Sweatshirt</h1>
                <div className="rattings">
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating name="read-only" value={value} readOnly />
                        {/* eslint-disable-next-line */}
                        <a href="#" className="links">22,797 rattings</a>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="links">94 answered question</a>
                    </Box>

                </div>
                <div className="best-seller-container">
                    <span className="best-seller">#1 Best Seller</span>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="links">in Women's Sweatshirts</a>
                </div>
                <div>
                    <b>Price:</b> <span className="price">$7.99 - $21.36</span>
                </div>
                <div>
                    <b>Fit :</b>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="links">True to size. Order usual size</a>
                </div>
                <div>
                    <b>Size :</b>
                </div>
                <div>
                    <select className="sizes">
                        <option>Select</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xlarge">X-Large</option>
                        <option value="xxlarge">XX-Large</option>
                    </select>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="links">Size chart</a>
                </div>
                <div>
                    <b>Color :</b> Navy Heather
                </div>
                <div className="others-images-container">
                    {otherProductImages.map((images, i) => <img index={i} src={images[0].download_url} name={images[0].download_url} className="small-img" alt={i} onMouseOver={onHover} onMouseOut={() => setOIAreBeingHovered(false)} onClick={onClick} />)}
                </div>
                <div className="details-list">
                    <ul>
                        <li>50% Cotton, 50% Polyester</li>
                        <li>Imported</li>
                        <li>No Closure closure</li>
                        <li>Machine Wash</li>
                        <li>Midweight, 50% Cotton/50% Polyester fleece, with up to 5% made from recycled plastic bottles</li>
                        <li>Soft, 7.5-Oz cotton blend provides comfort in any climate</li>
                        <li>Sweatshirt sits just below your natural waistline. Ribbed hem and cuffs keep their shape</li>
                    </ul>
                </div>

            </div>
            <div className="add-to-cart">
                <div>
                    {/* eslint-disable-next-line */}
                    <a href="#">Share</a>
                    <FacebookIcon />
                    <TwitterIcon />
                    <MailOutlineIcon />
                    <PinterestIcon />
                </div>
                <div className="button-container">
                    <button className="btnbc">
                        <ShoppingCartIcon />
                        <span>Add to cart</span>
                    </button>
                    <button>
                        Add to list
                    </button>
                </div>
                <div>
                    {/* eslint-disable-next-line */}
                    <a href="#">Share</a>
                    <FacebookIcon />
                    <TwitterIcon />
                    <MailOutlineIcon />
                    <PinterestIcon />
                </div>
            </div>
            <div className="slider-one-container">
                <Slider />
            </div>
            <div className="slider-two-container">
                <Slider />
            </div>
        </div>
    )
}

export default ProductPage
