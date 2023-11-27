import routes from "@/constants/routes";
import classnames from "classnames";
import Link from "next/link";
import { useState } from "react";

const SideBar = (props) => {
  const [items, setItems] = useState(false),
    { isOpen } = props,
    classNameLink = classnames(
      "text-sm tracking-wider hidden font-normal ml-3",
      {
        "md:block": isOpen,
      }
    ),
    classNameNavList = classnames(
      "tracking-wider md:block hidden py-2 font-normal",
      {
        "text-sm": isOpen,
        "text-xs w-28 text-center": !isOpen,
      }
    );
  return (
    <>
      <nav
        className={classnames(
          "lg:flex hidden flex-col h-full colorGray justify-between sticky top-0 items-start title z-20 bg-white m-3 rounded-xl",
          { "w-max": !isOpen, "md:w-72": isOpen }
        )}
        style={{
          height: "calc(100vh - 90px)",
        }}
      >
        <div className="relative pt-8">
          <div className="flex flex-col justify-center relative md:items-start items-center">
            <div className="flex flex-row md:py-4 py-3 w-full">
              <Link
                href={routes.HOME}
                className="my-1 colorGray pl-6 pr-3 flex justify-center items-center"
              >
                <span>
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="#5D6E81"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 1L9.44721 0.105573C9.16569 -0.0351909 8.83431 -0.0351909 8.55279 0.105573L9 1ZM17 5H18C18 4.62123 17.786 4.27496 17.4472 4.10557L17 5ZM1 5L0.552786 4.10557C0.214002 4.27496 0 4.62123 0 5H1ZM17 15L17.4472 15.8944C17.786 15.725 18 15.3788 18 15H17ZM9 19L8.55279 19.8944C8.83431 20.0352 9.16569 20.0352 9.44721 19.8944L9 19ZM1 15H0C0 15.3788 0.214002 15.725 0.552786 15.8944L1 15ZM8.55279 1.89443L16.5528 5.89443L17.4472 4.10557L9.44721 0.105573L8.55279 1.89443ZM16.5528 4.10557L8.55279 8.10557L9.44721 9.89443L17.4472 5.89443L16.5528 4.10557ZM9.44721 8.10557L1.44721 4.10557L0.552786 5.89443L8.55279 9.89443L9.44721 8.10557ZM1.44721 5.89443L9.44721 1.89443L8.55279 0.105573L0.552786 4.10557L1.44721 5.89443ZM16.5528 14.1056L8.55279 18.1056L9.44721 19.8944L17.4472 15.8944L16.5528 14.1056ZM9.44721 18.1056L1.44721 14.1056L0.552786 15.8944L8.55279 19.8944L9.44721 18.1056ZM2 15V5H0V15H2ZM18 15V5H16V15H18ZM8 9V19H10V9H8Z" />
                  </svg>
                </span>
                <span className={classNameLink}>DashBoard</span>
              </Link>
            </div>
            <div className="flex flex-row md:py-4 py-3 w-full">
              <Link
                href={"#"}
                className="my-1 colorGray pl-6 pr-3 flex justify-center items-center"
              >
                <span>
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="#5D6E81"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 1L9.44721 0.105573C9.16569 -0.0351909 8.83431 -0.0351909 8.55279 0.105573L9 1ZM17 5H18C18 4.62123 17.786 4.27496 17.4472 4.10557L17 5ZM1 5L0.552786 4.10557C0.214002 4.27496 0 4.62123 0 5H1ZM17 15L17.4472 15.8944C17.786 15.725 18 15.3788 18 15H17ZM9 19L8.55279 19.8944C8.83431 20.0352 9.16569 20.0352 9.44721 19.8944L9 19ZM1 15H0C0 15.3788 0.214002 15.725 0.552786 15.8944L1 15ZM8.55279 1.89443L16.5528 5.89443L17.4472 4.10557L9.44721 0.105573L8.55279 1.89443ZM16.5528 4.10557L8.55279 8.10557L9.44721 9.89443L17.4472 5.89443L16.5528 4.10557ZM9.44721 8.10557L1.44721 4.10557L0.552786 5.89443L8.55279 9.89443L9.44721 8.10557ZM1.44721 5.89443L9.44721 1.89443L8.55279 0.105573L0.552786 4.10557L1.44721 5.89443ZM16.5528 14.1056L8.55279 18.1056L9.44721 19.8944L17.4472 15.8944L16.5528 14.1056ZM9.44721 18.1056L1.44721 14.1056L0.552786 15.8944L8.55279 19.8944L9.44721 18.1056ZM2 15V5H0V15H2ZM18 15V5H16V15H18ZM8 9V19H10V9H8Z" />
                  </svg>
                </span>
                <span className={classNameLink}>Bourses</span>
              </Link>
            </div>

    


           
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
