import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import axios from 'axios';
import spinner from '../components/810.gif'
import { Link } from 'react-router-dom';

const Article = props => {
    const [title,setTitle] = useState('')
    const [article, setArticle] = useState('')
    const [authorname, setAuthorName] = useState('')

    useEffect(() => {
        axios.get(`https://basalt-gusty-virgo.glitch.me/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthorName(res.data.authorname)
        ])
        .catch(error => console.log(error));
    }, [props]);

 return (
    <MainContainer>
        {!title || !article || !authorname ? (
            <img src={spinner} alt="loading..." />
        ):(
        <>
        <h2>{title}</h2>
        <p>{article}</p>
        <p className="badge badge-secondary">{authorname}</p>
        <br />
        <Link to="/" type="submit" className="btn btn-primary">Back to Home</Link>
        </>
        )}
    </MainContainer>
    );
};

export default Article

//MAINCONTAINER

const MainContainer =styled.div`
    margin: 6rem auto;
    padding: 3rem 14rem;

    h2{
        text-align: center;
        font-weight: 900;
        color: var(--dark-green);
    }

.btn-primary{
        margin-top: 2rem;
        background: var(--dark-green);
        border: none;
        &:hover {
            background: var(--light-green);
        }
    }
`;
