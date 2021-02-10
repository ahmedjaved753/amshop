import React, { Component } from "react";
import Slider from "react-slick";
import Card from './Card'

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 3
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <Card src="https://picsum.photos/200/300" href="" value={2} price={25.99} />
                    </div>
                    <div>
                        <Card src="https://picsum.photos/200/300" href="" value={2} price={25.99} />
                    </div>
                    <div>
                        <Card src="https://picsum.photos/200/300" href="" value={2} price={25.99} />
                    </div>
                    <div>
                        <Card src="https://picsum.photos/200/300" href="" value={2} price={25.99} />
                    </div>
                    <div>
                        <Card src="https://picsum.photos/200/300" href="" value={2} price={25.99} />
                    </div>
                    <div>
                        <Card src="https://picsum.photos/200/300" href="" value={2} price={25.99} />
                    </div>
                    <div>
                        <Card src="https://picsum.photos/200/300" href="" value={2} price={25.99} />
                    </div>
                    <div>
                        <Card src="https://picsum.photos/200/300" href="" value={2} price={25.99} />
                    </div>
                    <div>
                        <Card src="https://picsum.photos/200/300" href="" value={2} price={25.99} />
                    </div>
                </Slider>
            </div>
        );
    }
}
