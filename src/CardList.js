import React from 'react';
import Card from'./Card';

const CardList = (props) => {
    const {robots} = props;
    const CardRender = robots.map((user,i)=>{
        return <Card key = {i} id = {user.username} name = {user.name} email = {user.email} />
    })
    return(
        <div>
            {CardRender}
        </div>
    )    
}

export default CardList