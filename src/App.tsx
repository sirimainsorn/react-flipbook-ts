import React, { useCallback, useRef } from "react";
import "./App.css";
import HTMLFlipBook from "react-pageflip";

function App() {
  const book = useRef<HTMLButtonElement | any>(null);

  const onFlip = useCallback((e) => {
    console.log("Current page: " + e.data);
  }, []);

  const renderFlipBook = () => {
    return (
      <HTMLFlipBook
        ref={book}
        width={300}
        height={500}
        className=""
        style={{
          margin: "0 auto",
          background: "#656565",
        }}
        startPage={0}
        size="fixed"
        minWidth={100}
        minHeight={300}
        maxWidth={300}
        maxHeight={500}
        drawShadow
        flippingTime={1000}
        usePortrait
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={1}
        showCover={false}
        mobileScrollSupport={true}
        clickEventForward
        onFlip={onFlip}
        useMouseEvents
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        <div>
          <img
            src="https://www.finnomena.com/wp-content/uploads/2020/08/Cover-Ebook-1stm-768x1087.jpg"
            alt=""
            style={{
              height: "500px",
            }}
          />
        </div>
        <div>
          <img
            src="https://www.finnomena.com/wp-content/uploads/2020/08/Cover-Ebook-1stm-768x1087.jpg"
            alt=""
            style={{
              height: "500px",
            }}
          />
        </div>
        <div>
          <img
            src="https://www.finnomena.com/wp-content/uploads/2020/08/Cover-Ebook-1stm-768x1087.jpg"
            alt=""
            style={{
              height: "500px",
            }}
          />
        </div>
        <div>
          <img
            src="https://www.finnomena.com/wp-content/uploads/2020/08/Cover-Ebook-1stm-768x1087.jpg"
            alt=""
            style={{
              height: "500px",
            }}
          />
        </div>
        <div>
          <img
            src="https://www.finnomena.com/wp-content/uploads/2020/08/Cover-Ebook-1stm-768x1087.jpg"
            alt=""
            style={{
              height: "500px",
            }}
          />
        </div>
        <div>
          <img
            src="https://www.finnomena.com/wp-content/uploads/2020/08/Cover-Ebook-1stm-768x1087.jpg"
            alt=""
            style={{
              height: "500px",
            }}
          />
        </div>
        <div>
          <img
            src="https://www.finnomena.com/wp-content/uploads/2020/08/Cover-Ebook-1stm-768x1087.jpg"
            alt=""
            style={{
              height: "500px",
            }}
          />
        </div>
      </HTMLFlipBook>
    );
  };
  return (
    <div className="App">
      <button onClick={() => book.current.pageFlip().flipNext()}>Next page</button>

      {renderFlipBook()}
    </div>
  );
}

export default App;
