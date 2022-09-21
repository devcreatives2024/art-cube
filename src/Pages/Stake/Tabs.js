import React from "react";

const Tabs = (color) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap lg:rounded-full text-gray-600
            border-gray-600 flex-row lg:mx-40 border"
            role="tablist"
          >
            <li className="-mb-px lg:mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "uppercase px-3 py-2 lg:rounded-full block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-gradient-to-r from-green-400 to-blue-500"
                    : "text-" + color + "-600")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Unstaked Art Earnings
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "tuppercase px-3 py-2 lg:rounded-full block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-gradient-to-r from-green-400 to-blue-500"
                    : "text-" + color + "-600")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Staked Art Earnings
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center">
                    <div className="w-48 text-center">
                      <h1 className="text-2xl">Plain</h1>
                      <img
                        src="https://stake.Baosociety.com/_next/image?url=%2Fskins%2Fplain.png&w=1920&q=75"
                        alt=""
                        className="-mt-6 -mb-2"
                      />
                      <div className="bg-black text-center rounded-lg mx-2 shadow-lg shadow-black py-2 font-sub font-extralight text-sm">
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">150 $ART</span>
                        </p>
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">150 $ART</span>
                        </p>
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">150 $ART</span>
                        </p>
                      </div>
                    </div>
                    <div className="w-48 text-center">
                      <h1 className="text-2xl">Blush</h1>
                      <img
                        src="https://stake.Baosociety.com/_next/image?url=%2Fskins%2Fblush.png&w=1920&q=75"
                        alt=""
                        className="-mt-6 -mb-2"
                      />
                      <div className="bg-black text-center rounded-lg mx-2 shadow-lg shadow-black py-2 font-sub font-extralight text-sm">
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">150 $ART</span>
                        </p>
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">150 $ART</span>
                        </p>
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">150 $ART</span>
                        </p>
                      </div>
                    </div>
                    <div className="w-48 text-center">
                      <h1 className="text-2xl">Ghost</h1>
                      <img
                        src="https://stake.Baosociety.com/_next/image?url=%2Fskins%2Fghost.png&w=1920&q=75"
                        alt=""
                        className="-mt-6 -mb-2"
                      />
                      <div className="bg-black text-center rounded-lg mx-2 shadow-lg shadow-black py-2 font-sub font-extralight text-sm">
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">150 $ART</span>
                        </p>
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">150 $ART</span>
                        </p>
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">150 $ART</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                  <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center">
                    <div className="w-48 text-center">
                      <h1 className="text-2xl">Plain</h1>
                      <img
                        src="https://stake.Baosociety.com/_next/image?url=%2Fskins%2Fplain.png&w=1920&q=75"
                        alt=""
                        className="-mt-6 -mb-2"
                      />
                      <div className="bg-black text-center rounded-lg mx-2 shadow-lg shadow-black py-2 font-sub font-extralight text-sm">
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">7557 $ART</span>
                        </p>
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">5554 $ART</span>
                        </p>
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">150 $ART</span>
                        </p>
                      </div>
                    </div>
                    <div className="w-48 text-center">
                      <h1 className="text-2xl">Blush</h1>
                      <img
                        src="https://stake.Baosociety.com/_next/image?url=%2Fskins%2Fblush.png&w=1920&q=75"
                        alt=""
                        className="-mt-6 -mb-2"
                      />
                      <div className="bg-black text-center rounded-lg mx-2 shadow-lg shadow-black py-2 font-sub font-extralight text-sm">
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">4554 $ART</span>
                        </p>
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">455 $ART</span>
                        </p>
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">554 $ART</span>
                        </p>
                      </div>
                    </div>
                    <div className="w-48 text-center">
                      <h1 className="text-2xl">Ghost</h1>
                      <img
                        src="https://stake.Baosociety.com/_next/image?url=%2Fskins%2Fghost.png&w=1920&q=75"
                        alt=""
                        className="-mt-6 -mb-2"
                      />
                      <div className="bg-black text-center rounded-lg mx-2 shadow-lg shadow-black py-2 font-sub font-extralight text-sm">
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">4554 $ART</span>
                        </p>
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">4545 $ART</span>
                        </p>
                        <p>
                          Base Rate:{" "}
                          <span className="text-blue-300">1544550 $ART</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
