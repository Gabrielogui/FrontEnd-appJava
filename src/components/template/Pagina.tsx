import Cabecalho from "../Cabecalho";

export interface PaginaProps {
    children: React.ReactNode
}

export default function Home({children}: PaginaProps) {

    // |=======| RETURN |=======|
    return (
      <div className="flex flex-col h-screen bg-emerald-900">
        <Cabecalho/>
  
        <div className="flex flex-col flex-1 bg-slate-300 p-4">
            {children}
        </div>
  
      </div>
    );
  }