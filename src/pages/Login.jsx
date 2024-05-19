import PageNav from "./PageNav";

function Login() {
  return (
    <>
      <section
        className="bg-[#2d3439] h-screen px-20 py-8 
        backdrop-brightness-50 z-20 block 
        overflow-hidden  h-screen m-8 "
      >
        <PageNav />
        <main className=" flex  items-center justify-center gap-4">
          <div className="bg-[#42484d] 	p-5  w-[34rem] rounded my-32 mx-auto">
            <div className="flex flex-col gap-4	">
              <label className="text-xl		text-[#ececec] font-semibold	">
                Email Address
              </label>
              <input
                type="email"
                className="bg-[#d6dee0] w-full	py-1 px-1 rounded text-xl	"
                placeholder="mahfuz@example.com"
              ></input>
            </div>
            <div className="flex flex-col gap-4 mt-3">
              <label className="text-xl		text-slate-50	 gap-4	font-semibold		">
                Password
              </label>
              <input
                type="password"
                className="bg-[#d6dee0] w-full	py-1 px-1 rounded"
              ></input>
            </div>
            <button className="bg-[#00c46a] py-2 px-4 rounded-md mt-3	text-black">
              LOGIN
            </button>
          </div>
        </main>
      </section>
      Login
    </>
  );
}

export default Login;
