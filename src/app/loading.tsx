export default function Loading() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center min-h-fit w-full gap-xl">
      <h1 className="text-text font-text text-size-xl">Loading...</h1>
      <div className="w-12 h-12 border-2 border-shade-five  border-t-shade-one rounded-full animate-spin shadow-lg"></div>
    </div>
  );
}
