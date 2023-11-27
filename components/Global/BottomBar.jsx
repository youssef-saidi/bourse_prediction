import routes from "@/constants/routes"
import Link from "next/link"

const BottomBar = () => {
    return (
      <nav className="lg:hidden flex relative bottom-0 w-screen   grid grid-cols-4 z-50">
        <div className="flex flex-col  md:py-4 py-3 items-center">
          <Link  href={routes.HOME} className="my-1 colorGray">
            <svg className="relative -top-1" width="24" height="20" viewBox="0 0 18 20" fill="#5D6E81" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L9.44721 0.105573C9.16569 -0.0351909 8.83431 -0.0351909 8.55279 0.105573L9 1ZM17 5H18C18 4.62123 17.786 4.27496 17.4472 4.10557L17 5ZM1 5L0.552786 4.10557C0.214002 4.27496 0 4.62123 0 5H1ZM17 15L17.4472 15.8944C17.786 15.725 18 15.3788 18 15H17ZM9 19L8.55279 19.8944C8.83431 20.0352 9.16569 20.0352 9.44721 19.8944L9 19ZM1 15H0C0 15.3788 0.214002 15.725 0.552786 15.8944L1 15ZM8.55279 1.89443L16.5528 5.89443L17.4472 4.10557L9.44721 0.105573L8.55279 1.89443ZM16.5528 4.10557L8.55279 8.10557L9.44721 9.89443L17.4472 5.89443L16.5528 4.10557ZM9.44721 8.10557L1.44721 4.10557L0.552786 5.89443L8.55279 9.89443L9.44721 8.10557ZM1.44721 5.89443L9.44721 1.89443L8.55279 0.105573L0.552786 4.10557L1.44721 5.89443ZM16.5528 14.1056L8.55279 18.1056L9.44721 19.8944L17.4472 15.8944L16.5528 14.1056ZM9.44721 18.1056L1.44721 14.1056L0.552786 15.8944L8.55279 19.8944L9.44721 18.1056ZM2 15V5H0V15H2ZM18 15V5H16V15H18ZM8 9V19H10V9H8Z" />
            </svg>
          </Link>
          <Link  href={routes.HOME}  className="tracking-wider font-normal" style={{ fontSize: "9.8px" }} >DashBoard</Link>
        </div>
   
  
    
  
        <div className="flex flex-col  md:py-4 py-3 items-center">
          <Link  href={routes.BOURSE} className="my-1 colorGray pr-3">
            <svg className="relative -top-1 activeStroke" stroke="#5D6E81" width="24" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15H17.5L16.0951 13.5951C15.7141 13.2141 15.5 12.6973 15.5 12.1585V9C15.5 6.38757 13.8304 4.16509 11.5 3.34142V3C11.5 1.89543 10.6046 1 9.5 1C8.39543 1 7.5 1.89543 7.5 3V3.34142C5.16962 4.16509 3.5 6.38757 3.5 9V12.1585C3.5 12.6973 3.28595 13.2141 2.90493 13.5951L1.5 15H6.5M12.5 15V16C12.5 17.6569 11.1569 19 9.5 19C7.84315 19 6.5 17.6569 6.5 16V15M12.5 15H6.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
  
          </Link>
          <Link  href={routes.BOURSE}  className="tracking-wider font-normal" style={{ fontSize: "9.8px" }} >BOURSE</Link>
        </div>

        <div className="flex flex-col md:py-4 py-3 items-center">
          <Link  href={routes.HOME} className="my-1 colorGray">
            <svg className="relative -top-1" width="24" height="20" viewBox="0 0 19 12" fill="#5D6E81" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 12H9.5V10H0.5V12ZM0.5 7H18.5V5H0.5V7ZM0.5 2H18.5V0H0.5V2Z" />
            </svg>
  
          </Link>
          <Link  href={routes.HOME}  className="tracking-wider font-normal" style={{ fontSize: "9.8px" }} >Menu</Link>
        </div>
      </nav>
    )
  }
  
  export default BottomBar