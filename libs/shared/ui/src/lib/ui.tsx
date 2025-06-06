export function Ui({ data }: { data: Array<string> }) {
  return (
    <ul className="flex gap-4">
      {data.map(datum => <li key={datum} className="text-lg font-bold">{datum}</li>)}
    </ul>
  );
}

export default Ui;
