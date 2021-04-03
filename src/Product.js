import React from 'react';
import styled from 'styled-components';
//import StarRatingComponent from 'react-star-rating-component';
import StarIcon from '@material-ui/icons/Star';
import { db } from './firebase';

function Product({ title, price, rating, image, id }) {
    const addToCart = () => {
        const cartItem = db.collection("cartitems").doc(id);
        cartItem.get()
        .then((doc) => {
            console.log(doc);
            if(doc.exists) {
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                db.collection("cartitems").doc(id).set({
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })
    } 
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Price>${price}</Price>
            <Rating>
                {
                    Array(rating)
                    .fill()
                    .map(rating =>
                    <StarIcon />)
                }
            </Rating>
            <Image src={image} />
           
            <AddToCart>
                <AddToCartButton onClick={addToCart}>
                    Add To Cart
                </AddToCartButton>
            </AddToCart>
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color: white;
    z-index: 100;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    flex: 1;
    //align-items: center;
    //justify-content: center;
    padding: 20px;
    margin: 10px;
    `

const Title = styled.span`
`
const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`

const Rating = styled.div`
    color: #FEB400;
    `
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
    `

const AddToCart = styled.div`
    display: grid;
    margin-top: 12px;
    place-items: center;
    `    
const AddToCartButton = styled.button`
    width: 100px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
    `
    