import Button from "../../../components/button";


export default function Premium(){
    return (
       <section className="bg-[color:var(--background-primary)] border border-[color:var(--border-base)]  py-2 mb-4 px-4 flex flex-col gap-2.5 rounded-2xl  ">
       <h6 className="font-extrabold text-lg ">
       Premium'a Abone Ol
       </h6>
       <p className="text-[0.875rem] leading-[1.125rem] ">
       Yeni özellikleri açmak için abone ol ve uygun olman durumunda içerik üreticisi gelir payı kazan.
       </p>
       <button>
       <Button
      variant="primary"
     
        className="self-start">
       Abone ol

       </Button>
       </button>
       </section>
    )
}