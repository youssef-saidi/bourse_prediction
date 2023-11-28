import React from 'react'

const DropDown = () => {
    return (
        <div className="origin-top-right absolute right-1 lg:top-5 top-10 w-56 rounded-md shadow-lg bg-white z-20">
            <div className={true ? "block py-1" : "hidden py-1"}>
                <span
                    href="/account"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 hover:text-white"
                >
                    Account
                </span>
                <span
                    // onClick={() => dispatch(logout())}
                    href="."
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 hover:text-white"
                >
                    Logout
                </span>
            </div>
        </div>
    )
}

export default DropDown