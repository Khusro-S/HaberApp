import {useEffect, useState} from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import useNewsData from '../Hooks/useNewsData';

 const NewsList =  (props) => {
    const {category, searchTerm} = props;
    const {newsData, loading, error} = useNewsData(category, searchTerm) ;

    if (loading) {
        return <div>Loading...</div>
    }
    if (error){
        return <div>Error: {error.message}</div>
    }
    
    return(
        <Container className='news'>
            <Row>
                {newsData?.map((article) =>(
                    
                    <Col xs={12} md={6} lg={4} key={article.url}>
                        <a href={article.url} target='_blank'>
                            <Card>
                            <Card.Img src={article.urlToImage} variant='top' alt={article.title}/>
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer><small><b>Published at:</b> {article.publishedAt.replace('T', ' ').replace('Z', '')}</small></Card.Footer>
                        </Card>
                        </a>
                        
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default NewsList;