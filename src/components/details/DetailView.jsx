import React, { useState, useEffect, useContext } from 'react';
import { Box, Grid, styled } from '@mui/material';
import ActionItem from './ActionItem';
import  {productData}  from '../../data/allProductData';

// import axios from 'axios';

import ProductDetail from './ProductDetail';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Component = styled(Box)`
    margin-top: 55px;
    // background: #F2F2F2;
    
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const RightContainer = styled(Grid)`
    margin-top: 50px;
    padding-left: 40px;
    & > p {
        margin-top: 10px;
    }
`;

const DetailView = () => {
    
    const fetchId = useParams();
    

    
    // ============================================================================ using axios ===================================================================
    // useEffect(() => {
    //     const fetchData = async () => {

    //         const result = await axios.get(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${fetchId}`);
    //         setItemData(result.data);
    //     }
    //     fetchData();
    // }, []);

    // ============================================================================ using fetch promise ==================================================================
    // useEffect(() => {
    //     fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${fetchId.id}`)
    //         .then(response => response.json())
    //         .then(json => setItemData(json))
    // }, []);

    const [itemData, setItemData] = useState([]);
    // // ============================================================================ using async await ===================================================================
    // const fetchApiData = async (url) => {
    //     try {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         setItemData(data);
    //     } catch (e) {
    //         console.log(e.message)
    //     }
    // };
    
    // function getData(prid) {   
    //     // {
    //     //     for (let i = 0; i < productData.length; i++) {
    //     //         if(productData.id === prid)
    //     //             productElement = 
    //     //     }
    //     //     console.log(productElement);
    //     // }
    //     console.log(prid)
    //     // const productElement = productData.filter((item) => item.id === prid);
    //     // console.log(productElement);
    //     // const productElement = productData.filter((elem, index) => index === prid)[0];
    //     // console.log(productElement);
    //     // setItemData(productElement);
    //     // console.log(itemData);
       
    // }

    // useEffect(() => {
    //     fetchApiData(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${fetchId.id}`);
    // }, []);

    // useEffect(() => {
    //     // fetchApiData(`http://localhost:3001/products/${fetchId.id}`);
    //     getData(fetchId);
    // }, []);



    // const product = productData.find((data) => data.id === match.params.id);
    // console.log(itemData);
        
    // useEffect(() => {
    //     // console.log(fetchId.id);
    //     // getData(fetchId.id);
    //     const productElement = productData.filter((elem, index) => index === prid)[0];
    //     console.log(productElement);

    // }, []);

    const items = useSelector((state) => state.allCart.item);
    useEffect(() => {
        setItemData(items[fetchId.id-1]);
        // console.log(itemData)
    }, []);

    
    

    return (
        <Component>
            <Grid container>

                <Container item lg={4} md={4} sm={8} xs={12}>
                    <ActionItem itemData={itemData} />
                </Container>

                <RightContainer item lg={8} md={8} sm={8} xs={12}>
                    <ProductDetail itemData={itemData} />
                </RightContainer>

            </Grid>
        </Component>
    )
}

export default DetailView;