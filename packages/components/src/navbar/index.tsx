import MVButton from '../button';
import { Navbar, Logo, SectionRight, Separator } from './style';
import MVAutoComplete from '../autocomplete';
import { PlanetListModel, PlanetSearchModel } from '@web-planet/model';
import { Planet } from '@web-planet/repositories';
import debounce from 'lodash/debounce';
import { useCallback, useState } from 'react';
import { Hidden } from 'react-grid-system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useStore } from 'react-redux';

const DefaultNavbar = () => {

  const [dataSet, setDataSet] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const store = useStore();
  const router = useRouter();

  const getPlanet = debounce(async (value?: string, isSearchPlanet?: boolean) => {
    setIsLoading(true);
    try {
      const response: PlanetListModel = await Planet.getPlanet({s: value, page: 1});
      if (response.count === dataSet.length) {
        setIsLoading(false);
        return setDataSet([]);
      }
      setDataSet(response.results);
      dispatch({ type: 'SET_PLANETS', payload: response.results });
      dispatch({ type: 'SET_PAGES', payload: 2 });
      dispatch({ type: 'SET_TOTAL_RESULTS', payload: Number(response.count) });
      dispatch({ type: 'SET_QUERY_SEARCH', payload: value === "batman" ? "" : value });
      isSearchPlanet && searchPlanet();
    } catch (error) {
      console.log("error get planet list", error)
    }
    setIsLoading(false);
  }, 1000);

  const searchPlanet = useCallback(() => {
    router.push("/");
  }, []);

  const propsAutoComplete = {
    dataSet: dataSet,
    placeholder: "Search Planet ...",
    getDataSet: getPlanet,
    isLoading,
    value: store.getState().querySearch,
    setDataSet: useCallback((data: any) => setDataSet(data), []),
    onEnter: searchPlanet,
    onSearchClicked: searchPlanet
  }

  return (
    <Navbar>
      <Link href="/">
        <a>
          <Logo src="https://www.logolynx.com/images/logolynx/cb/cbdfc4868efd455066cd565dd53f71d8.png" alt="Logo Web Planet" />
        </a>
      </Link>
      <MVAutoComplete {...propsAutoComplete}/>
      <Hidden xs={true}>
        <SectionRight>
          <MVButton>Sign In</MVButton>
          <Separator />
          <MVButton buttonType="primary">Register</MVButton>
        </SectionRight>
      </Hidden>
    </Navbar>
  )
}

export default DefaultNavbar;