export interface Props {
  cupomCode: string;
  cupomDescription: string;
}

export default function Cupom(
  { cupomCode, cupomDescription }: Props,
) {
  return (
    <div class="flex flex-col gap-2 pl-3 container my-12 ">
      <p class="text-sm font-bold w-[150px] text-center p-2 border-dashed border border-black hover:bg-black hover:text-white hover:boder-white duration-300">
        {cupomCode}
      </p>
      <p class="w-fit">{cupomDescription}</p>
    </div>
  );
}
