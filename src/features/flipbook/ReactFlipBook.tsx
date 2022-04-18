import React, { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { PageFlip } from "page-flip";
import { IEventProps, IFlipSetting } from "./flipbook";

interface IProps extends IFlipSetting, IEventProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  renderOnlyPageLengthChange?: boolean;
}

export default function ReactFlipBook(props: IProps) {
  const htmlElementRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLElement[]>([]);
  const pageFlip = useRef<PageFlip | any>();
  const [pages, setPages] = useState<ReactElement[]>([]);

  const refreshOnPageDelete = useCallback(() => {
    if (pageFlip.current) {
      pageFlip.current.clear();
    }
  }, []);

  useEffect(() => {
    childRef.current = [];
    if (props.children) {
      const childList = React.Children.map(props.children, (child) => {
        return React.cloneElement(child as ReactElement, {
          ref: (dom: any) => {
            if (dom) {
              childRef.current.push(dom);
            }
          },
        });
      });

      if (childList) {
        if (!props.renderOnlyPageLengthChange || pages.length !== childList.length) {
          if (childList.length < pages.length) {
            refreshOnPageDelete();
          }

          setPages(childList);
        }
      }

      console.log(childList);
    }
  }, [props.children]);

  return (
    <div ref={htmlElementRef} className={props.className} style={props.style}>
      {pages}
    </div>
  );
}
