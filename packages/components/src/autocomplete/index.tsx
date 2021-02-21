import { useState, memo, ChangeEvent, Fragment } from 'react';
import { Section, SectionBoxList, SectionList, SectionFormSearch, ButtonSearch, InputSearch, Overlay } from './style';
import Link from 'next/link';
import Loader from '../loader';
import { Number } from '@web-planet/helpers';

interface AutoCompleteProps {
  dataSet?: any[];
  name?: string;
  placeholder?: string;
  isLoading?: boolean;
  value?: string;
  getDataSet: (value?: string, isSearchPlanet?: boolean) => void;
  setDataSet: (data?: any) => void;
  onEnter?: () => void;
  onSearchClicked?: () => void;
}

const SearchBox = (props: AutoCompleteProps) => {

  const { dataSet, isLoading, value, getDataSet, setDataSet, onEnter, onSearchClicked } = props;

  const [searchString, setSearchString] = useState(value || "");
  const [showList, setShowList] = useState(true);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
    if (e.target.value.length >= 2) {
      getDataSet(e.target.value);
    }
    else if (e.target.value.length === 0) {
      getDataSet("batman", true);
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.keyCode == 13) {
      setShowList(false);
      onEnter && onEnter();
   }
  };

  const onClickSearch = () => {
    setShowList(false);
    onSearchClicked && onSearchClicked();
  };
  
  return (
    <Section>
      <SectionFormSearch>
        <InputSearch type="search" name={props.name}  value={searchString} autoComplete="off" placeholder={props.placeholder} onChange={onChange} onFocus={() => setShowList(true)} onKeyDown={onKeyPress}/>
        <ButtonSearch onClick={onClickSearch}>
         {isLoading ? <Loader /> : <img src="https://www.nicepng.com/png/full/88-881641_research-search-icon-png-yellow.png" alt="Search Icon" />}
        </ButtonSearch>
      </SectionFormSearch>
      {showList && !!dataSet?.length && (
        <Fragment>
          <Overlay onClick={() => setShowList(false)} />
          <SectionBoxList>
            {dataSet?.map((data, key) => {
              let url = data.url.split("/");
              url = url[url.length - 2];
              return (
                <Link href={`/planet/${url}`}>
                  <a onClick={() => setShowList(false)}>
                    <SectionList key={key}>
                      <img src={"https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8Mnx8cGxhbmV0fHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080"} />
                      <div>
                        <h4>{data.name}</h4>
                        <h5>Diameter {Number.numberWithCommas(data.diameter)}</h5>
                      </div>
                    </SectionList>
                  </a>
                </Link>
              )
            })}
          </SectionBoxList>
        </Fragment>
      )}
    </Section>
  )
};

export default memo(SearchBox);