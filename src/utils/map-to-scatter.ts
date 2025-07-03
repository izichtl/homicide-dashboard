/**
 * Mesmo tipo que usamos antes
 */
interface HomicideRecord {
  regiao: string;
  UF: string;
  nome_UF: string;
  ano: number;
  taxa_uf: number;
  PerCapitaUF: number;
}

/**
 * Estrutura de ponto exigida pelo <ScatterChart />
 * (id precisa ser único; ano fica extra para tooltip, se quiser usar)
 */
interface ScatterPoint {
  x: number;  // PerCapitaUF
  y: number;  // taxa_uf
  id: number; // único no conjunto
  ano: number;
}

/**
 * Converte registros filtrados → array de ScatterPoint
 *
 * @param filteredData saída de filterAnyRegionOrStateByYear(...)
 * @returns            pontos prontos para o <ScatterChart />
 */
export function mapHomicidesToScatter(
  filteredData: HomicideRecord[]
): ScatterPoint[] {
  return (
    filteredData
      // garante ordem cronológica: facilita ler a nuvem de pontos
      .sort((a, b) => a.ano - b.ano)
      .map((rec, idx) => ({
        x: rec.PerCapitaUF, // eixo X: renda per capita
        y: rec.taxa_uf,     // eixo Y: taxa de homicídios
        id: idx + 1,        // identificador único
        ano: rec.ano        // ano (opcional, útil p/ tooltip)
      }))
  );
}
