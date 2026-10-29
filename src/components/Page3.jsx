export function Page3(){
  return(
    <section id="page3" className="w-screen h-screen flex flex-col items-center justify-center gap-[8em] relative z-10">
      <div className="scan-info absolute top-0 w-[100vw] flex justify-between p-[2em]">

        <div className="product-id ">
          <h2 className="code absolute left-3" >#76830</h2>
        </div>
        <div className="product-description absolute right-10">
          <p>Transform your digital identity</p>
        </div>
      </div>

      <div className="scan-container w-[300px] h-[520px] border border-black rounded-[0.5em]">

      </div>

      <div className="barcode absolute bottom-[1em] left-[2em] w-[200px] h-[100px]">
        <img src="https://image.similarpng.com/file/similarpng/original-picture/2021/06/Barcode-flat-icon-bar-code-sign-thin-line-symbol-on-transparent-background-PNG.png" alt="" />
      </div>

      <div className="purchased absolute bottom-[2em] right-[2em] px-[0.5em] py-[4em] border border-red rounded-[2em]"><p className="text-red-800">innovation verified</p></div>
    </section>
  )
}