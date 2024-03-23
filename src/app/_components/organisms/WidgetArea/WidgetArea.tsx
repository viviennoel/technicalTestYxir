'use client';

import DynamicCard from '@/app/_components/molecules/Card/Card';
import styles from './WidgetArea.module.scss';
import { useSearchParams } from 'next/navigation';
import { Dataset } from '@/app/_utils/types/datasetEDF';

// Feature of drag/drop would be added here using React DnD
const WidgetArea = () => {
  const searchParams = useSearchParams();
  const datasetArray: string[] = Object.values(Dataset);

  const queryParamsArray: string[] = [];
  datasetArray.forEach((dataset) => {
    const paramValue = searchParams.get(dataset);
    if (paramValue !== null) {
      queryParamsArray.push(dataset);
    }
  });

  return (
    <div className={`d-flex p-4 justify-content-around flex-wrap ${styles.wrapper}`}>
      {queryParamsArray.map((dataset) => {
        return (
          <div className={styles.card} key={dataset}>
            <DynamicCard type={dataset as Dataset} />
          </div>
        );
      })}
    </div>
  );
};

export default WidgetArea;
