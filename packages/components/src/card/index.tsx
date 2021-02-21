import { memo } from 'react';
import { SectionCard, Poster, Description } from './style';
import Link from 'next/link';
import { Number } from '@web-planet/helpers';

interface DefaultProps {
  id?: number | string;
  image: string;
  name: string;
  orbitalPeriod?: string;
  diameter?: string;
  rotationPeriod?: string;
  onImageClick?: () => void;
}

export default memo((props: DefaultProps) => {
  const { id, image, name, rotationPeriod, orbitalPeriod, diameter, onImageClick } = props;
  return(
    <SectionCard>
      <Poster src={image} alt={name} onClick={onImageClick} />
      <Link href={`/planet/${id}`}>
        <a>
          <Description>
            <h2>{name}</h2>
            <table>
              <tbody>
                <tr>
                  <th>Diameter</th>
                  <td><h4>{Number.numberWithCommas(diameter || 0)}</h4></td>
                </tr>
                <tr>
                  <th>Orbital Period</th>
                  <td><h4>{orbitalPeriod}</h4></td>
                </tr>
                <tr>
                  <th>Rotation Period</th>
                  <td><h4>{rotationPeriod}</h4></td>
                </tr>
              </tbody>
            </table>
          </Description>
        </a>
      </Link>
    </SectionCard>
  )
});