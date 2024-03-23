'use client';

import { Dataset } from '@/app/_utils/types/datasetEDF';
import { Col, Container, Form, Row } from 'react-bootstrap';
import styles from './ControlBar.module.scss';
import { getTitleFromLabel } from '@/app/_utils/methods/transformText';
import { generateYearArray } from '@/app/_utils/methods/generateDataTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getKpi } from '@/app/_utils/methods/getKpi';
import { ChangeEvent, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const ControlBar = () => {
  const [year, setYear] = useState('2022');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const datasetArray: string[] = Object.values(Dataset);
  const startYear = 2018;
  const endYear = 2023;
  const years = generateYearArray({ startYear, endYear });

  // Need a refacto to extract method used in the two handlers
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const year = event.target.value;
    setYear(year);
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!year) {
      current.delete('year');
    } else {
      current.set('year', year);
    }

    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`);
  };

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const widget = event.target.name;
    const widgetValue = event.target.checked;
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!widgetValue) {
      current.delete(widget);
    } else {
      current.set(widget, widgetValue.toString());
    }

    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`);
  };

  const nbIncidentOpen = getKpi(year);

  return (
    <div className={styles.wrapper}>
      <Form>
        <Container>
          <Row>
            <Col md className="pb-3 pb-md-0">
              <h3>
                Incidents in {year}
                <span className="d-inline d-md-none text-primary">
                  : {nbIncidentOpen} incidents
                </span>
              </h3>
              <p className={`${styles.kpi} d-none d-md-block`}>{nbIncidentOpen}</p>
            </Col>
            <Col md className="pb-3 pb-md-0">
              <h3>Datasets</h3>
              {datasetArray.map((dataset: string) => {
                const readableDataset = getTitleFromLabel(dataset);
                return (
                  <div key={`inline-checkbox${dataset}`} className="pb-1">
                    <Form.Check
                      label={readableDataset}
                      name={dataset}
                      type="checkbox"
                      id={`inline-checkbox-${dataset}`}
                      className={styles.formCheckLabel}
                      checked={searchParams.get(dataset) !== null}
                      onChange={handleChangeCheck}
                    />
                  </div>
                );
              })}
            </Col>
            <Col md>
              <h3>Year's overview</h3>
              <div className=" d-flex flex-wrap">
                {years.map((year) => (
                  <div key={`inline-radio-${year}`} className="pb-1">
                    <Form.Check
                      label={year}
                      name="groupYears"
                      value={year.toString()}
                      type="radio"
                      id={`inline-radio-${year}`}
                      className={styles.formCheckLabel}
                      onChange={handleChangeRadio}
                    />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

const updateQueryParams = (label: string, value: string) => {};

export default ControlBar;
