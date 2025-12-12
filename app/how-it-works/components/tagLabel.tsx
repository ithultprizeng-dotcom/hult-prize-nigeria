export function TagLabel({ text }: { text: string }) {
  return (
    <p className="font-body text-caption font-semibold text-green-800 bg-green-200 px-6 tracking-[1px] py-2 rounded-full capitalize">
      {text}
    </p>
  );
}
