import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Product } from "../../types";
import ContentCard from "./ContentCard";
import { products } from "./products";
import styled from 'styled-components';
import { getEmailFromToken } from "../../functions";
import { Title } from "../General/Title";
import { Subtitle } from "../General/Subtitle";
import MetaContext from "../../MetaContext";

type ProductsPageProps = {}

const ProductsPage = (props: ProductsPageProps) => {

    const { darkMode, SERVER_URL, token } = useContext(MetaContext);
    const [purchasedProducts, updatePurchasedProducts] = useState([] as string[]);
    const [email, updateEmail]  = useState("User");
    
    useEffect(() => {
        // retrieve porducts that the user has purchased from the database
        axios.post(SERVER_URL + "/users/purchased", { token })
             .then(res => updatePurchasedProducts(res.data))
             .catch(console.log);

        // retrieve email to determine default display name
        getEmailFromToken(token)
            .then(token => updateEmail(token!))
    }, [])


    const renderProducts = (product: Product) => {
        return (
            <ContentCard 
                name = { product.name } 
                available = { purchasedProducts.includes(product.name) || product.name === "Anatomy" /* Temp Addition for anatomy section */ }
                description = { product.description }
                path = { product.path }
                imgsrc = { product.imgsrc }
            />
        )
    }

    return (
        <>

            <Title darkMode = { darkMode }>
                MedBakery
            </Title>

            <Subtitle darkMode = { darkMode }>
                Welcome back { email.substring(0, email.indexOf('@')) }!
            </Subtitle>

            <div style = {{ padding: "0px 5%", height: "max-content", display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>

                { products.map(renderProducts) }

            </div>

        </>
    )
}

export default ProductsPage;