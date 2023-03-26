import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const CATEGORIE =[
"business",
"entertainment",
"generalhealth",
"science",
"sportstechnology"
]
const NewsApp =()=>
{
    const [articles,SetArticles] = useState( [] );

    const loadNews = ()=>
    {
         axios({
            method:'GET',
            url:"https://newsapi.org/v2/top-headlines",
            params:{
                country:"in",
                apikey: "b0a6bb2f9d21444b8c450730f3018711",
               category:"business"
            }
        }).then((response)=>{

            SetArticles(response.data.articles);

        }).catch((error)=>{
            console.log(error,"Error")
        })
    }
    useEffect(()=>{
        loadNews()
    },[])
    return(

        <div style={{display:'flex',flexWrap:'wrap',alignItems:'center'}} className="justify-content-center">
            {
             articles.map((articles)=>{
            return(             
        <Card style={{ width: '19rem',margin:'10px' }} className="card">
        <Card.Img variant="top" src={articles.urlToImage} className="photo"/>
        <Card.Body>
        <Card.Title className="cardtile">{articles.title}</Card.Title>
        <Card.Text className="cardtext">{articles.description}</Card.Text>
        </Card.Body>
        </Card>
       

                    )
                    
                    
                })
                
            }
        </div>
    )

} 
export default NewsApp;