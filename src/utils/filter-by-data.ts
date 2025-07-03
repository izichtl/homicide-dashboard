/**
 * Estrutura esperada de cada item do array.
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
 * Filtro por região/UF e ano. Se o ano for "TODOS", retorna todos os anos disponíveis.
 *
 * @param data          Array de dados (ex.: homicides)
 * @param filtroRegiao  Pode ser uma região ("Norte") ou UF ("AC", "SP", "Brasil"…)
 * @param filtroAno     Ano (ex.: 2021) ou "TODOS"
 */
export function filterAnyRegionOrStateByYear(
  data: HomicideRecord[],
  filtroRegiao: string,
  filtroAno: number | "TODOS"
): HomicideRecord[] {
  const alvo = filtroRegiao.trim().toUpperCase();

  return data.filter((d) => {
    const sameRegionOrUF =
      alvo === "BRASIL"
        ? d.UF.toUpperCase() === "BRASIL"
        : d.regiao.toUpperCase() === alvo || d.UF.toUpperCase() === alvo;

    const sameYear = filtroAno === "TODOS" ? true : d.ano === filtroAno;

    return sameRegionOrUF && sameYear;
  });
}
