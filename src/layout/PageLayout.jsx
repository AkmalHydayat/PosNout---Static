/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from "react";
import NavTop from "./NavTop";
import ButtonSide from "../components/ButtonSide";
import Sidebar from "./Sidebar";

const LayoutPage = ({ children }) => {
  const [
    iconToggle,
    sideWidth,
    widthUserImg,
    inlineHiden,
    contentWidth,
    fontSize,
    textCenter,
    fontSize6xl,
    mSDrop,
    me4,
    sideActive,
    rounded,
    w45,
    pb,
    ps,
    hidenBlock,
    delay,
  ] = ButtonSide();


  return (
    <React.Fragment>
      <div
        className={`${sideWidth} border-[1px] border-gray-300 dark:border-colorDarkTwo  transition-all ease-in bg-colorTwo dark:bg-colorDarkTwo dark:shadow-black shadow-sm2 shadow-black/20 h-screen fixed`}
      >
        <Sidebar
          iconToggle={iconToggle}
          sideWidth={sideWidth}
          widthUserImg={widthUserImg}
          inlineHiden={inlineHiden}
          fontSize={fontSize}
          textCenter={textCenter}
          fontSize6xl={fontSize6xl}
          mSDrop={mSDrop}
          me4={me4}
          sideActive={sideActive}
          rounded={rounded}
          w45={w45}
          pb={pb}
          hidenBlock={hidenBlock}
          delay={delay}

        />
        <div>{iconToggle}</div>
      </div>
      <div className="">
        <main className={`${contentWidth} ${ps} transition-all ease-in`}>
          {/* NavTop */}
          <NavTop />

          {/* Page */}
          {children}
        </main>
      </div>
    </React.Fragment>
  );
};

export default LayoutPage;
