'use client';

import { getTitleFromLabel } from '@/app/_utils/methods/transformText';
import { Dataset, ProductionSource } from '@/app/_utils/types/datasetEDF';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ClientChartPie = ({ data }: { data: { name: string; y: number }[] }) => {
  const [clientData, setClientData] = useState(data);
  const searchParams = useSearchParams();
  const year = searchParams.get('year');

  useEffect(() => {
    fetch('/api/productionSource', {
      method: 'POST',
      body: JSON.stringify({ year }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(async (res) => {
        const data:ProductionSource = await res.json();
        setClientData(
          data.results.map(dataPoint => ({
            name: dataPoint.sub_category,
            y: dataPoint.valeur,
          })),
        );
      })
      .catch((err) => console.log(err));
  }, [searchParams]);

  const title = getTitleFromLabel(Dataset.PRODUCTION_SOURCE);

  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: title,
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: [
          {
            enabled: true,
            distance: 20,
          },
          {
            enabled: true,
            distance: -40,
            format: '{point.percentage:.1f}%',
            style: {
              fontSize: '1.2em',
              textOutline: 'none',
              opacity: 0.7,
            },
            filter: {
              operator: '>',
              property: 'percentage',
              value: 10,
            },
          },
        ],
      },
    },
    series: [
      {
        name: 'Percentage',
        data: clientData,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  if (clientData.length > 0) {
    return (
      <div>
        <h3 className="m-2 text-center">Year {year ?? 2022}</h3>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }

  return null;
};

export default ClientChartPie;
