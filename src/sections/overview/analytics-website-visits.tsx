import type { CardProps } from '@mui/material/Card';
import type { ChartOptions } from 'src/components/chart';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { useTheme, alpha as hexAlpha } from '@mui/material/styles';
import { Stack, Select, MenuItem, Typography } from '@mui/material';

import { Chart, useChart } from 'src/components/chart';

export const regioesEstadosList = [
  { label: "Brasil", value: "Brasil", tipo: "regiao" },
  { label: "Norte", value: "Norte", tipo: "regiao" },
  { label: "Nordeste", value: "Nordeste", tipo: "regiao" },
  { label: "Centro-Oeste", value: "Centro-Oeste", tipo: "regiao" },
  { label: "Sudeste", value: "Sudeste", tipo: "regiao" },
  { label: "Sul", value: "Sul", tipo: "regiao" },

  { label: "Acre", value: "AC", tipo: "estado" },
  { label: "Alagoas", value: "AL", tipo: "estado" },
  { label: "Amapá", value: "AP", tipo: "estado" },
  { label: "Amazonas", value: "AM", tipo: "estado" },
  { label: "Bahia", value: "BA", tipo: "estado" },
  { label: "Ceará", value: "CE", tipo: "estado" },
  { label: "Distrito Federal", value: "DF", tipo: "estado" },
  { label: "Espírito Santo", value: "ES", tipo: "estado" },
  { label: "Goiás", value: "GO", tipo: "estado" },
  { label: "Maranhão", value: "MA", tipo: "estado" },
  { label: "Mato Grosso", value: "MT", tipo: "estado" },
  { label: "Mato Grosso do Sul", value: "MS", tipo: "estado" },
  { label: "Minas Gerais", value: "MG", tipo: "estado" },
  { label: "Pará", value: "PA", tipo: "estado" },
  { label: "Paraíba", value: "PB", tipo: "estado" },
  { label: "Paraná", value: "PR", tipo: "estado" },
  { label: "Pernambuco", value: "PE", tipo: "estado" },
  { label: "Piauí", value: "PI", tipo: "estado" },
  { label: "Rio de Janeiro", value: "RJ", tipo: "estado" },
  { label: "Rio Grande do Norte", value: "RN", tipo: "estado" },
  { label: "Rio Grande do Sul", value: "RS", tipo: "estado" },
  { label: "Rondônia", value: "RO", tipo: "estado" },
  { label: "Roraima", value: "RR", tipo: "estado" },
  { label: "Santa Catarina", value: "SC", tipo: "estado" },
  { label: "São Paulo", value: "SP", tipo: "estado" },
  { label: "Sergipe", value: "SE", tipo: "estado" },
  { label: "Tocantins", value: "TO", tipo: "estado" },
];


// ----------------------------------------------------------------------


type Props = CardProps & {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    categories?: string[];
    series: {
      name: string;
      data: number[];
    }[];
    options?: ChartOptions;
  };
  filtroAtual: string;
  onChangeFiltro: (value: string) => void;
};

export function AnalyticsWebsiteVisits({ title, subheader, chart, filtroAtual, onChangeFiltro, ...other }: Props) {
  const theme = useTheme();

  const chartColors = chart.colors ?? [
    theme.palette.primary.dark,
    hexAlpha(theme.palette.primary.light, 0.64),
  ];

  const chartOptions = useChart({
    colors: chartColors,
    stroke: {
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: chart.categories,
    },
    legend: {
      show: true,
    },
    tooltip: {
      y: {
        formatter: (value: number) => `${value} visitas`,
      },
    },
    ...chart.options,
  });

  return (
    <Card {...other}>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h6">{title}</Typography>
            <Select
              value={filtroAtual}
              size="small"
              onChange={(e) => onChangeFiltro(e.target.value)}
            >
              {regioesEstadosList.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        }
        subheader={subheader}
      />

      <Chart
        type="bar"
        series={chart.series}
        options={chartOptions}
        height={364}
        sx={{ py: 2.5, pl: 1, pr: 2.5 }}
      />
    </Card>
  );
}
