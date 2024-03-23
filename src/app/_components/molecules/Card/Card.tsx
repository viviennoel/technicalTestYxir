import { Dataset } from '@/app/_utils/types/datasetEDF';
import dynamic from 'next/dynamic';

const DynamicCard = ({ type }: { type: Dataset }) => {
  const ChartLine = dynamic(() => import('@/app/_components/molecules/ChartLine/ChartLine'));
  const ChartPie = dynamic(() => import('@/app/_components/molecules/ChartPie/ChartPie'));
  const Map = dynamic(() => import('@/app/_components/molecules/Map/Map'));

  switch (type) {
    case Dataset.INVESTMENT_RESEARCH:
      return <ChartLine />;
    case Dataset.PRODUCTION_SOURCE:
      return <ChartPie />;
    case Dataset.RENEWABLE_PRODUCTION:
      return <Map />;
    default:
      return null;
  }
};

export default DynamicCard;
