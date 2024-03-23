'use client';

import { getTitleFromLabel } from '@/app/_utils/methods/transformText';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
import mapDataIE from '@highcharts/map-collection/custom/world.geo.json';
import proj4 from 'proj4';
import { Dataset } from '@/app/_utils/types/datasetEDF';
import { useSearchParams } from 'next/navigation';

const ClientMap = ({ data }: { data: {} }) => {
  const title = getTitleFromLabel(Dataset.RENEWABLE_PRODUCTION);
  const searchParams = useSearchParams();
  const year = searchParams.get('year');

  if (typeof Highcharts === 'object') {
    highchartsMap(Highcharts);
  }
  proj4;

  const mapOptions = {
    chart: {
      map: mapDataIE,
    },
    title: {
      text: `Répartition mondiale de ${title}`,
    },
    credits: {
      enabled: false,
    },
    mapNavigation: {
      enabled: true,
    },
    series: [
      {
        type: 'mapbubble',
        name: 'renewable energy %',
        joinBy: ['iso-a3', 'code3'],
        data,
        cursor: 'pointer',
      },
      {
        name: 'Basemap',
        mapData: mapDataIE,
        borderColor: '#e1a116',
        nullColor: 'rgba(77, 121, 222, 0.119)',
        showInLegend: false,
      },
    ],
  };

  return (
    <div>
      <h3 className="m-2 text-center">Year {year ?? 2022}</h3>
      <HighchartsReact constructorType={'mapChart'} highcharts={Highcharts} options={mapOptions} />
    </div>
  );
};

export default ClientMap;
