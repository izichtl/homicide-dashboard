
import { useState, useEffect,
} from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useGetHomicides } from 'src/hooks/get-homicides-by-selector';
import { useGetHomicidesByRegion } from 'src/hooks/get-homicides-by-region';

import { mapHomicidesToScatter } from 'src/utils/map-to-scatter';
import { transformRegionDataForChart } from 'src/utils/region-graph';
import { filterAnyRegionOrStateByYear } from 'src/utils/filter-by-data';

import { DashboardContent } from 'src/layouts/dashboard';

import AnalyticsControl from '../analytics-control';
import HomicidesScatterChart from '../analyticis-scatter';
import { regioesEstadosList } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';

export function OverviewAnalyticsView() {

  const [regionData, setRegionData] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  const [filtroRegiao, setFiltroRegiao] = useState(regioesEstadosList[0].value);
  const [filtroAno, setFiltroAno] = useState('TODOS');

  // DASHBOARD PAGE

  const {
    homicidesByRegion,
    homicidesByRegionLoading,
    homicidesByRegionError,
  } = useGetHomicidesByRegion()

  useEffect(() => {
    if(homicidesByRegion[0] !== undefined){
      const region = transformRegionDataForChart(homicidesByRegion) as any
      setRegionData(region)
    }
  }, [
    homicidesByRegion,
    homicidesByRegionLoading,
    homicidesByRegionError
  ])

  const {
    homicides,
    homicidesLoading,
    homicidesError,
  } = useGetHomicides()

  useEffect(() => {
    if(homicides[0] !== undefined) {
      const resultado = filterAnyRegionOrStateByYear(homicides, filtroRegiao, filtroAno as any);
      setData(mapHomicidesToScatter(resultado))
    }
  }, [homicides, homicidesLoading, homicidesError, filtroRegiao, filtroAno])

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h2" sx={{ mb: { xs: 3, md: 5 } }}>
        Homicídios Dashboard!
      </Typography>
      <Typography variant="h5" sx={{ mb: { xs: 3, md: 5 } }}>
        Curva da taxa de homicídios por região!
      </Typography>
      <Grid container spacing={3}>
          {regionData !== null &&  regionData.map((item :any) => {
            let color = 'primary'
            if (item.name === "Sul") color = "secondary"
            if (item.name === 'Nordeste') color = "warning"
            if (item.name === 'Sudeste') color = 'error'
            if (item.name === 'Norte') color = 'success'
            return (
        <Grid xs={12} sm={6} md={2.4}>
          <AnalyticsWidgetSummary
            title={`R. ${item.name}`}
            percent={2.6}
            total={item.series[item.series.length - 1]}
            // @ts-expect-error
            color={color}
            icon='eva:arrow-upward-outline'
            chart={{
              categories: item.categories,
              series: item.series.map((value: number) => Number(value.toFixed(2))),
            }}
          />
        </Grid>
        )})}
        <Grid xs={12} md={12} lg={12}>
          <AnalyticsControl
            title="Relação de Homicídios por Renda Per Capita"
            subheader="Selecione os estados ou regiões"
            regionValue={filtroRegiao}
            onChangeRegion={setFiltroRegiao}
            yearValue={filtroAno as any}
            onChangeYear={setFiltroAno}
          >
            <HomicidesScatterChart
              data={data}
            />
            <br/>
          </AnalyticsControl>
        </Grid>

      </Grid>
    </DashboardContent>
  );
}



