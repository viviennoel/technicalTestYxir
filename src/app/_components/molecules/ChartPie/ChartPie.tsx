import { getProductionSource } from '@/app/_utils/methods/getProductionSource';
import ClientChartPie from '@/app/_components/molecules/ChartPie/ClientChatPie';

const ChartPie = async () => {
  const year = 2022; // the last year that the user saved in his preferences
  const dataset = await getProductionSource(year);
  const data = dataset.results.map((dataPoint) => ({
    name: dataPoint.sub_category,
    y: dataPoint.valeur,
  }));

  return (
    <div>
      <ClientChartPie data={data} />
    </div>
  );
};

export default ChartPie;
