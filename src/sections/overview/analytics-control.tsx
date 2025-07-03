/* eslint-disable react/prop-types */
import type { CardProps } from '@mui/material/Card';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Stack, Select, MenuItem, Typography } from '@mui/material';
import { ReactNode } from 'react';


//--------------------------------------------------------------
// Listas de opções
//--------------------------------------------------------------

export const regioesEstadosList = [
  { label: 'Brasil', value: 'Brasil', tipo: 'regiao' },
  { label: 'Norte', value: 'Norte', tipo: 'regiao' },
  { label: 'Nordeste', value: 'Nordeste', tipo: 'regiao' },
  { label: 'Centro-Oeste', value: 'Centro-Oeste', tipo: 'regiao' },
  { label: 'Sudeste', value: 'Sudeste', tipo: 'regiao' },
  { label: 'Sul', value: 'Sul', tipo: 'regiao' },
  { label: 'Acre', value: 'AC', tipo: 'estado' },
  { label: 'Alagoas', value: 'AL', tipo: 'estado' },
  { label: 'Amapá', value: 'AP', tipo: 'estado' },
  { label: 'Amazonas', value: 'AM', tipo: 'estado' },
  { label: 'Bahia', value: 'BA', tipo: 'estado' },
  { label: 'Ceará', value: 'CE', tipo: 'estado' },
  { label: 'Distrito Federal', value: 'DF', tipo: 'estado' },
  { label: 'Espírito Santo', value: 'ES', tipo: 'estado' },
  { label: 'Goiás', value: 'GO', tipo: 'estado' },
  { label: 'Maranhão', value: 'MA', tipo: 'estado' },
  { label: 'Mato Grosso', value: 'MT', tipo: 'estado' },
  { label: 'Mato Grosso do Sul', value: 'MS', tipo: 'estado' },
  { label: 'Minas Gerais', value: 'MG', tipo: 'estado' },
  { label: 'Pará', value: 'PA', tipo: 'estado' },
  { label: 'Paraíba', value: 'PB', tipo: 'estado' },
  { label: 'Paraná', value: 'PR', tipo: 'estado' },
  { label: 'Pernambuco', value: 'PE', tipo: 'estado' },
  { label: 'Piauí', value: 'PI', tipo: 'estado' },
  { label: 'Rio de Janeiro', value: 'RJ', tipo: 'estado' },
  { label: 'Rio Grande do Norte', value: 'RN', tipo: 'estado' },
  { label: 'Rio Grande do Sul', value: 'RS', tipo: 'estado' },
  { label: 'Rondônia', value: 'RO', tipo: 'estado' },
  { label: 'Roraima', value: 'RR', tipo: 'estado' },
  { label: 'Santa Catarina', value: 'SC', tipo: 'estado' },
  { label: 'São Paulo', value: 'SP', tipo: 'estado' },
  { label: 'Sergipe', value: 'SE', tipo: 'estado' },
  { label: 'Tocantins', value: 'TO', tipo: 'estado' },
];

export const anosDisponiveis = [
  { label: 'TODOS', value: 'TODOS' },
  { label: '2023', value: 2023 },
  { label: '2022', value: 2022 },
  { label: '2021', value: 2021 },
  { label: '2020', value: 2020 },
  { label: '2019', value: 2019 },
  { label: '2018', value: 2018 },
  { label: '2017', value: 2017 },
  { label: '2016', value: 2016 },
  { label: '2015', value: 2015 },
  { label: '2014', value: 2014 },
];


type Props = CardProps & {
  title?: string;
  subheader?: string;
  regionValue: string;
  onChangeRegion: (value: string) => void;
  yearValue: number;
  onChangeYear: (value: string) => void;
  children?: ReactNode;
};

const AnalyticsControl: React.FC<Props> = ({
  title = 'Indicadores',
  subheader,
  regionValue,
  onChangeRegion,
  yearValue,
  onChangeYear,
  children,
  ...other
}) => (
  <Card {...other}>
    <CardHeader
      title={
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Typography variant="h6">{title}</Typography>

          <Stack direction="row" spacing={1}>
            <Select
              value={regionValue}
              size="small"
              onChange={(e) => onChangeRegion(e.target.value as string)}
            >
              {regioesEstadosList.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>

            <Select
              value={yearValue}
              size="small"
              onChange={(e) => onChangeYear(e.target.value as string)}
            >
              {anosDisponiveis.map((ano) => (
                <MenuItem key={ano.value} value={ano.value}>
                  {ano.label}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Stack>
      }
      subheader={subheader}
    />

    {children && (
      <div style={{ padding: '1rem' }}>
        {children}
      </div>
    )}
  </Card>
);

export default AnalyticsControl;
