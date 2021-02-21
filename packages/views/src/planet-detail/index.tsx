import { PNLoader } from '@web-planet/components';
import { PlanetModel } from '@web-planet/models';
import { Planet } from '@web-planet/repositories';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { Poster, Section, Terrain, ColName, ColValue } from './style';
import { Container, Row, Col } from 'react-grid-system';
import HyperModal from 'react-hyper-modal';
import { useDispatch } from 'react-redux';
import { Number } from '@web-planet/helpers';
import Head from 'next/head';

const PlanetDetail = () => {

  const [planet, setPlanet] = useState<PlanetModel>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const { planetId } = router.query;

  const getPlanetDetail = async () => {
    const response: PlanetModel = await Planet.getPlanetDetail({id: planetId});
    setPlanet(response);
  }

  useEffect(() => {
    dispatch({ type: 'SET_QUERY_SEARCH', payload: "" });
    dispatch({ type: 'SET_TOTAL_RESULTS', payload: 0 });
    dispatch({ type: 'SET_PAGES', payload: 1 });
    dispatch({ type: 'SET_PAGES', payload: 1 });
    dispatch({ type: 'SET_PLANETS', payload: [] });
    !!planetId && getPlanetDetail();
  }, [planetId]);

  const SectionMovie = () => {
    return (
      <Section>
        <Container fluid>
          <Row justify="center">
            <Col sm={12} md={12} lg={12}><Poster src={"https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8Mnx8cGxhbmV0fHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080"} alt={"https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8Mnx8cGxhbmV0fHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080"} onClick={() => setShowModal(true)} /></Col>
            <Col sm={12} md={6} lg={6}>
              <h1>{planet?.name}</h1>
              <Terrain>{planet?.terrain}</Terrain>
              <Row className="margin-top-2" justify="center">
                <Col xs={5} sm={4}><ColName>Climate</ColName></Col>
                <Col xs={3} sm={2}><ColValue>{planet?.climate}</ColValue></Col>
              </Row>
              <Row className="margin-top-1" justify="center">
                <Col xs={5} sm={4}><ColName>Diameter</ColName></Col>
                <Col xs={3} sm={2}><ColValue>{Number.numberWithCommas(planet?.diameter || 0)}</ColValue></Col>
              </Row>
              <Row className="margin-top-1" justify="center">
                <Col xs={5} sm={4}><ColName>Gravity</ColName></Col>
                <Col xs={3} sm={2}><ColValue>{planet?.gravity}</ColValue></Col>
              </Row>
              <Row className="margin-top-1" justify="center">
                <Col xs={5} sm={4}><ColName>Orbital Period</ColName></Col>
                <Col xs={3} sm={2}><ColValue>{planet?.orbital_period}</ColValue></Col>
              </Row>
              <Row className="margin-top-1" justify="center">
                <Col xs={5} sm={4}><ColName>Population</ColName></Col>
                <Col xs={3} sm={2}><ColValue>{Number.numberWithCommas(planet?.population || 0)}</ColValue></Col>
              </Row>
              <Row className="margin-top-1" justify="center">
                <Col xs={5} sm={4}><ColName>Rotation Period</ColName></Col>
                <Col xs={3} sm={2}><ColValue>{planet?.rotation_period}</ColValue></Col>
              </Row>
              <Row className="margin-top-1" justify="center">
                <Col xs={5} sm={4}><ColName>Surface Water</ColName></Col>
                <Col xs={3} sm={2}><ColValue>{planet?.surface_water}</ColValue></Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <HyperModal
          isOpen={showModal}
          requestClose={() => setShowModal(false)}
        >
          <Poster src={"https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8Mnx8cGxhbmV0fHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080" || ""} alt="Planet Detail Image" />
        </HyperModal>
      </Section>
    );
  };

  return (
    <Fragment>
      <Head>
        <title>{planet?.name} | Web Planet</title>
      </Head>
      {!!planet ? <SectionMovie /> : <PNLoader />}
    </Fragment>
  )
}

export default PlanetDetail;