import { getInvestmentResearch } from '@/app/_utils/methods/getInvestmentResearch';
import ClientHighcart from './ClientLineChart';

const ChartLine = async () => {
  // NB: This is a server component. We are never calling the DB from the frontend!
  const investmentResearch = await getInvestmentResearch();
  const data = investmentResearch.results.map((dataPoint) => ({
    x: Number(dataPoint.annee),
    y: dataPoint.valeur,
  }));

  return (
    <div className="DynamicCard">
      <ClientHighcart data={data} />
    </div>
  );
};

export default ChartLine;
