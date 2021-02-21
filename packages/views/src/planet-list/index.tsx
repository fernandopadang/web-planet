import { Container, Row, Col } from 'react-grid-system';
import { PNCard, PNLoader } from '@web-planet/component';
import { Planet } from '@web-planet/repositories';
import { PlanetListModel, PlanetModel } from '@web-planet/model';
import { useEffect, useState } from 'react';
import { Section } from './style';
import HyperModal from 'react-hyper-modal';
import { useDispatch, useStore } from 'react-redux';

const PlanetList = () => {

  const [planetList, setPlanetList] = useState<PlanetModel[]>([]);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [modalImage, setModalImage] = useState<string | undefined>();
  const [querySearch, setQuerySearch] = useState<string>();
  const dispatch = useDispatch();
  const store = useStore();

  const getPlanet = async () => {
    setLoading(true);
    try {
      const response: PlanetListModel = await Planet.getPlanet({s: querySearch, page: pages});
        if (response.count === planetList.length) {
          setLoading(false);
          return setNoData(true);
        }
        const newPage = pages + 1;
        const newList = planetList.concat(response.results);
        setPlanetList(newList);
        setPages(newPage);
        setLoading(false);
        dispatch({ type: 'SET_PLANETS', payload: newList });
        dispatch({ type: 'SET_PAGES', payload: newPage });
        dispatch({ type: 'SET_TOTAL_RESULTS', payload: Number(response.count) });
    } catch (error) {
      console.log("error get planet list", error)
    }
  };

  const onScroll = () => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
          if(!noData && !loading && store.getState().totalResults !== planetList.length) {
            getPlanet();
          }
        }
      }
    }
  }

  useEffect(() => {
    if (!!store.getState().planetList && store.getState().pages > 1) {
      setPlanetList(store.getState().planetList);
      setPages(store.getState().pages);
      store.getState().querySearch !== "" && setQuerySearch(store.getState().querySearch);
    } else {
      getPlanet();
    }
  }, [store.getState().planetList]);

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", onScroll);
      window.addEventListener("touchmove", onScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchmove", onScroll);
    };
  });

  return (
    <Section>
      <Container fluid={true}>
        <Row>
          {planetList.map((planet, key) => {
            let id: string[] | string = planet.url.split("/");
            id = id[id.length - 2];
            return (
              <Col xs={12} sm={6} md={4} lg={4} xl={3} style={{paddingTop: '8px', paddingBottom: '8px'}} key={key}>
                <PNCard
                  id={id}
                  image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8Mnx8cGxhbmV0fHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080"
                  name={planet.name}
                  rotationPeriod={planet.rotation_period}
                  orbitalPeriod={planet.orbital_period}
                  diameter={planet.diameter}
                  onImageClick={() => setModalImage("https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8Mnx8cGxhbmV0fHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080")} />
              </Col>
            )
          })}
        </Row>
        {loading && <PNLoader />}
      </Container>
      <HyperModal
        isOpen={!!modalImage}
        isFullscreen={true}
        requestClose={() => setModalImage(undefined)}
      >
        <img src={modalImage || ""} alt={modalImage} width="100%" height="100%" />
      </HyperModal>
    </Section>
  )
}

export default PlanetList;