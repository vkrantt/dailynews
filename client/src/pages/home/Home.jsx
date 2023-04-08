import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import NewsCard from '../../components/card/NewsCard'

const Home = ({ type }) => {
    const [newsData, setNewsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const capitalText = (str) => {
        return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str
    }


    const baseurl = 'http://localhost:3030';
    const apiKey = '429ed7519b8241ef9568c26cf3013d04'
    useEffect(() => {
        callApi(type);
    }, [type])

    async function callApi(type) {
        setIsLoading(true);
        const response = await fetch(`${baseurl}/api?country=in&category=${type}&apiKey=${apiKey}&pageSize=100`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await response.json();
        setNewsData(data.articles);
        setIsLoading(false);
    }

    return (
        <Container className="p-4">
            <h1 className='fw-bold theme-shadow-sm border-dark bg-light p-2 mb-4'>{capitalText(type)}</h1>
            {
                isLoading
                    ? <div className='text-center mt-5'>
                        <Spinner />
                    </div>
                    : <>
                        <Row xs={1} md={2} className="g-4">
                            {newsData.map((article, i) => (
                                <Col key={i}>
                                    <NewsCard article={article} />
                                </Col>
                            ))}
                        </Row>

                        <div className='mt-5 d-flex justify-content-center'>
                            <Button variant="dark" className=" rounded-0">Show More</Button>
                        </div>
                    </>
            }


        </Container>
    )
}

export default Home