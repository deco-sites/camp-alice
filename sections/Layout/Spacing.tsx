export interface Props {
  /**
   * @title Espaçamento
   * @description Tamanho do espaçamento, e.g. 100px
   */
  size: string;
}

export default function Spacing(
  { size }: Props,
) {
  return <div style={{ height: size, width: "100%" }} />;
}
