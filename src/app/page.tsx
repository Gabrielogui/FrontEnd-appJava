import CartaoTipos from "@/components/CartaoTipos";

export default function Home() {

  // |=======| RETURN |=======|
  return (
    <div className="flex flex-col h-screen bg-emerald-900">
      

      <div className="flex flex-col flex-1 bg-slate-300 p-4">
        <CartaoTipos />
      </div>

    </div>
  );
}
