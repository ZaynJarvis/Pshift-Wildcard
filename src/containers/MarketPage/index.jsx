import React from 'react';

import SearchBar from './SearchBar';
import TagMenu from './TagMenu';
import './style.css';

import Layout from '../Layout';
import MissionCard from '../../components/MissionCard';
import Projects from '../../mock/project';

import { Row, Col, Container, Carousel } from 'react-bootstrap';

const MarketPage = () => {
  const [page, setPage] = React.useState(0);
  return (
    <Layout title='WildCard'>
      <Container>
        <SearchBar page={page} setPage={setPage} />
        <TagMenu />
        <Row>
          <Col>
            <Carousel>
              {Projects.slice(0, 3).map((v, i) => (
                <Carousel.Item
                  key={i}
                  id={i}
                  title={v.title}
                  description={v.description}
                  imageUrl={v.imageUrl}
                  tasks={v.tasks}>
                  <img
                    className='d-block w-100'
                    src={v.imageUrl}
                    alt={v.title}
                    style={{
                      height: '30vh',
                      width: '100%',
                      opacity: '.6'
                    }}
                  />
                  <Carousel.Caption style={{ color: '#222' }}>
                    <h3>{v.title}</h3>
                    <p>{v.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
              {/* <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='https://source.unsplash.com/800x400/?doctor'
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h3>CancerCare</h3>
                  <p>From S$8.90/mth with 100% payout at any stage.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='https://source.unsplash.com/800x400/?travel'
                  alt='Third slide'
                />

                <Carousel.Caption>
                  <h3>Travel Insurance</h3>
                  <p>60% off for TravellerShield Plans by end 2019.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='https://source.unsplash.com/800x400/?car'
                  alt='Third slide'
                />

                <Carousel.Caption>
                  <h3>Car Insurance</h3>
                  <p>Get 10% off by comparing quotes from 3 insurers.</p>
                </Carousel.Caption>
              </Carousel.Item> */}
            </Carousel>
          </Col>
        </Row>
        <Col>
          <Row>
            {page === 0 ? (
              <>
                {Projects.slice(3)
                  .filter(p => !p.completed)
                  .map((v, i) => (
                    <MissionCard
                      key={i}
                      id={i}
                      title={v.title}
                      description={v.description}
                      imageUrl={v.imageUrl}
                      tasks={v.tasks}
                    />
                  ))}
              </>
            ) : (
              <>
                {Projects.slice(3)
                  .filter(p => p.completed)
                  .map((v, i) => (
                    <MissionCard
                      key={i}
                      id={i}
                      title={v.title}
                      description={v.description}
                      imageUrl={v.imageUrl}
                      tasks={v.tasks}
                    />
                  ))}
              </>
            )}
          </Row>
        </Col>
      </Container>
      <div className='project-page'>
        <div className='project-content' />
      </div>
    </Layout>
  );
};

export default MarketPage;

// const dummy = () => {
//   const [page, setPage] = React.useState(0);
//   return (
//     <Layout title='WildCard'>
//       <div className='project-page'>
//         <div className='project-content' />
//         <SearchBar page={page} setPage={setPage} />
//         <TagMenu />
//         {page === 0 ? (
//           <>
//             {Projects.filter(p => !p.completed).map((v, i) => (
//               <MissionCard
//                 key={i}
//                 id={i}
//                 title={v.title}
//                 description={v.description}
//                 imageUrl={v.imageUrl}
//                 tasks={v.tasks}
//               />
//             ))}
//           </>
//         ) : (
//           <>
//             {Projects.filter(p => p.completed).map((v, i) => (
//               <MissionCard
//                 key={i}
//                 id={i}
//                 title={v.title}
//                 description={v.description}
//                 imageUrl={v.imageUrl}
//                 tasks={v.tasks}
//               />
//             ))}
//           </>
//         )}
//       </div>
//     </Layout>
//   );
// };
