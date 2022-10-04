interface DataProps {
  title: string;
  value: number;
  subtitle: string;
}

export default function Cards(props: DataProps) {
  return (
    <div className="flex grow-3 gap-2 justify-center container">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          {props.title}
        </h5>
        <p className="text-gray-700 text-base mb-4">{props.value}</p>
        <p className="text-gray-700 text-base mb-4">{props.subtitle}</p>
      </div>
    </div>
  );
}
