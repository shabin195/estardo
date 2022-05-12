import React from "react";
import Header from '../layout/header';
import Footer from '../layout/footer';
import { Link } from 'react-router-dom';
function ProductList() {
    const productList = [
        {
            id: '1',
            name: 'Akka Moong Dal',
            image: 'https://d37ky63zmmmzfj.cloudfront.net/production/itemimages/grocery/dals_pulses/moong_dal/thumb/akkamoongquality1_1kg.jpg',
            amount: 10.00,
        },
        {
            id: '2',
            name: 'Badam',
            image: 'https://d37ky63zmmmzfj.cloudfront.net/production/itemimages/grocery/dry_fruits/badam/thumb/badamquality1_1kg.jpg',
            amount: 20.00,
        },
        {
            id: '3',
            name: 'Bedki Chilli',
            image: 'https://d37ky63zmmmzfj.cloudfront.net/production/itemimages/grocery/masalas_spices/whole_spices/thumb/bedkichilli_1kg.jpg',
            amount: 30.00,
        },
        {
            id: '4',
            name: 'Big Rajma',
            image: 'https://d37ky63zmmmzfj.cloudfront.net/production/itemimages/grocery/dals_pulses/other_dals/thumb/bigrajmaquality1_1kg.jpg',
            amount: 40.00,
        },
        {
            id: '5',
            name: 'Dates',
            image: 'https://d37ky63zmmmzfj.cloudfront.net/production/itemimages/grocery/dry_fruits/dates/thumb/dates_1kg.jpg',
            amount: 50.00,
        },
        {
            id: '6',
            name: 'Green Moong Dal',
            image: 'https://d37ky63zmmmzfj.cloudfront.net/production/itemimages/grocery/dals_pulses/moong_dal/thumb/greenmoongdalquality2_1kg.jpg',
            amount: 60.00,
        },
        {
            id: '7',
            name: 'Groundnut Oil',
            image: 'https://d37ky63zmmmzfj.cloudfront.net/production/itemimages/grocery/oil_ghee/groundnut_oil/thumb/looseitem_groundnutoil_1kg.jpg',
            amount: 70.00,
        }, {
            id: '8',
            name: 'Haldi',
            image: 'https://d37ky63zmmmzfj.cloudfront.net/production/itemimages/grocery/masalas_spices/whole_spices/thumb/haldi_1kg.jpg',
            amount: 80.00,
        },
        {
            id: '9',
            name: 'Kaju',
            image: 'https://d37ky63zmmmzfj.cloudfront.net/production/itemimages/grocery/dry_fruits/thumb/kaju_1kg.jpg',
            amount: 90.00,
        },
        {
            id: '10',
            name: 'Pista Without Shell',
            image: 'https://d37ky63zmmmzfj.cloudfront.net/production/itemimages/grocery/dry_fruits/thumb/pistawithoutshell_1kg.jpg',
            amount: 100.00,
        }
    ];
    return (
        <>
            <Header />
            <div className="productListWrapper">

                <div className="container">
                    <div className="row">
                        {productList.map((productObj, i) => (
                            <div className="col-md-4" key={i}>
                                <Link
                                    to={{
                                        pathname:
                                            '/productListDetails',
                                        state: {
                                            data: productObj
                                        },
                                    }}
                                >
                                    <div className="proListSec">
                                        <img src={productObj.image} />
                                        <p><b>Image Name : </b>{productObj.name}</p>
                                        <p><b>Price : &#8377; {productObj.amount}</b></p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ProductList;