import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import NewsCard from '../../components/card/NewsCard';
import axios from 'axios';

const Home = ({ type, pageItem }) => {
    const [newsData, setNewsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [itemRequired, setItemRequired] = useState(pageItem);
    const [totalItems, setTotalItems] = useState()
    const capitalText = (str) => {
        return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str
    }

    const baseurl = "https://dailynewsapp-dhd6.onrender.com";
    const apiKey = '429ed7519b8241ef9568c26cf3013d04'
    useEffect(() => {
        const abortController = new AbortController();
        // api call
        setIsLoading(true);
        axios.get(`${baseurl}/api?country=in&category=${type}&apiKey=${apiKey}&pageSize=${itemRequired}`, {
            signal: abortController.signal
        }).then(function (response) {
            setNewsData(response.data.articles);
            setTotalItems(response.data.totalResults)
            setIsLoading(false);
        })
        return () => {
            abortController.abort()
        }
    }, [type, itemRequired])


    const loadMore = () => {
        itemRequired < 90 && setItemRequired(itemRequired + 9)
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
                        <Row xs={1} md={3} className="g-4">
                            {newsData.map((article, i) => (
                                <Col key={i}>
                                    <NewsCard article={article} />
                                </Col>
                            ))}
                        </Row>

                        {
                            newsData.length < totalItems && <div className='mt-5 d-flex justify-content-center' >
                                <Button variant="dark" className=" rounded-0" onClick={() => loadMore()}>Show More</Button>
                            </div>
                        }
                    </>
            }
        </Container>
    )
}

export default Home