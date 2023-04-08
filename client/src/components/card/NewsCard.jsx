import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotFound from '../notfound/NotFound';

const NewsCard = ({ article }) => {
    return (
        <Card className='theme-shadow border-3 border-dark rounded-0'>
            <Card.Img style={{ maxHeight: '300px', objectFit: 'cover' }} variant="top" src={article?.urlToImage || "https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} />
            <Card.Body>
                <Card.Title>{article?.title || 'Title not available'}</Card.Title>
                <Card.Text>
                    {article?.description || 'Description not available'}
                </Card.Text>
                <blockquote className="blockquote mb-0">
                    <footer className="blockquote-footer">
                        Sourced By : <cite title={article?.source?.name}>{article?.source?.name}</cite>
                    </footer>
                </blockquote>
                <Card.Link target="_blank" href={article?.url}>Read article</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default NewsCard