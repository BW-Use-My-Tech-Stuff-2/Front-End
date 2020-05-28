import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import MyItems from  './MyItems';

   

const Item = props => {


    
    return (

        <Card class="card">
           
            <div className="card-body">
                <h5 className="card-title">Item Name </h5>
                <p className="card-text"> </p>
                <img src="#" class="card-img-top" alt="uploaded"/>
                <Link to={MyItems} >
                    <button className="btn btn-info btn-sm">More Details</button>
                </Link>
            </div>
        </Card>
    )
}

export default Item;    

const Card = styled.div`
    width: 250px;
    max-height: auto;


    img {
        width: 180px;
    }
`