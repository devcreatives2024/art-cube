import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";
import { SiGitbook } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import WhitePNav from "../../Components/WhitePNav";

const WDrawer = () => {
  const [open, setOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  let activeClassName =
    "border border-black flex justify-between items-center border-r-0 border-[#D3DCE4] bg-white text-[#3063C3] block px-4 py-2";
  let deactiveClassName =
    "block border flex justify-between items-center hover:bg-[#ECEFF1] hover:border-[#ECEFF1] border-[#F5F7F9] border-r-0 px-4 py-2";
  return (
    <div className="h-screen">
      <WhitePNav setNavOpen={setNavOpen} />
      <div
        className={`w-72 lg:hidden bg-[#F5F7F9] fixed top-0 h-screen border-r border-gray-300 ${
          navOpen ? "left-0" : "right-[500px] md:right-[850px]"
        }`}
      >
        <div className="py-5 px-4 flex justify-end bg-white border-b-2">
          <AiOutlineClose
            onClick={() => setNavOpen(false)}
            className="text-xl"
          />
        </div>
        <div className="flex flex-col justify-between">
          <ul className="ml-6 mt-4 font-sub font-light text-sm">
            <li>
              <NavLink
                to="/whitepaper/home"
                className={({ isActive }) =>
                  isActive ? activeClassName : deactiveClassName
                }
              >
                $Art Whitepaper
              </NavLink>
            </li>
            <li>
              <p className="uppercase text-xs font-body font-semibold block text-[#9CABB7] mt-2 px-4 py-2">
                Token Basics
              </p>
            </li>
            <li>
              <NavLink
                to="/whitepaper/what"
                className={({ isActive }) =>
                  isActive ? activeClassName : deactiveClassName
                }
              >
                What is $ART?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/whitepaper/earn"
                className={({ isActive }) =>
                  isActive ? activeClassName : deactiveClassName
                }
              >
                Earning and Claiming $ART
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/whitepaper/nft"
                className={({ isActive }) =>
                  isActive ? activeClassName : deactiveClassName
                }
              >
                How much $Art does my Art NFT earn?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/whitepaper/use"
                className={({ isActive }) =>
                  isActive ? activeClassName : deactiveClassName
                }
              >
                Using $ART
              </NavLink>
            </li>
            <li>
              {open ? (
                <NavLink
                  to="/whitepaper/faq"
                  className={({ isActive }) =>
                    isActive ? activeClassName : deactiveClassName
                  }
                >
                  <span>FAQ</span>
                  <span>
                    {open ? (
                      <BiDownArrow onClick={() => setOpen(false)} />
                    ) : (
                      <BiRightArrow onClick={() => setOpen(true)} />
                    )}
                  </span>
                </NavLink>
              ) : (
                <NavLink
                  onClick={() => setOpen(true)}
                  to="/whitepaper/faq"
                  className={({ isActive }) =>
                    isActive ? activeClassName : deactiveClassName
                  }
                >
                  <span>FAQ</span>
                  <span>
                    {open ? (
                      <BiDownArrow onClick={() => setOpen(false)} />
                    ) : (
                      <BiRightArrow onClick={() => setOpen(true)} />
                    )}
                  </span>
                </NavLink>
              )}
            </li>
            <li>
              <ul
                className={`${
                  open ? "block" : "hidden"
                } ml-4 border-l border-[#D3DCE4]`}
              >
                <li>
                  <NavLink
                    to="/whitepaper/know"
                    className={({ isActive }) =>
                      isActive ? activeClassName : deactiveClassName
                    }
                  >
                    How do I know I'm on the real Art Society site?
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/whitepaper/connect"
                    className={({ isActive }) =>
                      isActive ? activeClassName : deactiveClassName
                    }
                  >
                    How do I connect my wallet to the staking site?
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/whitepaper/mobile"
                    className={({ isActive }) =>
                      isActive ? activeClassName : deactiveClassName
                    }
                  >
                    Can I stake/claim $Art on mobile?
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/whitepaper/balance"
                    className={({ isActive }) =>
                      isActive ? activeClassName : deactiveClassName
                    }
                  >
                    Where can I see my $Art balance?
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <button className="bg-[#e2e5e7] m-2 flex justify-center gap-3 p-3 rounded-md items-center hover:text-blue-700">
            <SiGitbook className="text-3xl" />{" "}
            <span>
              Powered by <span className="font-bold">GitBook</span>
            </span>
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="w-96 bg-[#F5F7F9] hidden lg:flex flex-col justify-between border-r border-gray-300">
          <ul className="ml-6 mt-4 font-sub font-light text-sm">
            <li>
              <NavLink
                to="/whitepaper/home"
                className={({ isActive }) =>
                  isActive ? activeClassName : deactiveClassName
                }
              >
                $Art Whitepaper
              </NavLink>
            </li>
            <li>
              <p className="uppercase text-xs font-body font-semibold block text-[#9CABB7] mt-4 px-4 py-2">
                Token Basics
              </p>
            </li>
            <li>
              <NavLink
                to="/whitepaper/what"
                className={({ isActive }) =>
                  isActive ? activeClassName : deactiveClassName
                }
              >
                What is $ART?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/whitepaper/earn"
                className={({ isActive }) =>
                  isActive ? activeClassName : deactiveClassName
                }
              >
                Earning and Claiming $ART
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/whitepaper/nft"
                className={({ isActive }) =>
                  isActive ? activeClassName : deactiveClassName
                }
              >
                How much $Art does my Art NFT earn?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/whitepaper/use"
                className={({ isActive }) =>
                  isActive ? activeClassName : deactiveClassName
                }
              >
                Using $ART
              </NavLink>
            </li>
            <li>
              {open ? (
                <NavLink
                  to="/whitepaper/faq"
                  className={({ isActive }) =>
                    isActive ? activeClassName : deactiveClassName
                  }
                >
                  <span>FAQ</span>
                  <span>
                    {open ? (
                      <BiDownArrow onClick={() => setOpen(false)} />
                    ) : (
                      <BiRightArrow onClick={() => setOpen(true)} />
                    )}
                  </span>
                </NavLink>
              ) : (
                <NavLink
                  onClick={() => setOpen(true)}
                  to="/whitepaper/faq"
                  className={({ isActive }) =>
                    isActive ? activeClassName : deactiveClassName
                  }
                >
                  <span>FAQ</span>
                  <span>
                    {open ? (
                      <BiDownArrow onClick={() => setOpen(false)} />
                    ) : (
                      <BiRightArrow onClick={() => setOpen(true)} />
                    )}
                  </span>
                </NavLink>
              )}
            </li>
            <li>
              <ul
                className={`${
                  open ? "block" : "hidden"
                } ml-4 border-l border-[#D3DCE4]`}
              >
                <li>
                  <NavLink
                    to="/whitepaper/know"
                    className={({ isActive }) =>
                      isActive ? activeClassName : deactiveClassName
                    }
                  >
                    How do I know I'm on the real Art Society site?
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/whitepaper/connect"
                    className={({ isActive }) =>
                      isActive ? activeClassName : deactiveClassName
                    }
                  >
                    How do I connect my wallet to the staking site?
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/whitepaper/mobile"
                    className={({ isActive }) =>
                      isActive ? activeClassName : deactiveClassName
                    }
                  >
                    Can I stake/claim $Art on mobile?
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/whitepaper/balance"
                    className={({ isActive }) =>
                      isActive ? activeClassName : deactiveClassName
                    }
                  >
                    Where can I see my $Art balance?
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <button className="bg-[#e2e5e7] m-2 flex justify-center gap-3 p-3 rounded-md items-center hover:text-blue-700">
            <SiGitbook className="text-3xl" />{" "}
            <span>
              Powered by <span className="font-bold">GitBook</span>
            </span>
          </button>
        </div>
        <div className="w-full bg-white mt-16 lg:mt-0 h-screen lg:h-[90.5vh] overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default WDrawer;
