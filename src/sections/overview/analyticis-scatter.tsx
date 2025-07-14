/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */

// @ts-nocheck
import { Grid } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ScatterChart } from '@mui/x-charts/ScatterChart';

// eslint-disable-next-line react/prop-types
export default function HomicidesScatterChart({ data }) {
  return (
    <Grid item xs={12}>
      <ScatterChart
        height={400}
        dataset={data}
        // onItemClick={(_: any, d: ScatterItemIdentifier) => alert('d')}
        series={[
          {
            label: (location) => (location === 'tooltip' ? '' : 'Homicídios x Renda'),
            data,
            valueFormatter: (value, context) => {
              return `Ano: ${value.ano} Renda: ${value?.x} Taxa Hom. ${value.y}`;
            },
          },
        ]}
        xAxis={[{ label: 'Renda Per Capita (R$)' }]}
        yAxis={[{ label: 'Taxa de Homicídios (por 100 mil hab.)' }]}
      />
    </Grid>
  );
}

