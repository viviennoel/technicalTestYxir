'use client';

import { getTitleFromLabel } from '@/app/_utils/methods/transformText';
import { Dataset, InvestmentResearch } from '@/app/_utils/types/datasetEDF';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ClientHighcart = ({ data }: { data: { x: number; y: number }[] }) => {
  const [clientData, setClientData] = useState(data);
  const chartTitle = getTitleFromLabel(Dataset.INVESTMENT_RESEARCH);
  const searchParams = useSearchParams();
  const year = searchParams.get('year');

  useEffect(() => {
    fetch('/api/investmentResearch', {
      method: 'POST',
      body: JSON.stringify({ year }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(async (res) => {
        const data:InvestmentResearch = await res.json();
        setClientData(
          data.results.map(dataPoint => ({
            x: Number(dataPoint.annee),
            y: dataPoint.valeur,
          })),
        );
      })
      .catch((err) => console.log(err)); // need to implement logging system
  }, [searchParams]);

  const options = {
    chart: {
      type: 'spline',
    },
    title: {
      text: chartTitle,
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
  return (
    <div>
      <h3 className="m-2 text-center">Year {year ?? 2022}</h3>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ClientHighcart;
