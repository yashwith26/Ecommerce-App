import { ThreeDots } from "react-loader-spinner"

import "./Spinner.css"

export function Spinner() {
    return (
        <>
            <div  className="spinner">
                <div className="three">
                <ThreeDots
                    height="180"
                    width="180"
                    radius="9"
                    color="#000000"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
                </div>
            </div>
        </>
    )
}