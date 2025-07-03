type RegionInput = {
  regiao: string;
  dados: { ano: number; taxa_homicidio: number }[];
};

type ChartOutput = {
  name: string;
  categories: string[];
  series: number[];
};

/**
 * Transforms an array of regional homicide data into a chart-friendly structure.
 *
 * @param inputArray - Array of regional data with homicide rates.
 * @returns Array of chart objects per region.
 */
export function transformRegionDataForChart(inputArray: RegionInput[]): ChartOutput[] {
  return inputArray.map((region) => {
    const sorted = [...region.dados].sort((a, b) => a.ano - b.ano);

    return {
      name: region.regiao,
      categories: sorted.map((d) => d.ano.toString()),
      series: sorted.map((d) => Number(d.taxa_homicidio.toFixed(2))),
    };
  });
}
