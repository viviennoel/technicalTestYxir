import { getRenewableProduction } from '@/app/_utils/methods/getRenewableProduction';
import ClientMap from './ClientMap';

const Map = async () => {
  const year = 2022; // To be saved in the user profile (preferences)
  const renewableProduction = await getRenewableProduction(year);
  const data = renewableProduction.results;

  return <ClientMap data={data} />;
};

export default Map;
