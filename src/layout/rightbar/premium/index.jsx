import Button from "../../../components/button";


export default function Premium(){
    return (
       <section className="bg-black border border-[#2f3336] py-2 mb-4 px-4 flex flex-col gap-2.5 rounded-2xl text-[#e7e9ea] ">
       <h6 className="font-extrabold text-lg ">
       Premium'a Abone Ol
       </h6>
       <p className="text-[14px] leading-[18px] ">
       Yeni özellikleri açmak için abone ol ve uygun olman durumunda içerik üreticisi gelir payı kazan.
       </p>
       <Button
      
        className="self-start">
       Abone ol

       </Button>
       </section>
    )
}