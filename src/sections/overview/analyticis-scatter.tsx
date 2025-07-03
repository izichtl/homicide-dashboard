
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
        series={[{ label: 'Homicídios x Renda', data }]}
        xAxis={[{ label: 'Renda Per Capita (R$)' }]}
        yAxis={[{ label: 'Taxa de Homicídios (por 100 mil hab.)' }]}
      />
    </Grid>
  );
}

