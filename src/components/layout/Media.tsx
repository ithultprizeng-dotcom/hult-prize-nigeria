export default function Media() {
  return (
    <section className="mt-80 h-[150vh] w-full bg-gallery bg-[url('/images/image15.png')] bg-cover bg-fixed flex flex-col justify-between">
      <div className="flex w-full bg-gallery">
        <div className="bg-[url('/images/image15.png')] bg-cover bg-fixed rounded-tr-full w-30 h-40"></div>
        <div className=" bg-[url('/images/image15.png')] bg-cover bg-fixed w-30 h-25 mt-auto -ml-5 rounded-tr-full"></div>
        <div className=" bg-[url('/images/image15.png')] bg-cover bg-fixed w-20 h-15 mt-auto -ml-5 rounded-tr-full"></div>
        <div className=" w-25 h-40 grow"></div>
        <div className=" bg-[url('/images/image15.png')] bg-cover bg-fixed w-20 h-15 mt-auto -mr-5 rounded-tl-full "></div>
        <div className=" bg-[url('/images/image15.png')] bg-cover bg-fixed w-30 h-25 mt-auto -mr-5 rounded-tl-full "></div>
        <div className="bg-[url('/images/image15.png')] bg-cover bg-fixed rounded-tl-full w-30 h-40"></div>
      </div>
      <div className="flex w-full bg-gallery h-40">
         <div className="bg-[url('/images/image15.png')] bg-cover bg-fixed rounded-br-full w-30 h-40"></div>
        <div className=" bg-[url('/images/image15.png')] bg-cover bg-fixed w-30 h-25 mb-auto -ml-5 rounded-br-full"></div>
        <div className=" bg-[url('/images/image15.png')] bg-cover bg-fixed w-20 h-15 mb-auto -ml-5 rounded-br-full"></div>
        <div className=" w-25 h-40 grow"></div>
        <div className=" bg-[url('/images/image15.png')] bg-cover bg-fixed w-20 h-15 mb-auto -mr-5 rounded-bl-full "></div>
        <div className=" bg-[url('/images/image15.png')] bg-cover bg-fixed w-30 h-25 mb-auto -mr-5 rounded-bl-full "></div>
        <div className="bg-[url('/images/image15.png')] bg-cover bg-fixed rounded-bl-full w-30 h-40"></div>
      </div>
    </section>
  );
}
