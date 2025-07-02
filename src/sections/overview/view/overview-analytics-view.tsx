import { useState,
  // useEffect
 } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
// import { AnalyticsCurrentSubject } from '../analytics-current-subject';
// import { AnalyticsConversionRates } from '../analytics-conversion-rates';


// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  const [filtroSelecionado, setFiltroSelecionado] = useState("Brasil");
  // DASHBOARD PAGE
//   useEffect(() => {
//   const fetchData = async () => {
//     const res = await fetch(`/api/homicidios/resumo?tipo=${filtroSelecionado}`);
//     const json = await res.json();

//     const categorias = json.map((item) => item.ano);
//     const homicidios = json.map((item) => item.homicidios);
//     const renda = json.map((item) => item.renda);

//     setChartData({
//       categories: categorias,
//       series: [
//         { name: "Homicídios", data: homicidios },
//         { name: "Renda Per Capita", data: renda },
//       ],
//     });
//   };

//   fetchData();
// }, [filtroSelecionado]);


  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Homicídios Dashboard!
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={2.4}>
          <AnalyticsWidgetSummary
            title="Região Norte"
            percent={2.6}
            total={714000}
            color="success"
            icon='eva:arrow-upward-outline'
            chart={{
              categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
              series: [22, 8, 35, 50, 82, 84, 77, 12],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <AnalyticsWidgetSummary
            title="Região Nordeste"
            percent={-0.1}
            total={1352831}
            color="warning"
            icon='eva:diagonal-arrow-right-up-outline'
            chart={{
              categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
              series: [56, 47, 40, 62, 73, 30, 23, 54],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <AnalyticsWidgetSummary
            title="Região Sudeste"
            percent={2.8}
            total={1723315}
            color="error"
            icon='eva:diagonal-arrow-right-down-fill'
            chart={{
              categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
              series: [40, 70, 50, 28, 70, 75, 7, 64],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={2.4}>
          <AnalyticsWidgetSummary
            title="Região Sul"
            percent={3.6}
            total={234}
            color="secondary"
            icon='eva:arrow-downward-fill'
            chart={{
              categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid>
        <Grid xs={12} sm={6} md={2.4}>
          <AnalyticsWidgetSummary
            title="Centro-Oeste"
            percent={3.6}
            total={234}
            // color="Norte"
            icon='eva:arrow-upward-outline'
            chart={{
              categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid>
        <Grid xs={12} md={12} lg={12}>
          <AnalyticsWebsiteVisits
            title="Homicídios vs Renda Per Capita"
            // subheader="(+43%) than last year"
            subheader={`Dados médios - ${filtroSelecionado}`}
            filtroAtual={filtroSelecionado}
            onChangeFiltro={setFiltroSelecionado}
            chart={{
              categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
              series: [
                { name: 'Homicídios', data: [6.1, 6.3, 6.5, 6.4, 6.8, 7.0, 6.9] },
                { name: 'Renda Per Capita', data: [1800, 1900, 2000, 2100, 2200, 2300, 2400] },
              ],
            }}
          />
        </Grid>


        {/* <Grid xs={12} md={6} lg={8}>
          <AnalyticsConversionRates
            title="Conversion rates"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Italy', 'Japan', 'China', 'Canada', 'France'],
              series: [
                { name: '2022', data: [44, 55, 41, 64, 22] },
                { name: '2023', data: [53, 32, 33, 52, 13] },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentSubject
            title="Current subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <AnalyticsNews title="News" list={_posts.slice(0, 5)} />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AnalyticsOrderTimeline title="Order timeline" list={_timeline} />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AnalyticsTrafficBySite
            title="Traffic by site"
            list={[
              { value: 'facebook', label: 'Facebook', total: 323234 },
              { value: 'google', label: 'Google', total: 341212 },
              { value: 'linkedin', label: 'Linkedin', total: 411213 },
              { value: 'twitter', label: 'Twitter', total: 443232 },
            ]}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <AnalyticsTasks title="Tasks" list={_tasks} />
        </Grid> */}
      </Grid>
    </DashboardContent>
  );
}
