/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

export default function Page(props:any){
  
  return (
    <div>
      <p>{props.params.id}</p>
    </div>
  );

}
